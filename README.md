[![Build Status](https://travis-ci.org/brencon/node-fb-graph.svg?branch=master)](https://travis-ci.org/brencon/node-fb-graph) [![Coverage Status](https://coveralls.io/repos/github/brencon/node-fb-graph/badge.svg?branch=master)](https://coveralls.io/github/brencon/node-fb-graph?branch=master)

[![NPM](https://nodei.co/npm/node-fb-graph.png)](https://nodei.co/npm/node-fb-graph/)

# node-fb-graph
Node.js module for interacting with the Facebook Graph API.

## Overview
This module interfaces with the Facebook Graph API using a specific client access token that must be provided by the consumer of this library.

## Installation

### npm
`npm install node-fb-graph -S`

## Tests
`npm test`

## Code Quality
Code quality will be checked using eslint with the `--fix` argument so repair easily-fixed rule-breaking code.

`npm run lint`

## Code Coverage
Code coverage is maintained by using the nyc command-line-client for [Istanbul](https://istanbul.js.org/) with [Coveralls](https://coveralls.io) reporting.

## Continuous Integration
Continuous integration provided by [Travis CI](https://travis-ci.org).

## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

## Community
Updates and discussions about this module can be found [@symBrendan on Twitter](https://twitter.com/symBrendan).

## Versioning
For transparency into a common release cycle to strive toward maintaining backward compatibility, this project is maintained under [the Semantic Versioning guidelines](http://semver.org/).

### Creating a New Version
The following commands will create a new version of the module, automatically create a new tag with the same value as the version, push the tags to the remote, and, finally, push the code to the remote.

#### Stage your files
`git add .`

#### Commit with message
`git commit -m "your commit message"`

#### Publish the module to npmjs.org
The `npm publish` command will create a patch in package.json, add a new tag, push the tag, and publish the changes to npmjs.

`npm publish`

## Creator

**Brendan Conrad**

- <https://twitter.com/symBrendan>

## License
This project is licensed under the terms of the MIT license.
