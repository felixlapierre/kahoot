var fs = require('fs');
var database = require("./users.json");

var register = function(username, password){
        if (database.hasOwnProperty(username))
        {
            return false;
        }
        database[username] = password;
        fs.writeFileSync("./controller/authenticate/users.json",JSON.stringify(database))
        return true;
}

module.exports=register;