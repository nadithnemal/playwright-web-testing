# Playwright Web Testing

## About the Project

This project focuses on learning and practising web test automation using **Playwright** and **JavaScript**. It includes automated tests for selected features of the TodoMVC React demo website.

## Technologies Used

- **Playwright** – Browser automation and testing
- **JavaScript** – Test scripting
- **Node.js** – JavaScript runtime
- **Visual Studio Code** – Code editor

## Website Under Test

[TodoMVC React Demo](https://todomvc.com/examples/react/dist/)

## Test Scenarios

The automated tests cover the following features:

- Adding new todo tasks
- Marking tasks as completed
- Marking completed tasks as active again
- Filtering tasks by All, Active, and Completed
- Verifying task visibility and content
- Clearing completed tasks

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/nadithnemal/playwright-web-testing.git
```

### 2. Navigate to the Project Folder

```bash
cd playwright-web-testing
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Install Playwright Browsers

```bash
npx playwright install
```

### 5. Run the Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode (with a visible browser):

```bash
npx playwright test --headed
```

Run tests tagged with `@sanity`:

```bash
npx playwright test --grep "@sanity"
```

## Project Purpose

The purpose of this project is to develop practical skills in Playwright automation, browser interactions, element selection, assertions, and test execution.

## Author

**Nadith Nemal**

