let password = document.querySelector(".password");
let passwordStatus = document.querySelector(".status");
let copyBtn = document.querySelector(".copy-btn");
let generateBtn = document.querySelector(".generate-btn");
let rangeInput = document.querySelector(".range");
let useUppercase = document.querySelector(".uppercase");
let useLowercase = document.querySelector(".lowercase");
let useNumbers = document.querySelector(".numbers");
let useSymbols = document.querySelector(".symbols");

generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
    let length = rangeInput.value;
    let upper = useUppercase.checked;
    let lower = useLowercase.checked;
    let numbers = useNumbers.checked;
    let symbols = useSymbols.checked;

    let charset = "";
    if (upper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) charset += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) charset += "0123456789";
    if (symbols) charset += "!@#$%^&*()_+[]{}|;:,.<>?";

    if (charset === "") {
        alert("Please select at least one character type.");
    return;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
        generatedPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    password.innerHTML = generatedPassword;
    passwordStatus.innerHTML = calculateStrength(generatedPassword);
}

function calculateStrength(password) {
    let strength = "Weak"; 
    let hasUppercase = /[A-Z]/.test(password);
    let hasLowercase = /[a-z]/.test(password);
    let hasNumbers = /[0-9]/.test(password);
    let hasSymbols = /[!@#$%^&*()_+[\]{}|;:,.<>?]/.test(password);

    if (password.length >= 12 && (hasUppercase || hasLowercase || hasNumbers || hasSymbols)) {
        strength = "Strong";
        passwordStatus.style.color = "green";
    } else if (password.length >= 8 && (hasUppercase || hasLowercase || hasNumbers || hasSymbols)) {
        strength = "Medium";
        passwordStatus.style.color = "black";
    } else {
        strength = "Weak";
        passwordStatus.style.color = "red";
    }
    return strength;
}
             










