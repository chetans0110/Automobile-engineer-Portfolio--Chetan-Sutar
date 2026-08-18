$ErrorActionPreference = "Stop"

# Run this script from your portfolio project root.
# It creates assets\icons and downloads local SVG copies.

$iconsDir = Join-Path (Get-Location) "assets\icons"
New-Item -ItemType Directory -Force -Path $iconsDir | Out-Null

$icons = @{
    "ansys.svg"     = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansys/ansys-original.svg"
    "matlab.svg"    = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg"
    "autocad.svg"   = "https://cdn.jsdelivr.net/npm/simple-icons@16.28.0/icons/autocad.svg"
    "solidworks.svg"= "https://commons.wikimedia.org/wiki/Special:Redirect/file/SOLIDWORKS%20Logo.svg"
    "catia.svg"     = "https://commons.wikimedia.org/wiki/Special:Redirect/file/CATIA%20Logo.svg"
    "simulink.svg"  = "https://api.iconify.design/material-icon-theme/simulink.svg"
}

foreach ($item in $icons.GetEnumerator()) {
    $destination = Join-Path $iconsDir $item.Key
    Write-Host "Downloading $($item.Key)..."
    Invoke-WebRequest -Uri $item.Value -OutFile $destination
}

Write-Host ""
Write-Host "Done. Icons saved to:"
Write-Host $iconsDir
Write-Host ""
Write-Host "FEMM is not included because there is no reliable standard SVG logo in Devicon/Simple Icons."
Write-Host "We can add a proper FEMM asset separately if you want."
