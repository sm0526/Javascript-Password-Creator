// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//Need to have a question prompt for which characters the user wants to include(upper/lowercase, numbers, special characters)
//Need password to be a certain length
//Use Math for random generation of characters
//Use an array to hold the characters
//Need to ask after password generation if user wants to create a new password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
