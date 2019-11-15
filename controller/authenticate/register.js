var register = function(user,password) {
    return true;
    
    if(user==="admin" && password==="password"){
        return true;
    }
    else
    {
        return false;
    }
}

module.exports=register;