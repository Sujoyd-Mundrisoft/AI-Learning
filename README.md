# AI-Learning

## Project Overview

This repository contains SharePoint Framework (SPFx) projects for SharePoint Online using React, SharePoint Framework, SharePoint API, TypeScript, and Fluent UI.

## One-Time Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-organization>/<your-repo-name>.git
   cd <your-repo-name>
   ```
2. Install Node.js (LTS version) if not already installed.
3. Install project dependencies:
   ```bash
   npm install
   ```
4. Add global Git user configuration:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "you@example.com"
   ```
5. Optional: Configure Git default branch name if needed:
   ```bash
   git config --global init.defaultBranch main
   ```
6. If using SPFx, install the SharePoint Yeoman generator globally:
   ```bash
   npm install -g @microsoft/generator-sharepoint
   ```

## Daily Git Commands

- Check repository status:
  ```bash
  git status
  ```
- Add changes:
  ```bash
  git add .
  ```
- Commit changes:
  ```bash
  git commit -m "Your commit message"
  ```
- Create and switch to a new branch:
  ```bash
  git checkout -b feature/your-feature-name
  ```
- Switch branches:
  ```bash
  git checkout main
  ```
- Pull latest changes from remote:
  ```bash
  git pull origin main
  ```
- Push branch to remote:
  ```bash
  git push origin feature/your-feature-name
  ```
- Rename current branch:
  ```bash
  git branch -m new-branch-name
  ```
- View commit history:
  ```bash
  git log --oneline --graph --decorate --all
  ```
- Fetch remote branches without merging:
  ```bash
  git fetch
  ```
- Rebase your branch onto the latest main:
  ```bash
  git pull --rebase origin main
  ```
- Stash changes temporarily:
  ```bash
  git stash
  git stash pop
  ```

## SPFx / SharePoint Online Notes

- Use React with SPFx for SharePoint web parts and extensions.
- Keep TypeScript typings and Fluent UI components updated.
- Use the SharePoint REST API or Microsoft Graph when accessing SharePoint Online data.
- For local workbench testing:
  ```bash
  gulp serve --nobrowser
  ```
- For package creation and deployment:
  ```bash
  gulp bundle --ship
  gulp package-solution --ship
  ```

## Common React Commands

- Start React development server (for SPFx, use `gulp serve` instead):
  ```bash
  npm start
  ```
- Install a package:
  ```bash
  npm install <package-name>
  ```
- Install a package as a dev dependency:
  ```bash
  npm install --save-dev <package-name>
  ```
- Uninstall a package:
  ```bash
  npm uninstall <package-name>
  ```
- Run linting:
  ```bash
  npm run lint
  ```
- Run tests:
  ```bash
  npm test
  ```
- Build the project:
  ```bash
  npm run build
  ```

## SPFx Gulp Task Examples

- Start the local workbench with no browser:
  ```bash
  gulp serve --nobrowser
  ```
- Run the local workbench and open browser:
  ```bash
  gulp serve
  ```
- Bundle for production:
  ```bash
  gulp bundle --ship
  ```
- Create the package solution for deployment:
  ```bash
  gulp package-solution --ship
  ```
- Clean generated build files:
  ```bash
  gulp clean
  ```

## Branch Naming Guidance

- Use a consistent prefix for branch types:
  - `feature/` for new features
  - `bugfix/` for bug fixes
  - `hotfix/` for urgent fixes
  - `chore/` for maintenance or tooling updates
- Example branch name:
  ```bash
  feature/spfx-react-webpart
  ```
- Keep branch names short, descriptive, and lowercase.
- Rebase or merge from `main` regularly to stay current.

## Important Points

- Always work in feature branches and keep `main` clean.
- Commit often with clear messages.
- Use `git pull` or `git fetch` before starting work to avoid conflicts.
- Review changes before committing with `git diff`.
- Use `npm install` after pulling updated `package.json` or `package-lock.json`.
- For SPFx projects, keep toolchain versions compatible with SharePoint Online.
- Document major changes in code comments and project notes.
