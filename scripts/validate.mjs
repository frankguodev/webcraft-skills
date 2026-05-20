import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const requiredFiles = [
  "skills/ai-ui-constitution/SKILL.md",
  "skills/ai-ui-constitution/agents/openai.yaml",
  "skills/ai-ui-constitution/references/checklists/ui-audit.md",
  "skills/ai-ui-constitution/references/checklists/ui-audit.zh.md",
  "skills/ai-ui-constitution/references/workflows/audit-ui.md",
  "skills/ai-ui-constitution/references/workflows/audit-ui.zh.md",
  "skills/ai-ui-constitution/references/workflows/build-ui.md",
  "skills/ai-ui-constitution/references/workflows/review-ui.md",
  "skills/ai-ui-constitution/references/workflows/polish-ui.md",
  "skills/ai-ui-constitution/references/workflows/fix-ui.md",
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

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) {
    errors.push(`Missing ${file}`);
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

console.log("ai-ui-constitution validation ok");
