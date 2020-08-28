# Evernaut / eslint-config-vue

The Evernaut ESLint config for Vue TypeScript projects.

**Includes:**

- eslint
- prettier
- eslint-config-prettier
- eslint-plugin-json
- eslint-plugin-prettier
- eslint-plugin-vue
- vue-eslint-parser
- @typescript-eslint/parser
- @typescript-eslint/eslint-plugin

## Usage

1. Install the package

   ```sh
   npm i -D eslint-config-evernaut-vue
   ```

2. Install the npm peer dependencies

   - Ensure the versions match the required semver specifications in [package.json](./package.json "package.json")

   ```sh
   npm i -D @typescript-eslint/eslint-plugin eslint eslint-plugin-json eslint-plugin-prettier eslint-plugin-vue prettier typescript
   ```

3. Add the configuration to the `extends` property in the project's eslint configuration

   ```js
   extends: ["evernaut-vue"]
   ```

## Process Guides

- [Local Environment Setup Process](./docs/LOCAL_ENVIRONMENT_SETUP_PROCESS.md "Local Environment Setup Process")
- [Development Process](./docs/DEVELOPMENT_PROCESS.md "Development Process")
- [Issue Triage Process](./docs/ISSUE_TRIAGE_PROCESS.md "Issue Triage Process")
- [Code Review Process](./docs/CODE_REVIEW_PROCESS.md "Code Review Process")
- [Release Process](./docs/RELEASE_PROCESS.md "Release Process")

## Reference

- [Changelog](./CHANGELOG.md "Changelog")
- [Code of Conduct](./docs/CODE_OF_CONDUCT.md "Code of Conduct")
- [Contributing](./docs/CONTRIBUTING.md "Contributing")
- [Security](./docs/SECURITY.md "Security")
- [Support](./docs/SUPPORT.md "Support")
- [License](./LICENSE.md "License")
