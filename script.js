// Global Variables

var generateBtn = document.querySelector("#generate");
var numBers = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var symBols = ['!', '@', '#', '$', '%', '^', '&', '*', '?' ]

function userInput() {
  var gatherContent = []
  var passwordLength = prompt("How long do you want your password?");
  if (isNaN(passwordLength)) {
    alert("Please input a number between 8 and 128");
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("between 8 and 128 charecters");
    return null;
  }
  var useSymBols = confirm ("Do you want to use special charecters?");
  var useNumbers = confirm ("Do you want to use numbers in your password?");
  var useUppercase = confirm ("Do you want to use uppercase charecters?");
  var useLowercase = confirm ("Do you want to use lowercase charecters?");
  
  if (!useNumbers && !useUppercase && useLowercase && useSymbols) {
    alert( "Password doesn't meet minimum requirements")
    return null;
  }
  if (useSymBols) {
  gatherContent = gatherContent.concat(symBols)
  }
  if (useNumbers) {
    gatherContent = gatherContent.concat(numBers)  
  }
  if (useUppercase) {
    gatherContent = gatherContent.concat(upperCase)
  }
  if (useLowercase) {
    gatherContent = gatherContent.concat(lowerCase)
  }
  let result = ''
  for(let i=0; i<passwordLength; i++){
    let randomIndex = Math.floor(Math.random() * gatherContent.length)
    let randomContent = gatherContent[randomIndex];
    result = result + randomContent

  }
  var passwordText = document.querySelector("#password");
  passwordText.value = result;

}

// Add event listener to generate button
generateBtn.addEventListener("click", userInput);
