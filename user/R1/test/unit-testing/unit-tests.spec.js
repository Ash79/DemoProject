'use strict';

const chai = require('chai');
const expect = require('chai').expect;
chai.use(require('chai-http'));
const { app } = require('../../index.js'); // Our app
var fs = require("fs");

const BASE_PATH = '/api/users/v1';
const samplePath = '/../../sampleData/v1/user.json';
var userData;

describe('Testing mochatestings API endpoints', function () {

  beforeEach(function() {
    var userFD = fs.readFileSync(__dirname + samplePath);
    userData = [];
    if(userFD) {
      userData = JSON.parse(userFD);
    }
  });


                        
  // GET - List all records
  it('GET List of users', function () {
    return chai.request(app)
      .get(BASE_PATH)
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(data.length).to.be.eql(userData.length);
      });
  });
    // GET - List existing record by userid
  it('GET Existing user by userid', function () {
    var myRecord = userData[0];
    var uniqueParam = myRecord['userid'];
    return chai.request(app)
      .get(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(data).to.be.eql(userData[0]);
      });
  });

  // GET - List non-existing record by userid
  it('GET Non-Existing user by userid', function () {
    var uniqueParam = 'randomNotExistingId';
    return chai.request(app)
      .get(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        expect(res).to.have.status(404);
      });
  });
                    

                                  
  // PUT - Update existing record
  it('PUT Existing user', function () {
    return chai.request(app)
      .put(BASE_PATH + '/'+userData[0]['userid'])
      .send(userData[0])
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(data).to.be.eql(userData[0]);
      });
  });      

    // PUT - Update non-existing record
    it('PUT Non-Existing user', function () {
      var uniqueParam = 'randomNotExistingId';
      return chai.request(app)
        .put(BASE_PATH + '/'+uniqueParam)
        .send(userData[0])
        .then(function (res) {
          expect(res).to.have.status(404);
        });
    });  

      

                            
  // POST - Add new record
  it('POST New user', function () {
    return chai.request(app)
      .post(BASE_PATH)
      .send(userData[0])
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(data).to.be.eql(userData[0]);
      });
  }); 

            

                
  // PATCH - Semi-update existing record
  it('PATCH Existing user', function () {
    var updatedSting = JSON.stringify(userData[0]);
    var updatedRecord = JSON.parse(updatedSting);
    var uniqueParam = updatedRecord['userid'];
    delete updatedRecord['userid'];
    return chai.request(app)
      .patch(BASE_PATH + '/'+uniqueParam)
      .send(updatedRecord)
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(data).to.be.eql(userData[0]);
      });
  }); 

                        

          
  // DELETE - Delete existing record
  it('Delete Existing user', function () {
    var recordToDelete = userData[0];
    var uniqueParam = recordToDelete['userid'];
    return chai.request(app)
      .delete(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        expect(res).to.have.status(204);
      });
  });    

  // DELETE - Delete non-existing record
  it('Delete Non-Existing user', function () {
    var uniqueParam = 'randomNotExistingId';
    return chai.request(app)
      .delete(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        expect(res).to.have.status(404);
      });
  });     

                              

      
});