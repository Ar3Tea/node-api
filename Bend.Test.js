const express = require('express')
const nock = require('nock');
const request = require('supertest')("http://localhost");
const expect = require('chai').expect;
const app = express()

describe("Testing API with a non-mocked backend", function () {

  it("returns a successful response", function (done) {
    
    app.get('/', (req, res) => res.send('Hello World!'))
      });
    
    request
      .get('/')
      .end(function (req, res) {
        expect(res.body.message).to.equal('Hello World!');
        done();
      });
  })