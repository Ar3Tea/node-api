//const request = require('supertest')("http://localhost");
const expect = require('chai').expect;
const server = require('../app/Bend.js');
const request = require('request');

describe('server response', function () {
  before(function () {
    server.listen(8888);
  });

  after(function () {
    server.close();
  });
});

it('should return Hello World!', function (done) {
  request.get('http://localhost:8888/', function (req, res, body){
    expect(res.body).to.equal('Hello World!');
    done();
  });
});

it('should return Status OK', function (done) {
  request.get('http://localhost:8888/health', function (err, res, body){
    expect(res.body).to.include('"status":"OK"');
    done();
  });
});