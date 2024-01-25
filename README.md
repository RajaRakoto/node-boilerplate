# node-boilerplate 🚀

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/for-you.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com) [![forthebadge](https://github.com/RajaRakoto/github-docs/blob/master/badge/build-by.svg?raw=true)](https://forthebadge.com) 

![Git](https://img.shields.io/badge/-Git-777?style=flat&logo=git&logoColor=F05032&labelColor=ffffff) ![Gitub](https://img.shields.io/badge/-Gitub-777?style=flat&logo=github&logoColor=777&labelColor=ffffff)

**Developer Ready: A comprehensive template. Works out of the box for most Node.js projects. This project is intended to be used with the latest active LTS release of Node.js.**

Instant Value - All basic tools included and configured:

- 🚀 Typescript >= 5.3
- 🌐 Node.js >= 20
- 🧅 Use Bun as package manager
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

### 📌 Using 

To use this template, use the following commands:

```bash
curl -fsSL https://bun.sh/install | bash # if you don't have bun installed
git clone https://github.com/RajaRakoto/node-boilerplate
cd node-boilerplate
bun install # to install all dependencies
bun run pkg-upgrade # to upgrade outdated dependencies in interactive mode
```

> NOTE: I just use `bun` for performance reasons, you can use `npm`, `yarn` or `pnpm`. [What is bun ?](https://bun.sh/)
> I use MIT license for this starter which contains my name and my github profile, don't forget to modify it
> Similarly, for certain configurations in the package.json file, you need to modify them to tailor them to your project (e.g., name, description, author, keywords, main, repository, ...).

---

### 📌 Scripts 

- 📜 `start` - run your application with node
- 📜 `clean` - remove coverage data, prod build, ...
- 📜 `dev:tsc:watch` - interactive watch mode to automatically transpile source files with tsc-watch in development 
- 📜 `dev:nodemon:watch` - interactive watch mode to automatically restart Node.js server in development with nodemon 
- 📜 `build` - transpile TypeScript to ES6 
- 📜 `build:watch` - interactive watch mode to automatically transpile source files 
- 📜 `build:bundle` - bundle source files with ESbuild
- 📜 `test` - run tests with Jest
- 📜 `test:watch` - interactive watch mode to automatically re-run tests with Jest
- 📜 `eslint` - lint source files with ESlint
- 📜 `prettier` - reformat source files with Prettier
- 📜 `backup` - backup files with Grunt
- 📜 `pkg-check` - check useless dependencies with depcheck
- 📜 `pkg-upgrade` - upgrade outdated dependencies (interactive mode) with npm-check-updates
- 📜 `versioning` - start ungit server 

> NOTE: `dev.tsc.watch` and `dev:nodemon:watch` script are designed to run at the same time when developing your application 

---

### 📌 Similar

You can also check out my other starter projects:

- 🚀 [bun-boilerplate](https://github.com/RajaRakoto/bun-boilerplate)
- 🚀 [react-boilerplate](https://github.com/RajaRakoto/react-boilerplate)
- 🚀 [next-boilerplate](https://github.com/RajaRakoto/next-boilerplate)