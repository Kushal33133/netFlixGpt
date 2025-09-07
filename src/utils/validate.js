
export const checkValidateDate = (email, password) => {


    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValud = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(password)


    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValud) return "Password is not valid";

    return null;
}

