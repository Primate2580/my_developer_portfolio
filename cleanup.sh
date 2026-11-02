#!/bin/sh
# Deletes files the new multi-page design no longer uses. Run from the project root: sh cleanup.sh
rm -fv src/components/Hero.jsx src/components/Navigation.jsx src/components/SideRail.jsx \
  src/components/About.jsx src/components/Skills.jsx src/components/Projects.jsx \
  src/components/Experience.jsx src/components/Contact.jsx \
  src/components/profile.jpg src/components/.gitkeep src/components/ui/.gitkeep \
  src/components/ui/ArrowButton.jsx src/components/ui/Dash.jsx src/components/ui/DotRow.jsx \
  src/components/ui/SphereCluster.jsx src/components/ui/SkipLink.jsx \
  src/hooks/useActiveSection.js src/hooks/useUnknownHash.js
rm -f cleanup.sh cleanup.bat
