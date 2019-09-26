const nock = require('nock');
const request = require('supertest')("http://localhost");
const expect = require('chai').expect;

describe("Testing API with a mocked backend", function () {

  it("returns a successful mocked response", function (done) {
    
    //specify the url to be intercepted
    nock("http://localhost")
      //define the method to be intercepted
      .get('/')
      //respond with a OK and the specified JSON response
      .reply(200, {
        "status": 200,
        "message": "Hello World!"
      });
    
    //perform the request to the api which will now be intercepted by nock
    request
      .get('/')
      .end(function (err, res) {
        //assert that the mocked response is returned
        expect(res.body.status).to.equal(200);
        expect(res.body.message).to.equal("Hello World!");
        done();
      });
  })
});