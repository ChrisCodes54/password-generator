// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characters =  ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}
  function generatePassword(){
  
  var userChoice = prompt("How long would you like your password to be? (Must be between 8 and 128) ")
  var userChoice = prompt("Will this contain lower case letters?")
  var userChoice = prompt("Will this contain upper case letters?")
  var userChoice = prompt("Will this contain numbers?")
  var userChoice = prompt("Will this contain special characters?")




  

  if(!passlength) {
    alert("you must choose a password length")
    return;
  }

  else if (passlength < 8 || passlength > 128) {
    alert("you must choose a password length between 8 and 128")
  lowercase = alert("Will this contain lower case letters?")
  console.log("Lower case " + confirmLower);
  uppercase = alert("Will this contain upper case letters?")
  console.log("Upper case " + confirmUpper)
  numbers = alert("Will this contain numbers?")
  console.log("Number " + confirmNumber);
  characters = alert("Will this contain special characters?")
  console.log("Special Character " + characters)
  }

}

writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
