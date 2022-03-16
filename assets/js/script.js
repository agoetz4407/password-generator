//declaring global variables
var upperCaseAr =  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseAr =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numberAr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialAr = ['!', '\"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', "/", ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', "`", "{", '|', "}", "~"];
var generateBtn = document.querySelector("#generate");


//Generate password function
var generatePassword = function() {
  //set password and characterArray to empty values
  var password = "";
  var characterArray = [];
  //prompts asking for password length and what type of characters user would like to use
  var passwordLength = prompt("How many characters would you like your password to be? Please enter a number between 8 and 128.");
  //if statement that restarts function if user did not give a valid password length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Not a valid password length. Please enter a number between 8 and 128");
    return generatePassword();
  }
  //promting user to choose which types of characters they would like to use
  var upperCaseConfirm = confirm("Would you like your password to have UPPER CASE letters in it? Select OK for yes or CANCEL for no.");
  if (upperCaseConfirm) {
    characterArray = characterArray.concat(upperCaseAr);
  }
  var lowerCaseConfirm = confirm("Would you like your password to have LOWER CASE letters in it? Select OK for yes or CANCEL for no.");
  if (lowerCaseConfirm) {
    characterArray = characterArray.concat(lowerCaseAr);
  }
  var numberConfirm = confirm("Would you like your password to have NUMBERS in it? Select OK for yes or CANCEL for no.");
  if (numberConfirm) {
    characterArray = characterArray.concat(numberAr);
  }
  var specialConfirm = confirm("Would you like your password to have SPECIAL CHARACTERS in it? Select OK for yes or CANCEL for no.");
  if (specialConfirm) {
    characterArray = characterArray.concat(specialAr);
  }

  var charTypeCount = upperCaseConfirm + lowerCaseConfirm + numberConfirm + specialConfirm
  //restart function if user did not choose to use any types of characters
  if (charTypeCount === 0) {
    alert("You did not choose to include any types of characters in your password. Try again.");
    return generatePassword();
  }

  // for loop to generate new character each time and add it to the password, totaling the length of the password
  for (var i = 0; i < passwordLength; i++) {
  //finding a random character to add from the character array
  var addChar = function() {
    var randomIndex = Math.floor(Math.random() * characterArray.length);
    var charToAdd = characterArray[randomIndex];
    return charToAdd
  }
  //adding the random character to the password
  password = password + addChar();
  }
  //returning password value
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate password button
generateBtn.addEventListener("click", writePassword);
