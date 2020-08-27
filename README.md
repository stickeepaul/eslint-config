# Stickee ESLint Config

Stickee settings for [ESlint](https://eslint.org/)

## What it does

- Lints JavaScript based on the latest standards
- Removes 99.99% of the problems QA finds with your JavaScript code*

<small>*no refunds</small>

## Install

1. If you don't already have a `package.json` create one with `npm init`
2. Install the peer dependencies of the config
    ```
    npx install-peerdeps --dev @stickee/eslint-config
    ```
3. Admire all the new devDependencies you have
4. Create an `.eslintrc.json` file in the root of your project's directory
    ```
    {
        "extends": [
            "@stickee"
        ],
    }
    ```
5. Add a lint script into your `package.json`:
    ```
    "scripts": {
        "lint": "eslint .",
        "lint:fix": "eslint . --fix"
    }
    ```
6. Write beautiful JavaScript that makes QA proud

Or just type `npx stickee-javascript-code-style`.

## Settings

You can override any of the ESLint or Prettier settings. 

```
{
    "extends": [
        "@stickee"
    ],
    "rules": {
        "no-console": 2
    }
}
```

## Editor installation

ESLint should be configured to run as a pre-commit hook on the project you're working on but there's no harm in running it on every save.

### PHPStorm

Refer to [the docs](https://www.jetbrains.com/help/phpstorm/eslint.html) for instructions on running ESLint from PHPStorm.

### VSCode

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Change your VSCode `settings.json` file:
    ```
    // These are all my auto-save configs
    "editor.formatOnSave": true,
    // turn it off for JS and JSX, we will do this via eslint
    "[javascript]": {
        "editor.formatOnSave": false
    },
    "[javascriptreact]": {
        "editor.formatOnSave": false
    },
    // tell the ESLint plugin to run on save
    "eslint.autoFixOnSave": true,
    ```
