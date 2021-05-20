@echo off
cd..
git checkout main
git subtree push --prefix web origin gh-pages
pause