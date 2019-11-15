var register = function(username, password){
        if (database.hasOwnProperty(username))
        {
            return false;
        }
        database[username] = password;
        fs.writeFileSync("./authentication/users.json",JSON.stringify(database))
        return true;
}

module.exports=register;