var login = function(user,password) {
    
    if(user==="admin" && password==="password"){
        return true;
    }
    else
    {
        return false;
    }
}

module.exports=login;