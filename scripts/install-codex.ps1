param(
  [string]$SkillName = "ai-ui-constitution"
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$source = Join-Path $repoRoot "skills\$SkillName"
$targetRoot = Join-Path $HOME ".codex\skills"
$target = Join-Path $targetRoot $SkillName

if (!(Test-Path $source)) {
  throw "Skill source not found: $source"
}

New-Item -ItemType Directory -Force -Path $targetRoot | Out-Null
if (Test-Path $target) {
  Remove-Item -LiteralPath $target -Recurse -Force
}

Copy-Item -Path $source -Destination $target -Recurse
Write-Host "Installed $SkillName to $target"

