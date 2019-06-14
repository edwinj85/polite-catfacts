'use strict';

const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const app = require('../server.js'); // Our app
const path = `http://localhost:${__port}`;

describe(`Testing with path: ${path}`, function () {
  describe('API endpoint /catfact', function () {
    this.timeout(5000); // How long to wait for a response (ms)

    before(function() {
    });

    after(function() {
    });

    // GET - a random catfact
    it('should return random catfact', function() {
      return chai.request(path)
        .get('/catfact')
        .then(function (res) {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          expect(res.body.id).to.be.an('number');
          expect(res.body.fact).to.be.an('string');
        });
    });

    // GET - a single catfact
    it('should return 1 catfact', function() {
      return chai.request(path)
        .get('/catfact/1')
        .then(function (res) {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          expect(res.body.id).to.equal('1');
          expect(res.body.fact).to.be.an('string');
        });
    });

    //GET - invalid id
    it('should return 404 text when catfact requested by invalid id', function() {
      return chai.request(path)
        .get('/catfact/99999')
        .catch(function(err) {
          expect(err).to.have.status(404);
          expect(err.response).to.be.text;
        });
    });

    //GET - unmatched route
    it('should return 404 html when unmatched route requested', function() {
      return chai.request(path)
        .get('/catfact/-99999')
        .catch(function (err) {
          expect(err).to.have.status(404);
          expect(err.response).to.be.html;
        });
    });

    // GET - all catfacts
    it('should return all catfacts', function() {
      return chai.request(path)
        .get('/catfact/all')
        .then(function (res) {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('array');
          expect(res.body[0]).to.be.an('object');
          expect(res.body[0].id).to.be.an('number');
          expect(res.body[0].fact).to.be.an('string');
        });
    });
  });
});
