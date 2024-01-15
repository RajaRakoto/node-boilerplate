<div align="center">
<table>
  <tr>
    <td>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg " width="80">
    </td>
    <td>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" width="300">
    </td>
  </tr>
</table>
</div>

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/for-you.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com) [![forthebadge](https://github.com/RajaRakoto/github-docs/blob/master/badge/build-by.svg?raw=true)](https://forthebadge.com) 

![Git](https://img.shields.io/badge/-Git-777?style=flat&logo=git&logoColor=F05032&labelColor=ffffff) ![Gitub](https://img.shields.io/badge/-Gitub-777?style=flat&logo=github&logoColor=777&labelColor=ffffff)

# node-boilerplate 🚀

**Developer Ready: A comprehensive template. Works out of the box for most Node.js projects. This project is intended to be used with the latest Active LTS release of Node.js.**

Instant Value - All basic tools included and configured:

- 🚀 Typescript >= 5.3
- 🌐 Node.js >= 20
- 🌈 ESM
- 🧹 ESlint with some initial rules recommendation
- ✅ Jest for fast unit testing and code coverage
- 📚 Type definitions for Node.js and Jest
- 🎨 Prettier to enforce consistent code style
- ⚙️ EditorConfig for consistent coding style
- 📦 NPM scripts for common operations
- ⚡ Reproducible environments thanks to Volta
- 🛠️ Example configuration for GitHub Actions
- 📝 Simple example of TypeScript code and unit test
- 🐗 Run tasks with Grunt (example for backup)
- 🚄 Build faster with ESBuild
- 🖥️ Ungit for version control (git) with a GUI
- 🔑 Dotenv for environment variables
- 🔄 Nodemon for automatic restarts node server in development
- 🔌 Tsc-watch for automatic transpile source files in development
- 📘 Runtime library for TypeScript helpers with tslib
- 🗃️ Utility functions for working with ts-api-utils

---

### Using 

To use this template, use the following commands:

```bash
git clone https://github.com/RajaRakoto/node-typescript-boilerplate
cd node-typescript-boilerplate
npm install -g pnpm # if you don't have pnpm installed
pnpm install
```

> NOTE: you can use `npm` or `yarn` instead of `pnpm`, I just use pnpm for performance reasons. You can also use [bun](https://bun.sh/) as a package manager, it's even more efficient than pnpm

---

### Scripts 

install ungit with:

```bash
npm install -g ungit
```

- 📜 `clean` - remove coverage data, Jest - cache and transpiled files 
- 📜 `dev:tsc:watch"` - interactive watch mode to automatically transpile source files with tsc-watch in development 
- 📜 `dev:nodemon:watch` - interactive watch mode to automatically restart Node.js server in development with nodemon 
- 📜 `build` - transpile TypeScript to ES6 
- 📜 `build:watch` - interactive watch mode to automatically transpile source files 
- 📜 `build:bundle` - bundle source files with ESBuild 
- 📜 `test` - run tests 
- 📜 `test:watch` - interactive watch mode to automatically re-run tests 
- 📜 `eslint` - lint source files and tests with ESLint 
- 📜 `prettier` - reformat files 
- 📜 `backup` - backup files with Grunt 
- 📜 `npm-check` - check for outdated, incorrect, and unused dependencies 
- 📜 `npm-upgrade` - upgrade outdated dependencies 
- 📜 `versioning` - start ungit server 

> NOTE: `dev.tsc.watch` and `dev:nodemon:watch` script are designed to run at the same time when developing your application 