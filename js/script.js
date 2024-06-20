function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = '';
    let password = '';

    if (includeLowercase) allowedChars += lowercaseChars;
    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;

    if (length <= 0) {
        return `(password length must be at least 1)`;
    }

    if (allowedChars.length === 0) {
        return `(At least 1 set of characters needs to be selected)`;
    }

    function getRandomIndex(max) {
        const array = new Uint32Array(1);
        crypto.getRandomValues(array);
        return array[0] % max;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = getRandomIndex(allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
};

document.getElementById('generateButton').onclick = function() {
  
    const length = parseInt(document.getElementById('passwordLength').value, 10);
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

    document.getElementById('passwordOutput').textContent = password;
};