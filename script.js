// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";
var userChoices = "";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var characters = "!@#$%^&*()_+[]{}:;";

// Write password to the #password input

function writePassword() {
  password = ""; 
  userChoices = "";
  var lengthinput = parseInt(
    prompt(
      "How long would you like your password to be? (Must be between 8 and 128)"
    )
  );

  if (lengthinput < 8 || lengthinput > 128) {
    alert("Must be between 8 and 128 characters");
    return writePassword();
  }

  console.log(lengthinput);

  var lowerinput = confirm("Will this contain lower case letters?");
  if (lowerinput === true) {
    userChoices += lowercase;
    // userChoices + lowercase = userChoices;
  }
  console.log(lowerinput);

  var upperinput = confirm("Will this contain upper case letters?");
  if (upperinput === true) {
    userChoices += uppercase;
  }
  console.log(upperinput);

  var numberinput = confirm("Will this contain numbers?");
  if (numberinput === true) {
    userChoices +=numbers;
  }
  
  console.log(numberinput);

  var specialinput = confirm("Will this contain special characters?");
  if (specialinput === true) {
    userChoices += characters;
  }
  
  console.log(specialinput);

  console.log(userChoices);

  if (!lowerinput && !upperinput && !numberinput && !specialinput) {
    alert("You must choose at least 1 criteria");
    return writePassword();
  } else {
    console.log("All clear to make the password")

    for(var i = 0; i < lengthinput; i++){
      
      var randomizer = Math.floor(userChoices.length * Math.random()) 
      console.log("randomizer", randomizer);
      password += userChoices.charAt(randomizer);
      console.log(password);
    }
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
