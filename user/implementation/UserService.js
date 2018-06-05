'use strict';
var fs = require("fs");
/*
* This file will not be changed by the generator
*/
var samplePath = '/sampleData/v1/User.json';
var bodyParam = 'users/v1'; 
     


exports.getUser = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var UserFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var UserData = [];
    if(UserFD) {
        UserData = JSON.parse(UserFD);
    }
    cb(null, UserData);
}
exports.getUserById = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var userid = args['userid'] ? args['userid'].value: null;
    var UserFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var UserData = [];
    if(UserFD) {
        UserData = JSON.parse(UserFD);
    }
    var myRecord;
    for(var i=0;i<UserData.length;i++) {
        if(UserData[i]['userid'] == userid) {
             myRecord = UserData[i];
             break;
        }
    }
    cb(null, myRecord);
}





exports.putUser = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var userid = args['userid'] ? args['userid'].value: null;
   var body = args[bodyParam].value;
   var UserFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var UserData = [];
   if(UserFD) {
       UserData = JSON.parse(UserFD);
   }
   var myRecord;
   for(var i=0;i<UserData.length;i++) {
       if(UserData[i]['userid'] == userid) {
            UserData[i] = Object.assign(UserData[i],body);
            myRecord = UserData[i];
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(UserData));
   cb(null, myRecord);
}


exports.postUser = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var body = args[bodyParam].value;
    var UserFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var UserData = [];
    if(UserFD) {
        UserData = JSON.parse(UserFD);
    }
    UserData.push(body);

    fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(UserData));
    cb(null, body);
}


exports.patchUser = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var userid = args['userid'] ? args['userid'].value: null;
   var body = args[bodyParam].value;
   var UserFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var UserData = [];
   if(UserFD) {
       UserData = JSON.parse(UserFD);
   }
   var myRecord;
   for(var i=0;i<UserData.length;i++) {
       if(UserData[i]['userid'] == userid) {
            UserData[i] = Object.assign(UserData[i],body);
            myRecord = UserData[i];
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(UserData));
   cb(null, myRecord);
}



exports.deleteUser = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var userid = args['userid'] ? args['userid'].value: null;
   //var body = args[bodyParam].value;
   var UserFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var UserData = [];
   if(UserFD) {
       UserData = JSON.parse(UserFD);
   }
   var found = false;
   for(var i=0;i<UserData.length;i++) {
       if(UserData[i]['userid'] == userid) {
            UserData.splice(i,1);
            found = true;
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(UserData));
   if(found) {
    cb(null, true);
   }
   else {
    cb(null, false);
   }
}


