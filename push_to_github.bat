@echo off
title Push HairCare Project to GitHub
color 0A
set "PATH=C:\Users\absar\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd;%LOCALAPPDATA%\Programs\node;%PATH%"
cd /d "%~dp0"

echo ========================================================
echo   SAJAD HYGAM - HAIRCARE E-COMMERCE WEBSITE
echo   Pushing code to:
echo   https://github.com/imrannahmad/HairCare-eCome-Website
echo ========================================================
echo.

echo [1/4] Checking Git Status...
git status -s

echo.
echo [2/4] Staging any modified or new files...
git add .

echo.
echo [3/4] Committing changes (if any)...
git commit -m "Update: Sajad Hygam HairCare e-Commerce store with Next.js and static HTML" 2>nul || echo Everything up to date.

echo.
echo [4/4] Pushing to GitHub (origin main)...
echo If a GitHub sign-in window appears, click "Sign in with your browser" to authorize.
echo.
git push -u origin main

echo.
if %ERRORLEVEL% EQU 0 (
    echo ========================================================
    echo   SUCCESS! All code has been pushed to:
    echo   https://github.com/imrannahmad/HairCare-eCome-Website
    echo ========================================================
) else (
    echo ========================================================
    echo   PUSH ENCOUNTERED AN ISSUE!
    echo   Please check:
    echo   1. Did you create the repository 'HairCare-eCome-Website'
    echo      on https://github.com/new ?
    echo   2. Are you signed in as 'imrannahmad' in your browser?
    echo ========================================================
)

echo.
pause
