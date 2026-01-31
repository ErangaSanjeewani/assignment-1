# IT23828452 Translator & UI Testing

This repository contains automated tests for a university assignment using Playwright. The tests cover both the translator functionality and the user interface (UI) of the application.

## Project Structure

- `tests/` - Contains Playwright test scripts:
  - `IT23828452_translator.spec.js`: Tests for the translator feature.
  - `IT23828452_ui.spec.js`: Tests for UI elements and interactions.
- `test-data/` - Test data files.
- `test-results/` - Stores Playwright test results.
- `playwright-report/` - Generated HTML reports after test runs.
- `playwright.config.cjs` - Playwright configuration file.
- `package.json` - Project dependencies and scripts.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/IT23828452.git
   cd IT23828452
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Tests
To execute all Playwright tests:
```bash
npx playwright test
```

To view the HTML report after running tests:
```bash
npx playwright show-report
```

## Assignment Details
- **Module:** ITPM
- **Purpose:** Automated testing of translator and UI features for a university assignment.
- **Tools Used:** Playwright, Node.js

## Author
- Name: IT23828452
- Student ID: IT23828452

## License
This project is for educational purposes only.
