# Node API

### Simple Node/Express API with GET request (for now)

Requires Node and NPM to be installed -- 
[Install Node](https://nodejs.org/en/)

To run:

Clone repo

`cd` into cloned directory

`npm install`

`node Bend.js`

You should see an output message in your terminal. Go to localhost:3000 to view GET request

# Testing

Requires Mocah and Chai -- [Install Mocha](https://mochajs.org/)

run `mocha Bend.MockTest.js` in terminal to run test file with mock HTTP request

run `mocha Bend.Test.js` in terminal to run test file with non-mock HTTP request

# Makefile

`run-api` to start node api

`run-mock-test` to run testing with mock HTTP request

`run-test` to run testing with non-mocked request

`docker-build` to build container

