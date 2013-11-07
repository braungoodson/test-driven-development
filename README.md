 1458  mkdir Tutorials
 1459  cd Tutorials
 1460  mkdir test-driven-development
 1461  cd test-driven-development
 1462  git init
 1463  npm init
 1464  git add .
 1465  git commit -am "+ files"
 1466  echo "node_modules" > .gitignore
 1467  echo "node_modules" > .npmignore
 1468  git add .gitignore
 1469  git add .npmignore
 1470  git commit -am "+ ignorance"
 1471* cd Tutorials
 1472* cd test-driven-development
 1473* touch README.md
 1474* git add README.md
 1475* git commit -am "+ instructions"
 1476* vim README.md
