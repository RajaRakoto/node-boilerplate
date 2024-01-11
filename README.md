# node-typescript-boilerplate

[![Sponsor][sponsor-badge]][sponsor]
[![TypeScript version][ts-badge]][typescript-5-3]
[![Node.js version][nodejs-badge]][nodejs]
[![Build Status - GitHub Actions][gha-badge]][gha-ci]

👩🏻‍💻 Developer Ready: A comprehensive template. Works out of the box for most [Node.js][nodejs] projects. 
This project is intended to be used with the latest Active LTS release of [Node.js][nodejs].

🏃🏽 Instant Value - All basic tools included and configured:

- [TypeScript][typescript] [5.3][typescript-5-3]
- [ESM][esm]
- [ESLint][eslint] with some initial rules recommendation
- [Jest][jest] for fast unit testing and code coverage
- Type definitions for Node.js and Jest
- [Prettier][prettier] to enforce consistent code style
- NPM [scripts](#available-scripts) for common operations
- [EditorConfig][editorconfig] for consistent coding style
- Reproducible environments thanks to [Volta][volta]
- Example configuration for [GitHub Actions][gh-actions]
- Simple example of TypeScript code and unit test
- Run tasks with Grunt (example for backup)
- Build faster with ESBuild

---

### Using

To use this template, use the following commands:

```bash
git clone https://github.com/RajaRakoto/node-typescript-boilerplate
cd node-typescript-boilerplate
pnpm install
```

> NOTE: you can use `npm` or `yarn` instead of `pnpm`

---

### Scripts

- `clean` - remove coverage data, Jest cache and transpiled files
- `dev:watch` - interactive watch mode to automatically run source files with nodemon
- `build` - transpile TypeScript to ES6
- `build:watch` - interactive watch mode to automatically transpile source files
- `build:bundle` - bundle source files with ESBuild
- `test` - run tests
- `test:watch` - interactive watch mode to automatically re-run tests
- `eslint` - lint source files and tests with ESLint
- `prettier` - reformat files
- `backup` - backup files with Grunt
- `npm-check` - check for outdated, incorrect, and unused dependencies
- `npm-upgrade` - upgrade outdated dependencies
