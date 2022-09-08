// Assignment Code
//create variables
var generateBtn = document.querySelector("#generate");
var input;
var confirmAlpha1;
var confirmAlpha2;
var confirmNumb;
var confirmSpecial;
var choices;
const alpha1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const alpha2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '+', '_', '<', '>', '(', ')', '?', '=', '.'];

// Write password to the #password input
//Need to have a question prompt for which characters the user wants to include(upper/lowercase, numbers, special characters)✔️
//Need password to be a certain length✔️
//Use Math for random generation of characters
//Use an array to hold the characters
//Need to ask after password generation if user wants to create a new password

//create functions +/- logic
function writePassword() {
  //question prompt for length of password
  input = parseInt(prompt("How long would you like your password to be? Choose between 8 and 18 characters, please."));
  //if no input
  if (!input) {
    alert("Please choose a number between 8 and 18!");
  }
  //if input outside parameters
  else if (input < 8 || input > 18) {
    input = parseInt(prompt("You must choose between 8 and 18."));
  }
  //if a length is chosen w/i parameters ask prompts for characters the user wants to include 
  else {
    confirmAlpha1 = confirm("Would you like to use lowercase letters?");
    confirmAlpha2 = confirm("would you like to use UPPERCASE LETTERS?");
    confirmNumb = confirm("Would you like to use numbers?");
    confirmSpecial = confirm("Would you like to use special characters?");
  };
  //if no prompts yield a positive
  if (!confirmAlpha1 && !confirmAlpha2 && !confirmNumb && !confirmSpecial) {
    alert("Please choose at least 2 options for a secure password!");
  }
  //if all 4 options are chosen
  else if (confirmAlpha1 && confirmAlpha2 && confirmNumb && confirmSpecial) {
    choices = alpha1.concat(alpha2, numb, specialCharacters);
  }
  //if only 3 options chosen
  else if (confirmAlpha1 && confirmAlpha2 && confirmNumb) {
    choices = alpha1.concat(alpha2, numb);
  } else if (confirmAlpha1 && confirmAlpha2 && confirmSpecial) {
    choices = alpha1.concat(alpha2, specialCharacters);
  } else if (confirmAlpha1 && confirmNumb && confirmSpecial) {
    choices = alpha1.concat(numb, specialCharacters);
  } else if (confirmAlpha2 && confirmNumb && confirmSpecial) {
    choices = alpha2.concat(numb, specialCharacters);
  }
  //if 2 options chosen
  else if (confirmAlpha1 && confirmAlpha2) {
    choices = alpha1.concat(alpha2);
  } else if (confirmAlpha1 && confirmNumb) {
    choices = alpha1.concat(numb);
  } else if (confirmAlpha1 && confirmSpecial) {
    choices = alpha1.concat(specialCharacters);
  } else if (confirmAlpha2 && confirmNumb) {
    choices = alpha2.concat(numb);
  } else if (confirmAlpha2 && confirmSpecial) {
    choices = alpha2.concat(specialCharacters);
  } else if (confirmNumb && confirmSpecial) {
    choices = numb.concat(specialCharacters);
  }
  //if only 1 option chosen
  else if (confirmAlpha1) {
    alert("You must choose at least 2 options for a secure password!");
  } else if (confirmAlpha2) {
    alert("You must choose at least 2 options for a secure password!");
  } else if (confirmNumb) {
    alert("You must choose at least 2 options for a secure password!");
  } else if (confirmSpecial) {
    alert("You must choose at least 2 options for a secure password!");
  };
  var password = [];
  for (var i = 0; i < input; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

  }};

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
