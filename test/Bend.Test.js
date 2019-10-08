//const request = require('supertest')("http://localhost");
const expect = require('chai').expect;
const server = require('../app/Bend.js');
const request = require('request');

describe('server response', function () {
  before(function () {
    server.listen(8889);
  });

  after(function () {
    server.close();
  });
});

it('return should include Hello Friend!', function (done) {
  request.get('http://localhost:8889/', function (req, res, body){
    expect(res.body).to.include('Hello Friend!');
    done();
  });
});

it('return should include Status OK', function (done) {
  request.get('http://localhost:8889/health', function (err, res, body){
    expect(res.body).to.include('"status":"OK"');
    done();
  });
});