'use strict';
  var UserFD = require('../../sampleData/v1/User.json');
  var UserData = UserFD;


var Promise = require('bluebird');
var paginationService = require('../apistrategies/pagination.js');
 

exports.getUser = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(UserData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, UserData).then(function(result) {
        res.writeHead(200, {
            "Total": result.total,
            "Per-Page": result.pageSize,
            "Total-Pages": result.totalPages
        });
        res.end(JSON.stringify(result.pagedData));
    }).catch(function(error) {
        res.end(JSON.stringify(error));
    });
                        } else {
      res.end();
  }
}





exports.putUser = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(UserData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(UserData[Object.keys(UserData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postUser = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(UserData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(UserData[Object.keys(UserData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.patchUser = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(UserData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(UserData[Object.keys(UserData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



exports.deleteUser = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(UserData).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(UserData[Object.keys(UserData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


