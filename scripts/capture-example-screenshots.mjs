import { existsSync, mkdirSync, readdirSync, readFileSync } from "node:fs";
import { basename, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const examplesRoot = join(root, "examples/test-cases");
const defaultOutputRoot = join(root, "examples/reports/assets");

const args = process.argv.slice(2);

if (args.includes("--help") || args.includes("-h")) {
  printHelp();
  process.exit(0);
}

const selectedCase = getOption("--case");
const selectedViewport = getOption("--viewport");
const outputRoot = resolve(getOption("--out", defaultOutputRoot));
const dryRun = args.includes("--dry-run");

const selectedViewportList = selectedViewport
  ? selectedViewport.split(",").map((value) => value.trim()).filter(Boolean)
  : null;

const cases = collectCases();

if (cases.length === 0) {
  console.error("No example test cases found.");
  process.exit(1);
}

if (dryRun) {
  for (const testCase of cases) {
    for (const viewport of getViewports(testCase.metadata)) {
      for (const state of ["before", "after"]) {
        console.log(relativeOutput(formatOutputPath(testCase.id, state, viewport)));
      }
    }
  }
  process.exit(0);
}

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  console.error("Playwright is required for screenshot capture.");
  console.error("Install it locally with: npm install -D playwright");
  console.error("Then run: npx playwright install chromium");
  process.exit(1);
}

mkdirSync(outputRoot, { recursive: true });

const browser = await chromium.launch();

try {
  for (const testCase of cases) {
    for (const viewport of getViewports(testCase.metadata)) {
      const width = parseViewportWidth(viewport);
      const page = await browser.newPage({
        viewport: {
          width,
          height: width < 700 ? 900 : 1000
        },
        deviceScaleFactor: 1
      });

      for (const state of ["before", "after"]) {
        const htmlFile = state === "before" ? "before.html" : "index.html";
        const htmlPath = join(testCase.directory, htmlFile);
        const outputPath = formatOutputPath(testCase.id, state, viewport);

        await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle" });
        await page.screenshot({ path: outputPath, fullPage: true });
        console.log(`Captured ${relativeOutput(outputPath)}`);
      }

      await page.close();
    }
  }
} finally {
  await browser.close();
}

function collectCases() {
  if (!existsSync(examplesRoot)) return [];

  return readdirSync(examplesRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const directory = join(examplesRoot, entry.name);
      const metadataPath = join(directory, "test.json");
      if (!existsSync(metadataPath)) return null;

      const metadata = JSON.parse(readFileSync(metadataPath, "utf8"));
      return {
        id: entry.name,
        directory,
        metadata
      };
    })
    .filter(Boolean)
    .filter((testCase) => !selectedCase || testCase.id === selectedCase)
    .sort((a, b) => a.id.localeCompare(b.id));
}

function getViewports(metadata) {
  return selectedViewportList ?? metadata.recommendedViewports ?? ["375px", "1280px"];
}

function parseViewportWidth(viewport) {
  const match = /^(\d+)px$/.exec(viewport);
  if (!match) {
    throw new Error(`Invalid viewport: ${viewport}`);
  }
  return Number(match[1]);
}

function formatOutputPath(id, state, viewport) {
  return join(outputRoot, `${id}-${state}-${viewport}.png`);
}

function relativeOutput(path) {
  return path.replace(`${root}\\`, "").replace(`${root}/`, "").replaceAll("\\", "/");
}

function getOption(name, fallback) {
  const index = args.indexOf(name);
  if (index === -1) return fallback;
  return args[index + 1] ?? fallback;
}

function printHelp() {
  console.log(`Usage:
  npm run capture:examples
  npm run capture:examples -- --case theme-preserving-fix
  npm run capture:examples -- --viewport 375px,1280px
  npm run capture:examples -- --dry-run

Options:
  --case <id>          Capture one test case.
  --viewport <list>    Comma-separated viewport widths, such as 375px,1280px.
  --out <dir>          Output directory. Default: examples/reports/assets.
  --dry-run            Print planned output paths without launching a browser.
`);
}
