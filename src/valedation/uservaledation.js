export const valedationUserData = (users)=>{
    let errors = {};
    if(users.name.trim() == ""){
        errors.name= "username is required";
    }else if(users.name.trim().length < 3){
        errors.name= "username must be at least 3 characters";
    }
    if(users.email.trim() == ""){
        errors.email= "email is required";
    }else if(users.email.trim().length < 9){
        errors.email= "email must be at least 9 characters";
    }
    if(users.password.trim() == ""){
        errors.password= "password is required";
    }else if(users.password.trim().length < 3){
        errors.password= "password must be at least 3 characters";
    }
    return errors; 
}