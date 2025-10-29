# Quiz-Game

Simple web-based Quiz project (college assignment). This repository contains a small client-side quiz with HTML, CSS and JavaScript, plus a simple `connect.php` present in the `Quiz/` folder if you want to use a PHP-backed submission flow.

## Overview

This project implements multiple subject quizzes (computer, math, physics) with static pages for each quiz and a central `quiz.html` entry point. It was developed as a college project and is intentionally lightweight — no build system or package manager required.

## Features

- Multiple quiz pages (computer, math, physics)
- Simple styles per page using CSS
- Client-side quiz logic in JavaScript
- Optional PHP backend helper (`connect.php`) included

## Project structure

```
Quiz/
  ├─ quiz.html         # Main quiz entry (open this in a browser)
  ├─ quiz.css          # Styles used by quiz pages (if present)
  ├─ computer.html
  ├─ computer.css
  ├─ computer.js
  ├─ math.html
  ├─ math.css
  ├─ math.js
  ├─ physic.html
  ├─ physic.css
  ├─ physic.js
  ├─ form.html
  ├─ form.css
  ├─ connect.php      # Optional PHP backend (for submissions)
image/
  └─ computer1.avif
```

Files are intentionally simple — CSS and JS files are colocated with their HTML counterparts.

## Requirements

- A modern web browser to open the HTML files.
- (Optional) PHP 7+ if you want to use `connect.php` to process submissions server-side.

## How to run / preview

Static (no server required):

1. Open `Quiz/quiz.html` with your browser. On Windows you can double-click the file in Explorer or drag it into the browser.

Using PHP built-in server (only if you need `connect.php` to work):

Open PowerShell in the repository root and run:

```powershell
# serve the Quiz folder on http://localhost:8000
php -S localhost:8000 -t "Quiz"

# Then open http://localhost:8000/quiz.html in your browser
```

If you don't have PHP installed, you can download it from https://windows.php.net or run a simple static server (e.g., with Python) for client-side testing:

```powershell
# If Python is installed
python -m http.server 8000 --directory "Quiz"
```

## Notes for contributors

- Keep styles and scripts small and colocated with their HTML for simplicity.
- If you add any server-side functionality, document the endpoint and expected parameters in this README.

## Testing

Manual testing steps:

1. Open `Quiz/quiz.html` in a browser.
2. Navigate to a subject (computer, math, physics).
3. Take the quiz and verify scoring/behavior.
4. If using `connect.php`, submit and verify data is handled as expected by your PHP config.

Automated tests are not included; adding a small Cypress or Playwright test suite would be a useful extension.

## License To-

This repository does not include a license file. If you want to make this project open source, consider adding an `MIT` or `Apache-2.0` license. Add a `LICENSE` file at repo root when ready.

## Contact

Project owner: `Nikhil-Gupta67` (repo owner). Add issues or pull requests on the repo for questions or contributions.

---
Small, focused README to help run and contribute. If you want, I can also:
- add a `LICENSE` file (MIT)
- add a basic `index.html` launcher in the repo root
- add a tiny automated test that opens `Quiz/quiz.html`

Tell me which of the above you'd like next.
