'use strict';
 
const chai = require('chai');  
const expect = require('chai').expect;
 
chai.use(require('chai-http'));
 
const app = require('../server.js'); // Our app

const path = `http://localhost:${app.port}`;

console.log(`Testing with path: ${path}`);
 
describe('API endpoint /catfact', function() {  
  this.timeout(5000); // How long to wait for a response (ms)
 
  before(function() {
 
  });
 
  after(function() {
 
  });
 


  // GET - a random catfact
  it('should return 1 catfact', () => {
    return chai.request(path)
      .get('/catfact')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        expect(res.body.id).to.be.an('number');
        expect(res.body.fact).to.be.an('string');
      });
  });
});
 