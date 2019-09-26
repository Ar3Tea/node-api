//const request = require('supertest')("http://localhost");
const expect = require('chai').expect;
const server = require('../Bend.js');
const request = require('request');

describe('server response', function () {
  before(function () {
    server.listen(3000);
  });

  after(function () {
    server.close();
  });
});

it('should return Hello World!', function (done) {
  request.get('http://localhost:3000/', function (req, res, body){
    expect(res.body).to.equal('Hello World!');
    done();
  });
});

it('should return OK', function (done) {
  request.get('http://localhost:3000/health', function (err, res, body){
    expect(res.body.message).to.equal('OK');
    done();
  });
});