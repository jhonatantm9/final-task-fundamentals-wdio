# Final Task - Automated testing in JavaScript with WebdriverIO

This is my implemented solution/project for the final task for the course "[Foundamentals] Automated Testing in JavaScript". The project corresponds to an automated test suite using different tools like WebdriverIO, CucumberJS and Allure.

During this course we learnt many concepts of Automated testing, including different kind of test that can be automated, tools used nowadays form automation testing, and then focusing more in UI testing, we dove into WebdriverIO framework and Cucumber as our main tools for testing automation.

## 🌍 Languages | Idiomas

- 🇺🇸 English (you're here!)
- 🇪🇸 [Ver en Español](docs/README.es.md)

## Content Table

- [Task description](#task-description)
- [Tools](#tools)
- [Execution & Structure of the project](#execution-and-structure-of-the-project)
- [What I learned](#what-i-learned)
- [Results](#results)

## Task description

> Note: This is not the literal task, but a description to give context about what was needed to be done (paraphrasing).

Create three automated tests using the page [https://www.saucedemo.com/](https://www.saucedemo.com/)

### UC-1 Test Login form with empty credentials

**Steps:**

- Type any credentials into "Username" and "Password" fields.
- Clear the inputs.
- Hit the "Login" button.
- Check the error message: "Username is required".

### UC-2 Test Login form with credentials by passing Username

**Steps:**

- Type any credentials in username.
- Enter password.
- Clear the "Password" input.
- Hit the "Login" button.
- Check the error message: "Password is required".

### UC-3 Test Login form with credentials by passing Username & Password

**Steps:**

- Type credentials in username which are under Accepted username are sections.
- Enter password as secret sauce.
- Click on Login and validate the title “Swag Labs” in the dashboard.

The task also stated to use *XPath* selectors and a data provider.

## Tools

This testing automation project was made in Javascript using the following tools/libraries:

- WebdriverIO (v9.16.1)
- Cucumber plugin (v9.16.0)
- Spec reporter plugin (v19.16.0)
- Allure reporter plugin (v9.16.0)
- Allure commandline (v2.34.1)

## Execution and Structure of the project

### Structutre of the solution

As stated before, this project is an automated test suite which uses a set of tools in order to create a robust and scalable test framework.

This project was depeloved using the Page Object Model (POM) pattern which aims to separate the logic of the interaction with the DOM from the steps defined in the different test scenarios.

Here’s a visual breakdown of the folder hierarchy:

```text
project-root/
│
├── src/
|   ├── configs/
|   |   └── wdio.conf.js
|   ├── features/
│   |   └── login.feature
|   ├── po/
|   │   ├── pages/
|   |   |   ├── login.page.js
│   |   |   ├── inventory.page.js
|   |   |   └── ...
|   |   └── index.js
|   └── step-definitions/
|       ├── action-steps.js
|       ├── validation-steps.js
|       └── ...
└── ...
```

### Steps to execute the project

The following are a group of commands you can use to clone, install dependencies and execute the project:

```Shell
git clone https://github.com/jhonatantm9/final-task-fundamentals-wdio.git
cd final-task-fundamentals-wdio
npm install
npm test
```

#### View Allure Reports

If you want to see an HTML report created by Allure, you can go into the folder `artifacts/allure-reports` where you can find the reports of each of the executions. Inside each folder you can find an `index.html` that you can open in a web browser to review the results of the tests.

The reports are generated through a wdio hook that runs once all the tests for each of the features have been completed.

> Note: Each time you run the code (using `npm test`), a **new** folder will be generated creating a new report. These folders are named with the **timestamp** of when the tests were run.

## What I learned

## Results
