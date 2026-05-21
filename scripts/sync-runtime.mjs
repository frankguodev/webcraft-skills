import { copyFileSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

const mappings = [
  {
    source: "core/checklists",
    target: "skills/webcraft-skills/references/checklists",
    extensions: [".md"]
  },
  {
    source: "core/checklists/modules",
    target: "skills/webcraft-skills/references/checklists/modules",
    extensions: [".md"]
  },
  {
    source: "core/workflows",
    target: "skills/webcraft-skills/references/workflows",
    extensions: [".md"]
  },
  {
    source: "core/presets",
    target: "skills/webcraft-skills/references/presets",
    extensions: [".md"]
  },
  {
    source: "core/modes",
    target: "skills/webcraft-skills/references/modes",
    extensions: [".json"]
  }
];

for (const { source, target, extensions = [".md"] } of mappings) {
  const sourceDir = join(root, source);
  const targetDir = join(root, target);

  if (!existsSync(sourceDir)) {
    throw new Error(`Missing source directory: ${source}`);
  }

  mkdirSync(targetDir, { recursive: true });

  for (const entry of readdirSync(sourceDir, { withFileTypes: true })) {
    if (!entry.isFile() || !extensions.some((extension) => entry.name.endsWith(extension))) continue;
    copyFileSync(join(sourceDir, entry.name), join(targetDir, entry.name));
  }
}

console.log("synced core references to skill runtime");

