//const request = require('supertest')("http://localhost");
const expect = require('chai').expect;
const server = require('../app/Bend.js');
const request = require('request');

describe('server response', function () {
  before(function () {
    server.listen(3001);
  });

  after(function () {
    server.close();
  });
});

it('should return Hello World!', function (done) {
  request.get('http://localhost:3001/', function (req, res, body){
    expect(res.body).to.equal('Hello World!');
    done();
  });
});

it('should return OK', function (done) {
  request.get('http://localhost:3001/health', function (err, res, body){
    expect(res.body).to.equal('{"status":"OK","version":"commit here","commitMessage":"message maybe here"}');
    done();
  });
});