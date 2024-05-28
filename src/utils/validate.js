export const checkValidData = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/.test(email);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)
    if (!isEmailValid) return "Email address is not valid";
    if (!isPasswordValid) return "Your password is not correct";
    return null;
}