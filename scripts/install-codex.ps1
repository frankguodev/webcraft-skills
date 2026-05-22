param(
  [string]$SkillName = "webcraft-ui"
)

$ErrorActionPreference = "Stop"
$LegacySkillNames = @("webcraft-skills")

$repoRoot = Split-Path -Parent $PSScriptRoot
$source = Join-Path $repoRoot "skills\$SkillName"
$targetRoots = @(
  (Join-Path $HOME ".agents\skills"),
  (Join-Path $HOME ".codex\skills")
)

if (!(Test-Path $source)) {
  throw "Skill source not found: $source"
}

foreach ($targetRoot in $targetRoots) {
  $target = Join-Path $targetRoot $SkillName
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
}
Write-Host "Codex usage: run /skills or type `$ to mention the $SkillName skill."

