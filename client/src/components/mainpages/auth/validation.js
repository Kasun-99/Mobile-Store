const validation = (user) => {
    let errors ={};
    
    if(!user.name.trim()) {
        errors.name = "Username requiured"
    }

   if(!user.email) {
        errors.email = "Email requiured"

    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(user.email)) {
        errors.email = "Email address is invalid"
    }

    if(!user.password) {
        errors.password = "Password requiured"
    }else if(user.password.length <6) {
        errors.password = "Password needs to be 6 characters or more" 
    }

    return errors;
}
export default validation;