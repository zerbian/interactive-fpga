@echo off
cd..
git checkout master
git subtree push --prefix web origin gh-pages
pause