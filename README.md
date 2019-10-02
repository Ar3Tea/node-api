# Node API

### Simple Node/Express API with GET request (for now)

Requires Node and NPM to be installed -- 
[Install Node](https://nodejs.org/en/)

To run:

Clone repo

`cd` into cloned directory

`npm install`

`node Bend.js` or `pm2 start Bend.js` for persistence

You should see an output message in your terminal. Go to localhost:3000 to view GET request. 

Go to localhost:3000/health for health check.
Health check will be JSON and include more as I go

# Testing

Requires Mocah and Chai -- [Install Mocha](https://mochajs.org/)

run `npm test` to see test results for both mocked and unmocked HTTP requests

# Makefile

prefix all subsequent commands with `make`:

`run-api` to start node api

`run-tests` to run testing

`docker-build` to build container

# CI/CD Pipeline

This build includes a CI/CD Pipeline using Jenkins, Docker, and a VPS.

More info on this to come.


This will continue to be updated as I build it out...