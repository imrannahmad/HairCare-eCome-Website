@echo off
set "PATH=C:\Users\absar\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd;%LOCALAPPDATA%\Programs\node;%PATH%"

echo [1/6] Initializing git...
git init

echo [2/6] Configuring git identity...
git config user.name "imrannahmad"
git config user.email "imrannahmad@users.noreply.github.com"

echo [3/6] Setting main branch...
git branch -M main

echo [4/6] Staging files...
git add .

echo [5/6] Checking git status...
git status -s

echo [6/6] Setting remote origin...
git remote remove origin 2>nul
git remote add origin https://github.com/imrannahmad/HairCare-eCome-Website.git

echo Remote configured:
git remote -v
