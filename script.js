// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characters =  ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];

// Write password to the #password input


function generatePassword(){
  var lengthinput = prompt("How long would you like your password to be? (Must be between 8 and 128)")
  if (lengthinput < 8 || lengthinput > 128) {
    alert("Must be between 8 and 128 characters")
    return generatePassword();
  }

  var lowerinput = confirm("Will this contain lower case letters?")
  var upperinput = confirm("Will this contain upper case letters?")
  var numberinput = confirm("Will this contain numbers?")
  var specialinput = confirm("Will this contain special characters?")

  if (!lowerinput && !upperinput && !numberinput && !specialinput) {
    alert("You must choose at least 1 criteria")
    return generatePassword();
  }

  var randomp = []; 
  // need to check what has been selected

  if (lowerinput) {
    // add the lowercase letter to our array, combine array. look up how to make a string to array. 
  }

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



