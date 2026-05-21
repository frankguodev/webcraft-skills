import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const examplesRoot = join(root, "examples/test-cases");
const readmePath = join(examplesRoot, "README.md");
const requiredCaseFiles = ["before.html", "index.html", "expected-findings.md", "test.json"];
const errors = [];

if (!existsSync(examplesRoot)) {
  errors.push("Missing examples/test-cases directory");
}

if (!existsSync(readmePath)) {
  errors.push("Missing examples/test-cases/README.md");
}

const caseDirectories = existsSync(examplesRoot)
  ? readdirSync(examplesRoot, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort()
  : [];

for (const directory of caseDirectories) {
  for (const file of requiredCaseFiles) {
    const path = join(examplesRoot, directory, file);
    if (!existsSync(path)) {
      errors.push(`Missing examples/test-cases/${directory}/${file}`);
    }
  }

  const metadataPath = join(examplesRoot, directory, "test.json");
  if (existsSync(metadataPath)) {
    validateMetadata(directory, metadataPath);
  }
}

if (existsSync(readmePath)) {
  const readme = readFileSync(readmePath, "utf8");
  const listedCases = [...readme.matchAll(/^- `([^`/]+)\/`:/gm)]
    .map((match) => match[1])
    .sort();
  const directorySet = new Set(caseDirectories);
  const listedSet = new Set(listedCases);

  if (listedCases.length === 0) {
    errors.push("examples/test-cases/README.md does not list any test cases");
  }

  for (const listedCase of listedCases) {
    if (!directorySet.has(listedCase)) {
      errors.push(`README lists missing test case directory: examples/test-cases/${listedCase}`);
    }
  }

  for (const directory of caseDirectories) {
    if (!listedSet.has(directory)) {
      errors.push(`Test case directory is not listed in examples/test-cases/README.md: ${directory}`);
    }
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("example test cases validation ok");

function validateMetadata(directory, metadataPath) {
  let metadata;
  try {
    metadata = JSON.parse(readFileSync(metadataPath, "utf8"));
  } catch (error) {
    errors.push(`Invalid JSON in examples/test-cases/${directory}/test.json: ${error.message}`);
    return;
  }

  if (metadata.id !== directory) {
    errors.push(`examples/test-cases/${directory}/test.json id must match directory name`);
  }

  if (typeof metadata.type !== "string" || metadata.type.length === 0) {
    errors.push(`examples/test-cases/${directory}/test.json type must be a non-empty string`);
  }

  if (!Array.isArray(metadata.workflows) || metadata.workflows.length === 0) {
    errors.push(`examples/test-cases/${directory}/test.json workflows must be a non-empty array`);
  }

  if (!Array.isArray(metadata.covers) || metadata.covers.length === 0) {
    errors.push(`examples/test-cases/${directory}/test.json covers must be a non-empty array`);
  }

  if (typeof metadata.hasScreenshots !== "boolean") {
    errors.push(`examples/test-cases/${directory}/test.json hasScreenshots must be a boolean`);
  }
}
