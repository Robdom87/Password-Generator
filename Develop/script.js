// Assignment Code
var generateBtn = document.querySelector("#generate"); 


// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password; //assigned password to passwordText.value, and should replace placeholder value in box
}

function generatePassword() {
  let length = passwordLength();
  let type = passwordCharTypes();
  let passString = "";
  var newChar = "";

  // forloop to the length of the password where each new character is added to the password string.
  for (let i = 0; i < length; i++) {
    newChar = newCharacter(type);
    passString = passString + newChar;
  }

  return passString; //return the full password
}

function passwordLength() {
  //creates prompt where password length is asked for.
  let inputLen = prompt("Input desired password length.\nMust be at least 8 characters long. and no more than 128 characters long.", "8");
  //validate if between 8 - 128, reprompt until meets criteria.
  while (inputLen < 8 || inputLen > 128) {
    inputLen = prompt("Input desired password length.\nMust be at least 8 characters long. and no more than 128 characters long.", "8");
  }
  //return password length when validated.
  return inputLen;

}

function passwordCharTypes() {

  //send alert that atleast one should be selected.
  alert("Next, we will select the character types to include in the password.\nNOTICE: atleast one character type should be selected.");

  //send confirm box for lowercase, uppercase, numeric, special characters.
  //and click cancel to exclude the character type.
  let upper = confirm("Include UPPERCASE characters in password?\nClick cancel to exclude character type.");
  let lower = confirm("Include LOWERCASE characters in password?\nClick cancel to exclude character type.");
  let numeric = confirm("Include NUMERIC characters in password?\nClick cancel to exclude character type.");
  let special = confirm("Include SPECIAL characters in password?\nClick cancel to exclude character type.");

  //confirm that atleast one was selected.
  //if not, reprompted.
  while (upper === false && lower === false && numeric === false && special === false) {
    alert("NOTICE: Atleast one character type should be selected.");
    upper = confirm("Include UPPERCASE characters in password?\nClick cancel to exclude character type.");
    lower = confirm("Include LOWERCASE characters in password?\nClick cancel to exclude character type.");
    numeric = confirm("Include NUMERIC characters in password?\nClick cancel to exclude character type.");
    special = confirm("Include SPECIAL characters in password?\nClick cancel to exclude character type.");
  }

  // add all criteria responses to an array to output.
  var Types = [upper, lower, numeric, special];
  
  return Types;
}

//takes in type array and outputs a new character to add to the password string.
function newCharacter(type) {
  var nC = "";

  //random number generator to figure out which character type to get for each character in the password
  while (nC === "") {
    let random = Math.floor(Math.random() * 4);
    if (random === 0 && type[0] === true) {
      nC = upperCharacter();
    } else if (random === 1 && type[1] === true) {
      nC = lowerCharacter();
    } else if (random === 2 && type[2] === true) {
      nC = numericCharacter();
    } else if (random === 3 && type[3] === true) {
      nC = specialCharacter();
    }
  }
  return nC;
}

//outputs random uppercase character.
function upperCharacter() {
  let u = 'A';
  var index = 0;
  let random = Math.floor(Math.random() * 26);
  u = u.charCodeAt(0) + random;
  u = String.fromCharCode(u);
  return u;
}

//outputs random lowercase character.
function lowerCharacter() {
  let l = 'a';
  var index = 0;
  let random = Math.floor(Math.random() * 26);
  l = l.charCodeAt(0) + random;
  l = String.fromCharCode(l);
  
  return l;
}

//outputs random numeric character.
function numericCharacter() {
  let n = '0';
  var index = 0;
  let random = Math.floor(Math.random() * 10);
  n = n.charCodeAt(0) + random;
  n = String.fromCharCode(n);
  
  return n;
}

//outputs random special character.
function specialCharacter() {
  let s = "!";
  var index = 0;
  let random = Math.floor(Math.random() * 33);

  // account for spacing between special characters
  if (random > 27) {
    random = random + 10 + 26 + 26;
  } else if (random > 21) {
    random = random + 10 + 26;
  } else if (random > 14) {
    random = random + 10;
  } else {
    random = random;
  }

  s = s.charCodeAt(0) + random;
  s = String.fromCharCode(s);
  return s;
}

// Add event listener to generate button - must be at the end for some reason
generateBtn.addEventListener("click", writePassword); 


