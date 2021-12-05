# Software testing assignment

[![License: MIT](
  https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](
  https://app.travis-ci.com/gitranes/COMP.SE.200-2021-2022-1.svg?branch=main)
  ](https://app.travis-ci.com/gitranes/COMP.SE.200-2021-2022-1)
[![Coverage Status](
  https://coveralls.io/repos/github/gitranes/COMP.SE.200-2021-2022-1/badge.svg?branch=main
  )](https://coveralls.io/github/gitranes/COMP.SE.200-2021-2022-1?branch=main)
[🧪📑Full test report](https://gitranes.github.io/COMP.SE.200-2021-2022-1/)


This is a project repository for the COMP.SE.200-2021-2022-1 Software testing
course. This repository stores the library's source code, tests, and the
relevant Node files for running the tests. Furthermore, this repository
implements Travis CI with several testing related features.

## Setting up

Prerequisites:
  - Node.js with npm
  - Visual Studio Code (recommended)

Running npm:
```bash
# Set up the repository's packages
npm install --include=dev

# Run tests
npm test
```

## Travis CI

Currently, the Travis CI handles building, testing and test reporting by
integrating `npm`, `npm test`, `mocha`, `mochawesome`, `c8` and `coveralls`.
The basic procedure of the pipeline goes like this:

 - Install dependencies
 - Job #1 runs the tests
 - Job #2 runs the tests, ignores failures and reports with `mochawesome`
   - Job #2 sends the HTML report back to `gh-pages` branch in our github.
 - Job #3 Runs `c8` with `mocha` to generate the lcov files.
   - Sends the coverage results to `coveralls` using `node-coveralls` script.

The pipeline results can be seen at the top of this page. The first link is
for the pipeline itself, the second is for our coveralls page, and the third
is for the `mochawesome`'s test report.
