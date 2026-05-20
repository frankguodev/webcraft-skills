import { copyFileSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

const mappings = [
  {
    source: "core/checklists",
    target: "skills/webcraft-skills/references/checklists"
  },
  {
    source: "core/workflows",
    target: "skills/webcraft-skills/references/workflows"
  },
  {
    source: "core/presets",
    target: "skills/webcraft-skills/references/presets"
  }
];

for (const { source, target } of mappings) {
  const sourceDir = join(root, source);
  const targetDir = join(root, target);

  if (!existsSync(sourceDir)) {
    throw new Error(`Missing source directory: ${source}`);
  }

  mkdirSync(targetDir, { recursive: true });

  for (const entry of readdirSync(sourceDir, { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith(".md")) continue;
    copyFileSync(join(sourceDir, entry.name), join(targetDir, entry.name));
  }
}

console.log("synced core references to skill runtime");

