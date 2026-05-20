#!/usr/bin/env node
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { homedir } from "node:os";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const args = process.argv.slice(2);
const command = args[0] ?? "install";

const usage = `Usage:
  npx ai-ui-constitution install --agent codex
  npx ai-ui-constitution install --agent claude
  npx ai-ui-constitution install --agent all

Options:
  --agent <codex|claude|all>  Target agent. Default: codex.
  --copy                     Copy files. This installer always copies.
  -y, --yes                  Non-interactive. This installer is non-interactive.
`;

if (command === "help" || args.includes("--help") || args.includes("-h")) {
  console.log(usage);
  process.exit(0);
}

if (command !== "install") {
  console.error(`Unknown command: ${command}\n\n${usage}`);
  process.exit(1);
}

function getOption(name, fallback) {
  const index = args.indexOf(name);
  if (index === -1) return fallback;
  return args[index + 1] ?? fallback;
}

const agent = getOption("--agent", "codex").toLowerCase();
const targets =
  agent === "all" || agent === "*"
    ? ["codex", "claude"]
    : [agent];

const skillName = "ai-ui-constitution";
const skillSource = join(root, "skills", skillName);
const commandSource = join(root, "commands");

if (!existsSync(skillSource)) {
  console.error(`Skill source not found: ${skillSource}`);
  process.exit(1);
}

if (!existsSync(commandSource)) {
  console.error(`Command source not found: ${commandSource}`);
  process.exit(1);
}

const agentConfig = {
  codex: {
    skillRoot: join(homedir(), ".codex", "skills"),
    commandRoot: join(homedir(), ".codex", "commands")
  },
  claude: {
    skillRoot: join(homedir(), ".claude", "skills"),
    commandRoot: join(homedir(), ".claude", "commands")
  }
};

for (const target of targets) {
  const config = agentConfig[target];
  if (!config) {
    console.error(`Unsupported agent: ${target}. Use codex, claude, or all.`);
    process.exit(1);
  }

  const skillTarget = join(config.skillRoot, skillName);
  mkdirSync(config.skillRoot, { recursive: true });
  mkdirSync(config.commandRoot, { recursive: true });

  if (existsSync(skillTarget)) {
    rmSync(skillTarget, { recursive: true, force: true });
  }

  cpSync(skillSource, skillTarget, { recursive: true });

  for (const entry of readdirSync(commandSource, { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith(".md")) continue;
    cpSync(join(commandSource, entry.name), join(config.commandRoot, entry.name));
  }

  console.log(`Installed ${skillName} skill to ${skillTarget}`);
  console.log(`Installed UI slash commands to ${config.commandRoot}`);
}

console.log("\nTry:");
console.log("  /ui-audit current website");
console.log("  /ui-fix Critical and Major issues from the last audit");
console.log("\nStable commands: /ui-audit, /ui-fix");
console.log("Experimental commands are installed for iteration: /ui-review, /ui-polish, /ui-build, /ui-preset");
