import { existsSync, readFileSync, readdirSync } from "node:fs";
import { extname, join, relative } from "node:path";

const root = process.cwd();
const requiredFiles = [
  "skills/ai-ui-constitution/SKILL.md",
  "skills/ai-ui-constitution/agents/openai.yaml",
  "skills/ai-ui-constitution/references/checklists/ui-audit.md",
  "skills/ai-ui-constitution/references/checklists/ui-audit.zh.md",
  "skills/ai-ui-constitution/references/workflows/audit-ui.md",
  "skills/ai-ui-constitution/references/workflows/audit-ui.zh.md",
  "skills/ai-ui-constitution/references/workflows/build-ui.md",
  "skills/ai-ui-constitution/references/workflows/build-ui.zh.md",
  "skills/ai-ui-constitution/references/workflows/review-ui.md",
  "skills/ai-ui-constitution/references/workflows/review-ui.zh.md",
  "skills/ai-ui-constitution/references/workflows/polish-ui.md",
  "skills/ai-ui-constitution/references/workflows/polish-ui.zh.md",
  "skills/ai-ui-constitution/references/workflows/fix-ui.md",
  "skills/ai-ui-constitution/references/workflows/fix-ui.zh.md",
  "skills/ai-ui-constitution/references/presets/cinematic-minimal.md",
  "skills/ai-ui-constitution/references/presets/cinematic-minimal.zh.md",
  "commands/ui-audit.md",
  "docs/commands.md",
  "docs/configuration.md",
  "scripts/sync-runtime.mjs",
  "examples/project-config/EXTEND.md",
  "examples/project-config/config.json",
  "examples/test-cases/README.md",
  "examples/test-cases/rough-landing/index.html",
  "examples/test-cases/rough-landing/expected-findings.md",
  "examples/test-cases/broken-mobile/index.html",
  "examples/test-cases/broken-mobile/expected-findings.md",
  "examples/test-cases/missing-states/index.html",
  "examples/test-cases/missing-states/expected-findings.md",
  "examples/test-cases/existing-style-plus-design-ref/index.html",
  "examples/test-cases/existing-style-plus-design-ref/reference-layout.txt",
  "examples/reports/rough-landing-audit.md",
  "examples/reports/broken-mobile-audit.md",
  "examples/reports/missing-states-review.md",
  "examples/reports/existing-style-build.md",
  "examples/reports/broken-mobile-fix.md",
  "examples/reports/missing-states-fix.md",
  "examples/reports/rough-landing-polish.md",
  "examples/reports/workflow-test-matrix.md"
];

const errors = [];
const warnings = [];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) {
    errors.push(`Missing ${file}`);
  }
}

function collectMarkdownFiles(directory) {
  const entries = readdirSync(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectMarkdownFiles(fullPath));
    } else if (extname(entry.name) === ".md") {
      files.push(fullPath);
    }
  }

  return files;
}

for (const referenceRoot of [
  "core",
  "skills/ai-ui-constitution/references"
]) {
  const directory = join(root, referenceRoot);
  if (!existsSync(directory)) continue;

  const files = collectMarkdownFiles(directory);
  const fileSet = new Set(files.map((file) => relative(directory, file).replaceAll("\\", "/")));

  for (const file of fileSet) {
    if (file.endsWith(".zh.md")) {
      const englishPair = file.replace(/\.zh\.md$/, ".md");
      if (!fileSet.has(englishPair)) {
        errors.push(`Missing English locale pair for ${referenceRoot}/${file}`);
      }
    } else {
      const chinesePair = file.replace(/\.md$/, ".zh.md");
      if (!fileSet.has(chinesePair)) {
        errors.push(`Missing Chinese locale pair for ${referenceRoot}/${file}`);
      }
    }
  }
}

function countHeadings(content) {
  return content
    .split(/\r?\n/)
    .filter((line) => /^#{2,3}\s+\S/.test(line))
    .length;
}

for (const referenceRoot of [
  "core",
  "skills/ai-ui-constitution/references"
]) {
  const directory = join(root, referenceRoot);
  if (!existsSync(directory)) continue;

  const files = collectMarkdownFiles(directory);
  const fileSet = new Set(files.map((file) => relative(directory, file).replaceAll("\\", "/")));

  for (const file of fileSet) {
    if (file.endsWith(".zh.md")) continue;

    const chinesePair = file.replace(/\.md$/, ".zh.md");
    if (!fileSet.has(chinesePair)) continue;

    const englishContent = readFileSync(join(directory, file), "utf8");
    const chineseContent = readFileSync(join(directory, chinesePair), "utf8");
    const englishHeadings = countHeadings(englishContent);
    const chineseHeadings = countHeadings(chineseContent);
    const smaller = Math.min(englishHeadings, chineseHeadings);
    const larger = Math.max(englishHeadings, chineseHeadings);

    if (larger >= 8 && (smaller === 0 || larger / smaller > 2)) {
      warnings.push(
        `Locale pair may be unbalanced: ${referenceRoot}/${file} has ${englishHeadings} headings, ${referenceRoot}/${chinesePair} has ${chineseHeadings}`
      );
    }
  }
}

const skillPath = join(root, "skills/ai-ui-constitution/SKILL.md");
if (existsSync(skillPath)) {
  const skill = readFileSync(skillPath, "utf8");
  if (!/^---\r?\nname: ai-ui-constitution\r?\ndescription: .+\r?\n---/s.test(skill)) {
    errors.push("Invalid SKILL.md frontmatter");
  }
}

for (const file of ["examples/project-config/config.json", "package.json"]) {
  const path = join(root, file);
  if (!existsSync(path)) continue;
  try {
    JSON.parse(readFileSync(path, "utf8"));
  } catch (error) {
    errors.push(`Invalid JSON in ${file}: ${error.message}`);
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

if (warnings.length > 0) {
  console.log(warnings.join("\n"));
}

console.log("ai-ui-constitution validation ok");
