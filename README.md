# Final Task - Automated testing in JavaScript with WebdriverIO

This is my implemented solution/project for the final task for the course "[Fundamentals] Automated Testing in JavaScript". The project corresponds to an automated test suite using different tools like WebdriverIO, CucumberJS and Allure.

During this course we learnt many concepts of Automated testing, including different kinds of test that can be automated, tools used nowadays for automation testing, and then focusing more on UI testing. We dove into WebdriverIO framework and Cucumber as our main tools for testing automation.

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

> Note: This is not the literal task, but a description to give context about what was needed to be done.

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

**The task also stated to use *XPath* selectors and a data provider.**

## Tools

This project was made in Javascript using the following tools/libraries:

- WebdriverIO (v9.16.1)
- Cucumber plugin (v9.16.0)
- Spec reporter plugin (v19.16.0)
- Allure reporter plugin (v9.16.0)
- Allure commandline (v2.34.1)

## Execution and Structure of the project

### Structure of the solution

As stated before, this project is an automated test suite which uses a set of tools in order to create a robust and scalable test framework.

This project was developed using the Page Object Model (POM) pattern which aims to separate the logic of the interaction with the DOM from the steps defined in the different test scenarios.

Here's a visual breakdown of the folder hierarchy:

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

The reports are generated through a WDIO hook that runs once all the tests for each of the features have been completed.

> Note: Each time you run the code (using `npm test`), a **new** folder will be generated creating a new report. These folders are named with the **timestamp** of when the tests were run.

## What I learned

**This section is divided in two parts**, one of them, where I am going to talk about the concepts I learned in general and another where I'll explain the biggest challenges I had during the implementation of the solution and how I faced them.

### Concepts learned from this project

Although it may sound obvious, one of the things I learned while developing this suite was how to work with **WebdriverIO** and **CucumberJS**. I am putting them together because for building the tests of the project, both technologies went hand in hand.

About Cucumber, I gained an understanding on the keywords it brings, what are they for and why is BDD used in developing teams. With WDIO I learned how to implement those features or behavior defined by the tests in Cucumber in order to create automated tests. I had the opportunity to work with some methods to interact with web elements, define hooks to execute actions at a specific point of the tests lifecycle and work with the in-built assertions of the framework.

Another concept I applied on the project was the use of the Page Object Model (POM) pattern when building tests. The idea of this approach is to represent the different pages of an application into classes and encapsulate the logic of the interaction with the web elements present in those pages in those classes. Some of the advantages of this pattern are that it improves reusability and maintainability, and also reduces the dependency between tests and the underlying UI structure. Personally, one of the things I liked the most of working with this pattern was the directories organization for the page objects, because you have each page in a separated class and you can even have a distribution of components in different classes which resembles how component-based frameworks are used to build software applications.

Finally, the last tool which I learned was Allure which allows you to create different reports for the testing results. With Allure, I was able to generate an HTML report of the tests run. These reports are very useful because they provide an unified place where you can see the results of the execution of all the tests, and allure allows to view each test made with its details in case you need to search for more specific information. The reports of the project are creating using a WDIO hook that tells allure to create a new record each time all test has completed.

### My biggest challenges of this project

There were two main issues I faced when implementing the test suit which I will describe next:

#### 1. **Deletions on inputs:**

Inside two of the scenarios I created, there is one step that requires to delete the values of input elements after first typing some texts. With the action of deleting I faced a problem, because even though WDIO has a function `clearValue`, designed for this purpose, when I executed the tests, it seems like it didn't work. When running the tests in headed mode (viewing in the browser each step), the clearing steps deleted all characters from the inputs, however when the next step was about to be executed, the fields were filled again with the same information that was just erased.

To fix the problem I tried different solutions, using the `waitUntil` and `pause` functions to hold on until the fields' values were empty, sending JavaScript events to clear the input elements, and other changes in the implementation of the steps, but none of them worked and the problem was still there.

The final solution which finally worked was to use the `keys` function and send a series of *Backspaces* to delete all the characters previously typed. This fix may not be the most optimal, but it can simulate quite well the interaction of a real user when deleting an input field.

#### 2. **Generate HTML allure reports**

This was my very first time using Allure (and a HTML test report tool), so it was a path full of trial and error, learning the basics of the tool and how to integrate it into the project.

Fortunately, WebdriverIO has a plugin with allure and the documentation provides enough information to implement, the essential code to generate the first reports. All of this making it easier to implement.

The aspects that took most of my time were: configuring Allure to be compatible with CucumberJS as the test runner, and adding the code to take screenshots when a test fails. At the end, the project includes the generation of reports automatically, showing screenshots for failed tests or failed tries inside a specific test.

## Results

At the end of the project, a functional and structured automated test suite was successfully implemented, capable of correctly validating the login flow in the Saucedemo webpage.

The tests are executed successfully using WebdriverIO and Cucumber, and the results can be visualized through reports generated by Allure.

Here you can see some screenshots of the project.
> (These are reference images, created by making the test fail on purpose and may not coincide with the real results generated when running the repo code).

![Screenshot of execution of the tests in the browsers](/docs/images/tests-execution.png)
*In this image you can see the execution of the automated tests in two browsers (Edge & Firefox).*

![Screenshot of overview tab in the Allure report](/docs/images/report-overview.png)
*The picture shows an Allure report generated after the tests, specifically the Overview tab.*

![Screenshot of behaviors page](/docs/images/report-behaviors.png)
*The screenshot shows the Behavior tab of the report where you can see with more details each test and if a test fails, an attached image can be observed.*
