
// declarations
let characterLength = "";
let firmUppercase;
let firmSymbols;
let firmNumbers;

function generatePassword() {
  let characterLength = (prompt("Please enter number of characters."));
// correct number loop
  while (characterLength <= 7 || characterLength >= 129) {
    alert("Please select between 8-128 characters!")
    let characterLength = (prompt("Please enter number of characters."));
  break;
  }
  let firmUppercase = confirm("Click OK for uppercase");
  let firmSymbols = confirm("Click OK for symbols");
  let firmNumbers = confirm("Click OK for numbers");

  let userPassword = []

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
    finalPassword = finalPassword + lowercase + userPassword[Math.floor(Math.random() * userPassword.length)];
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


let lowercase = String.fromCharCode(97, 122)
let uppercase = String.fromCharCode(65, 90)
let symbols = String.fromCharCode(33, 47).concat
  (String.fromCharCode(58, 64)).concat
  (String.fromCharCode(91, 96)).concat
  (String.fromCharCode(123, 126))
let numbers = String.fromCharCode(48, 57)  