'use strict';

const request = require('request');
const config = require('../../configuration/config');

const MOCK_SERVER_PORT = config.MOCK_SERVER_PORT;
const BASE_PATH = `http://localhost:${MOCK_SERVER_PORT}`+'/api/users/v1';

                        
module.exports.getuser = function getuser(callback) {
  request({
    url: BASE_PATH,
    method: "GET",
    headers: {
        "content-type": "application/json"
    }
  }, function(error, response, body) {
    callback(error,response);
  });
};
module.exports.getuserById = function getuserById(uniqueParam, callback) {
  request({
    url: BASE_PATH+'/'+uniqueParam,
    method: "GET",
    headers: {
        "content-type": "application/json"
    }
  }, function(error, response, body) {
    callback(error,response);
  });
};
                  
                                  module.exports.putuser = function putuser(uniqueParam, body, callback) {
  request({
    url: BASE_PATH+'/'+uniqueParam,
    method: "PUT",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(body)
  }, function(error, response, body) {
    callback(error,response);
  });
}; 
      
                            module.exports.postuser = function postuser(body, callback) {
  request({
    url: BASE_PATH,
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(body)
  }, function(error, response, body) {
    callback(error,response);
  });
}; 

            
                module.exports.patchuser = function patchuser(uniqueParam, body, callback) {
  request({
    url: BASE_PATH+'/'+uniqueParam,
    method: "PATCH",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(body)
  }, function(error, response, body) {
    callback(error,response);
  });
}; 
                        
          module.exports.deleteuser = function deleteuser(uniqueParam, callback) {
  request({
    url: BASE_PATH+'/'+uniqueParam,
    method: "DELETE",
    headers: {
        "content-type": "application/json"
    }
  }, function(error, response, body) {
    callback(error,response);
  });
}; 
                              
      
  
