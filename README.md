# Turn -  Tests

## The tests are being developed with Javascript, Cypress.io & Cucumber

Cypress is a next generation front end testing tool built for the modern web. This enables us to write faster, easier and more reliable tests.

Cucumber, along with Gherkin, is the testing framework. Gherkin is the business language used to write the tests in a “human readable” way. Cucumber helps capture test results as well.

## Cloning

First of all you need to create a fork of the [turnAssessment](https://github.com/gabriel0182/) repository. Once the fork is created, go to your personal GitHub repository and follow the next steps from your local terminal:

1. Clone your fork:

```
git clone https://github.com/your_github_user/turnAssessment.git
```

```

## Installation

Now you need to have [NodeJS](https://nodejs.org/es/), [Chrome](https://www.google.es/chrome/index.html) browser and [Git](https://git-scm.com/download) installed in your machine.

Once you have them, install the dependencies running:

```
npm install
```

## Tools

We suggest using [Visual Studio Code](https://visualstudio.microsoft.com/) as a code editor.

Before starting, we recommend installing the [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension which is our code formatter. Add the file `.vscode/settings.json` with the content:

```
{
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"editor.formatOnSave": true,
	"editor.formatOnPaste": false
}
```

And make sure you have the `.prettierrc` file with the following content:

```
{
	"semi": false,
	"singleQuote": true,
	"useTabs": true,
	"tabWidth": 2,
	"bracketSpacing": true,
	"arrowParens": "always",
	"trailingComma": "es5",
	"printWidth": 100
}
```

This ensures that every time we add new code, it is saved and formatted correctly.

## Execution

In order to execute the tests, you just need to execute the following commands.

If you prefer in headless mode (running all tests):

```
npm run test:all
```

Or if you want to perform with the Cypress test runner:

```
npm run cy:open
```

We recommend running all the scenarios before creating the PR to make sure that everything will go smoothly when running the build of our automated suite, using:

```
node cypress_runner.js
```

Or to target a specific file:

```
node cypress_runner.js --spec "cypress/integration/addValidCandidate.feature"
```

- In file `cypress.json` there are config vars.
- In folder `cypress/support` there are custom commands and page objects of the project.

## Git flow

When you are going to create a new feature test, be sure to create a new branch, but before creating the new branch, pull your local `main` branch so that it is up to date with respect to the remote main branch.

To update the `main` branch:

```
git pull origin main
```

Create and switch to the new branch:

```
git checkout -b descriptive-name-of-the-branch
```

You are now ready to work on your branch locally, and create the new test, or make a fix or refactor when necessary.

When you are adding new code, remember to make frequent and small commits. Once you finish your work, consider to go to the main branch and update it, and then merge/rebase it to the branch you are working on, so that when you create the PR you avoid conflicts.
