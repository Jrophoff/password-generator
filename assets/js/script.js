var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+","[", "]", "{", "}", ";", ":", "'", '"', "<", ">", ",", ".", "|"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
 
function generatePassword() {
  var characterLength = (prompt("Please enter number of characters."));
// correct number loop
  while (characterLength <= 7 || characterLength >= 129) {
    alert("Please select between 8-128 characters!")
    var characterLength = (prompt("Please enter number of characters."));
  break;
  }
  var firmLowercase = confirm("Click OK for lowercase")
  var firmUppercase = confirm("Click OK for uppercase");
  var firmSymbols = confirm("Click OK for symbols");
  var firmNumbers = confirm("Click OK for numbers");
  while (firmLowercase === false && firmUppercase === false && firmSymbols === false && firmNumbers === false) {
    alert("Please select at least one option to proceed!") 
    var firmLowercase = confirm("CLick OK for lowercase");
    var firmUppercase = confirm("Click OK for uppercase");
    var firmSymbols = confirm("Click OK for symbols");
    var firmNumbers = confirm("Click OK for numbers");
  }
  let userPassword = []

  if (firmLowercase) {
    userPassword = userPassword.concat(lowercase)
  }

if (firmUppercase) {
    userPassword = userPassword.concat(uppercase)
  }

if (firmSymbols) {
    userPassword = userPassword.concat(symbols)
  }

 if (firmNumbers) {
    userPassword = userPassword.concat(numbers)
  }


  let finalPassword = ""

  for (let i = 0; i < characterLength; i++) {
    finalPassword = finalPassword + userPassword[Math.floor(Math.random() * userPassword.length)];
    console.log(userPassword);
  }

  return finalPassword;

}
// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// let lowercase = String.fromCharCode(97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122)
// let uppercase = String.fromCharCode(65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90)
// let symbols = String.fromCharCode(33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125, 126)
// let numbers = String.fromCharCode(48, 49, 50, 51, 52, 53, 54, 55, 56, 57)  