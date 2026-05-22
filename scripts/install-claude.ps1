param(
  [string]$SkillName = "webcraft-ui"
)

$ErrorActionPreference = "Stop"
$LegacySkillNames = @("webcraft-skills")

$repoRoot = Split-Path -Parent $PSScriptRoot
$source = Join-Path $repoRoot "skills\$SkillName"
$targetRoot = Join-Path $HOME ".claude\skills"
$target = Join-Path $targetRoot $SkillName
$commandSource = Join-Path $repoRoot "commands"
$commandTargetRoot = Join-Path $HOME ".claude\commands"

if (!(Test-Path $source)) {
  throw "Skill source not found: $source"
}

New-Item -ItemType Directory -Force -Path $targetRoot | Out-Null
foreach ($legacySkillName in $LegacySkillNames) {
  $legacyTarget = Join-Path $targetRoot $legacySkillName
  if (Test-Path $legacyTarget) {
    Remove-Item -LiteralPath $legacyTarget -Recurse -Force
    Write-Host "Removed legacy $legacySkillName from $legacyTarget"
  }
}
if (Test-Path $target) {
  Remove-Item -LiteralPath $target -Recurse -Force
}

Copy-Item -Path $source -Destination $target -Recurse
Write-Host "Installed $SkillName to $target"

if (Test-Path $commandSource) {
  New-Item -ItemType Directory -Force -Path $commandTargetRoot | Out-Null
  Get-ChildItem -LiteralPath $commandSource -Filter "*.md" -File | ForEach-Object {
    Copy-Item -LiteralPath $_.FullName -Destination (Join-Path $commandTargetRoot $_.Name) -Force
  }
  Write-Host "Installed Claude Code slash command prompts to $commandTargetRoot"
}

