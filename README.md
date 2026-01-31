# IT23828452 Translator & UI Testing

This repository contains automated tests for a university assignment using Playwright. The tests cover both the translator functionality and the user interface (UI) of the application.

## Project Structure

- 	ests/ - Contains Playwright test scripts:
  - IT23828452_translator.spec.js: Tests for the translator feature.
  - IT23828452_ui.spec.js: Tests for UI elements and interactions.
- 	est-data/ - Test data files.
- 	est-results/ - Stores Playwright test results.
- playwright-report/ - Generated HTML reports after test runs.
- playwright.config.cjs - Playwright configuration file.
- package.json - Project dependencies and scripts.

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm

### Installation
1. Clone the repository:
   `ash
   git clone https://github.com/ErangaSanjeewani/assignment-1.git
   cd assignment-1
   `
2. Install dependencies:
   `ash
   npm install
   `

### Running Tests
To execute all Playwright tests:
`ash
npx playwright test
`

To view the HTML report after running tests:
`ash
npx playwright show-report
`

## Author
- Name: IT23828452

## License
This project is for educational purposes only.
