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

### 📌 Usage

To use this template, use the following commands:

```bash
bun create github.com/RajaRakoto/node-boilerplate <project-name>
cd <project-name>
bun run pkg-upgrade # to upgrade outdated dependencies in interactive mode
```

> NOTE 1: I employ the `MIT license` for this starter kit, which includes my name and GitHub profile. Please remember to adjust or remove it if deemed unnecessary.

> NOTE 2: In order to help you better understand the structure of this boilerplate, there is a `README.md` file in each subdirectory of src.

> NOTE 3: For certain configurations in the `package.json` file, you need to modify them to tailor them to your project (e.g: name, description, author, keywords, main, repository, ...).

---

### 📌 NPM Scripts

**Start**

- 📜 `start` - run your application with node.

**Clean**

- 📜 `clean` - Remove coverage data, prod, build.

**Development**

- 📜 `dev:tsc:watch` - interactive watch mode to automatically transpile source files with tsc-watch in development.
- 📜 `dev:nodemon:watch` - interactive watch mode to automatically restart Node.js server in development with nodemon.

**Build**

- 📜 `build` - transpile TypeScript to ES6.
- 📜 `build:watch` - interactive watch mode to automatically transpile source files .
- 📜 `build:bundle` - bundle source files with ESbuild.

**Testing**

- 📜 `test` - run tests with Jest.
- 📜 `test:watch` - interactive watch mode to automatically re-run tests with Jest.

**Linting and Formatting**

- 📜 `eslint` - lint source files with ESlint.
- 📜 `prettier` - reformat source files with Prettier.

**Backup and Dependency Management**

- 📜 `backup` - backup files with Grunt.
- 📜 `pkg-check` - check useless dependencies with depcheck.
- 📜 `pkg-upgrade` - upgrade outdated dependencies (interactive mode) with npm-check-updates.

**Versioning**

- 📜 `versioning` - start ungit server.

**npm Commands**

- 📜 `npm-version:major` - Increments the major version number of your project using npm.
- 📜 `npm-version:minor` - Increments the minor version number of your project using npm.
- 📜 `npm-version:patch` - Increments the version patch number of your project using npm.

> NOTE: `dev.tsc.watch` and `dev:nodemon:watch` script are designed to run at the same time when developing your application.

---

### 📌 Similar

You can also check out my other starter projects:

- 🚀 [bun-boilerplate](https://github.com/RajaRakoto/bun-boilerplate)
- 🚀 [react-boilerplate](https://github.com/RajaRakoto/react-boilerplate)
- 🚀 [next-boilerplate](https://github.com/RajaRakoto/next-boilerplate)
- 🚀 [quik-boilerplate](https://github.com/RajaRakoto/quik-boilerplate)
- 🚀 [vscode-boilerplate](https://github.com/RajaRakoto/vscode-boilerplate)
- 🚀 [cli-boilerplate](https://github.com/RajaRakoto/cli-boilerplate)