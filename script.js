// Assignment code here
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  console.log("hello");
  var passwordLength = parseInt(
    prompt("how many charters do you want for your password")
  );
  if (Number.isNaN(passwordLength)) {
    alert("password length must a number value");
    return null;
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert("password must be between 8 &1 28");
    return null;
  }

  var hasSymbols = confirm("would you like symbols in your password");
  var hasNumbers = confirm("would you like numbers in your password");
  var hasUppercase = confirm(
    "would you like an upper case letter in your password"
  );
  var hasLowercase = confirm(
    "would you like a lower case letter in your password"
  );

  if (
    hasSymbols === false &&
    hasNumbers === false &&
    hasUppercase === false &&
    hasLowercase === false
  ) {
    alert("must select at least one option");
    return null;
  }

  //user input for password choices
  var passwordChoices = {
    passwordLength: passwordLength,
    hasSymbols: hasSymbols,
    hasNumbers: hasNumbers,
    hasUppercase: hasUppercase,
    hasLowercase: hasLowercase,
  };

  console.log(passwordChoices);

  var passwordResults = [];
  var possibleResults = [];
  var guaranteedResults = [];

  if (passwordChoices.hasSymbols) {
    possibleResults = possibleResults.concat(specialCharacters);
    guaranteedResults.push(getRandom(specialCharacters));
  }

  if (passwordChoices.hasNumbers) {
    possibleResults = possibleResults.concat(numericCharacters);
    guaranteedResults.push(getRandom(numericCharacters));
  }

  if (passwordChoices.hasUppercase) {
    possibleResults = possibleResults.concat(upperCasedCharacters);
    guaranteedResults.push(getRandom(upperCasedCharacters));
  }

  if (passwordChoices.hasLowercase) {
    possibleResults = possibleResults.concat(lowerCasedCharacters);
    guaranteedResults.push(getRandom(lowerCasedCharacters));
  }
  console.log(passwordChoices.passwordLength);

  for (var i = 0; i < passwordChoices.passwordLength; i++);
  {
    var possibleResult = getRandom(possibleResults);
    passwordResults.push(possibleResult);
  }

  //   for(var i = 0; i < guaranteedResults.length; i++){
  //     passwordResults[i]=guaranteedResults[i]
  // }
  console.log(passwordResults);
  return passwordResults.join(""); // [""]
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // debugger;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
