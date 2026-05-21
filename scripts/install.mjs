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
  npx webcraft-skills install --agent codex
  npx webcraft-skills install --agent claude
  npx webcraft-skills install --agent all

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

const skillName = "webcraft-skills";
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
    skillRoots: [
      join(homedir(), ".agents", "skills"),
      join(homedir(), ".codex", "skills")
    ],
    supportsCommands: false
  },
  claude: {
    skillRoots: [join(homedir(), ".claude", "skills")],
    commandRoot: join(homedir(), ".claude", "commands"),
    supportsCommands: true
  }
};

for (const target of targets) {
  const config = agentConfig[target];
  if (!config) {
    console.error(`Unsupported agent: ${target}. Use codex, claude, or all.`);
    process.exit(1);
  }

  const skillTargets = config.skillRoots.map((skillRoot) => join(skillRoot, skillName));

  for (const skillTarget of skillTargets) {
    mkdirSync(dirname(skillTarget), { recursive: true });

    if (existsSync(skillTarget)) {
      rmSync(skillTarget, { recursive: true, force: true });
    }

    cpSync(skillSource, skillTarget, { recursive: true });
    console.log(`Installed ${skillName} skill to ${skillTarget}`);
  }

  if (config.supportsCommands) {
    mkdirSync(config.commandRoot, { recursive: true });
    for (const entry of readdirSync(commandSource, { withFileTypes: true })) {
      if (!entry.isFile() || !entry.name.endsWith(".md")) continue;
      cpSync(join(commandSource, entry.name), join(config.commandRoot, entry.name));
    }
  }

  if (config.supportsCommands) {
    console.log(`Installed Claude Code slash command prompts to ${config.commandRoot}`);
  }
}

console.log("\nTry:");
console.log("  Use webcraft-skills to audit the current website.");
console.log("  Use webcraft-skills to fix Critical and Major issues from the last audit.");
console.log("\nCodex: run /skills or type $ to mention the webcraft-skills skill.");
console.log("Claude Code: slash command prompts are installed when using --agent claude or --agent all.");
