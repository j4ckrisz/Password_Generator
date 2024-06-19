function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSimbols ){

    const lowercaseChars = "abcdefghijklmnopqrstuvwsyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWSYZ";
    const numberChars = "013456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = '';
    let password = '';

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSimbols ? symbolChars : "";

    if (length <= 0){
        return `(password lenght must be at least 1)`
    }

    if (allowedChars.length === 0){

        return `(At least 1 set of characters needs to be selected)`

    }

    for(let i =0; i< length; i++){

        const randomIndex = Math.floor( Math.random() * allowedChars.length);
        password += allowedChars[randomIndex]

    }

    return password;

}


const passwordLenght = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSimbols = true;

const password = generatePassword(passwordLenght, 
                                includeLowercase, 
                                includeUppercase, 
                                includeNumbers, 
                                includeSimbols);

console.log(`Generated password : ${password}`)


