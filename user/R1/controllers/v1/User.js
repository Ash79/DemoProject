'use strict';

  
    var paginationService = require('../apistrategies/pagination.js');
       var UserImplementation = require('../../../implementation/UserService.js');
    
var UserData;

        


    module.exports.getUser = function getUser (req, res, next) {
    var args = req.swagger.params;
    UserImplementation.getUser(args, (error, data) => {
        UserData = data;
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
    });
};
module.exports.getUserById = function getUser (req, res, next) {
    var args = req.swagger.params;
    UserImplementation.getUserById(args, (error, data) => {
        UserData = data;
        if (UserData && Object.keys(UserData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                        
            res.writeHead(200);
            res.end(JSON.stringify(UserData));

        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
    
                
        


    
            module.exports.putUser = function putUser (req, res, next) {
    var args = req.swagger.params;
    UserImplementation.putUser(args, (error, data) => {
        UserData = data;
        if (UserData && Object.keys(UserData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(UserData || {}, null, 2));
        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
        
        


    
        module.exports.postUser = function postUser (req, res, next) {
    var args = req.swagger.params;
    UserImplementation.postUser(args, (error, data) => {
        UserData = data;
        if (UserData && Object.keys(UserData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(UserData || {}, null, 2));
        } else {
            res.writeHead(400);
            res.end();
        }
    });
};
            
        


    
    module.exports.patchUser = function patchUser (req, res, next) {
    var args = req.swagger.params;
    UserImplementation.patchUser(args, (error, data) => {
        UserData = data;
        if (UserData && Object.keys(UserData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(UserData || {}, null, 2));
        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
                
        module.exports.deleteUser = function deleteUser (req, res, next) {
    var args = req.swagger.params;
    UserImplementation.deleteUser(args, (error, data) => {
        UserData = data;
                if(data == true) {
            res.writeHead(204);
            res.end();
        }
        else {
            res.writeHead(404);
            res.end();
        }
    });
};
    


    
                
        
    
