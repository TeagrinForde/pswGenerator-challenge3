// generate button
var generateBtn = document.querySelector("#generate");
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; //number array
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; //uppercase array
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //lowercase array
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '=', '+', '/', '?', '.', '>', ',', '<', '`', '~', '|']; //special characters array

var finalArray = [];
var isNumeric, isUpper, isLower, isSpecial

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Generate password to match the given criteria
function generatePassword() {
  console.log("Hey! you clicked the button.");

  var aNumber = Number(window.prompt("How many characters would you like your password to contain?"), "");   //prompt user for password length

  if (aNumber >= 8 && aNumber <= 128) {  //password length 8-128
    console.log(aNumber);
  } else {
    alert("INCORRECT LENGTH - You must choose from 8 to 128 characters."); //length validation
    writePassword(); //reset prompt
  };

  isNumeric = window.confirm("Click OK to confirm including numeric characters.");
  console.log(isNumeric);
  isUpper = window.confirm("Click OK to confirm including uppercase characters.");
  console.log(isUpper);
  isLower = window.confirm("Click OK to confirm including lowercase characters.");
  console.log(isLower);
  isSpecial = window.confirm("Click OK to confirm including special characters.");
  console.log(isSpecial);

  genPassword(); //join arrays based on user selection

  function shuffleArray(finalArray) {
    for (let i = 0; i < aNumber; i++) { // why isn't this for loop working???
      finalArray.sort(() => Math.random() - 0.5); //randomize array
    };
  };
  shuffleArray(finalArray);
  console.log(finalArray);

  document.getElementById("password").innerHTML = finalArray; // generated password written to the page???
}

function genPassword() {
  if (isNumeric === true) {
    finalArray = finalArray.concat(numeric);
  };
  if (isUpper === true) {
    finalArray = finalArray.concat(upperCase);
  };
  if (isLower === true) {
    finalArray = finalArray.concat(lowerCase);
  };
  if (isSpecial === true) {
    finalArray = finalArray.concat(special);
  };
  if (isNumeric === false && isUpper === false && isLower === false && isSpecial === false) {
    window.alert('You must choose at least one type of character.');
    writePassword();
  }
}