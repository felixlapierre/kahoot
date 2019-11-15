var fs = require('fs');
var database = require("./users.json");

var login = function(username, password){
    if (database.hasOwnProperty(username))
    {
        return (password === database[username]);
    }
    return false;
}

module.exports=login;