# Example Library

This is an example library. It uses a robust structure that can be copied everywhere and has a lot of room for expansion.

## Usage

To make a library using this as a template:

-   Clone this repo.
-   `npm install`
-   Delete the `.git` folder.
    -   **Linux/Bash:** `rm -rf .git`
    -   **Win/CMD:** `rmdir .git /s /q`
-   Run `git init` to create a new repo.
-   Run `npm run prepare`. This sets up linting hooks.
-   Go to the `package.json` and modify it.
-   Delete this readme too.

### Configure the New Repo

You need to:

-   Enable pipelines.
-   Set the repository variable `NPM_TOKEN` to have a token for deploying to npm.

## Pipelines

Are set up in `bitbucket-pipelines.yml`.

All code must pass linting and tests before being published.

-   **Push:** Lint, Build, Test, Publish
-   **PR:** Lint, Build, Test.

## Package.json Scripts

```bash
npm test # test the library
npm run build # build without cleaning
npm run rebuild # delete dist and rebuild
npm run prepare # install husky hooks
npm run lint:fix # run prettier and eslint, auto-fix
npm run lint:check # run prettier and eslint, no writing.
```

## Folders

-   All typescript source should be inside `src`.
    -   All **library** code is in `src/lib`, and compiled to `dist/lib`.
    -   All **test** code is in `src/test`, and is not compiled. It's executed with `ts-node`.
-   Special build tools should be in `tools/`. Only JS files should be here.

The library uses multiple `tsconfig.json` files:

1. `tsconfig.all.json` for building everything.
2. `tsconfig.base.json` for properties common to `lib` and `test`.
3. `lib/tsconfig.json` for library code.
4. `test/tsconfig.json` for test code.

## Tests

-   Uses **jest** for testing.
-   Separate `tsconfig.json` for test code. You can access library code via `@lib/*`.

## Linting and Style

-   Uses `prettier` for code style.
-   Uses `eslint` for linting.
-   Uses the `@reflectiz/eslint-config` preset for eslint and prettier.
-   Includes boilerplate files and dependencies to make the above work.
