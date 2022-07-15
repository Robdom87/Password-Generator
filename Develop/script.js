// Assignment Code
var generateBtn = document.querySelector("#generate"); //has the whole generate button html in there

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //in the write password function genrate password function is run and value stored in password
  var passwordText = document.querySelector("#password"); //selected text area and stored in passwordText

  passwordText.value = password; //assigned password to passwordText.value, and should replace placeholder value in box


}

function generatePassword() {
  let length = passwordLength();
  let type = passwordCharTypes();
  let passString = "";
  var newChar = "";

  // forloop to the length of the password
  for (let i = 0; i < length; i++) {
    newChar = newCharacter(type);
    passString = passString + newChar;
  }

  return passString; //return the full password
}



function newCharacter(type) {
  var nuevo = "";

  //add types across to see
  let u = false;
  let l = false;
  let n = false;
  let s = false;

  //convert 0 and 1's back to booleans
  if (type[0] === "1") {
    u = true;
  } else {}
  
  if (type[1] === "1") {
    l = true;
  } else {}
  
  if (type[2] === "1") {
    n = true;
  } else {}
  
  if (type[3] === "1") {
    s = true;
  }

  //random number generator to figure out which character type to get for each character in the password
  while (nuevo === "") {
    let random = Math.floor(Math.random() * 4);
    if (random === 0 && u === true) {
      nuevo = upperCharacter();
    } else if (random === 1 && l === true) {
      nuevo = lowerCharacter();
    } else if (random === 2 && n === true) {
      nuevo = numericCharacter();
    } else if (random === 3 && s === true) {
      nuevo = specialCharacter();
    }
  }
  return nuevo;
}

//outputs random uppercase character
function upperCharacter() {
  let uL = 'A';
  var index = 0;
  let random = Math.floor(Math.random() * 26);
  uL = uL.charCodeAt(0) + random;
  uL = String.fromCharCode(uL);
  return uL;
}

//outputs random lowercase character
function lowerCharacter() {
  let lL = 'a';
  var index = 0;
  let random = Math.floor(Math.random() * 26);
  lL = lL.charCodeAt(0) + random;
  lL = String.fromCharCode(lL);
  
  return lL;
}

//outputs random numeric character
function numericCharacter() {
  let nC = '0';
  var index = 0;
  let random = Math.floor(Math.random() * 10);
  nC = nC.charCodeAt(0) + random;
  nC = String.fromCharCode(nC);
  
  return nC;
}

//outputs random special character
function specialCharacter() {
  let sC = "!";
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

  sC = sC.charCodeAt(0) + random;
  sC = String.fromCharCode(sC);
  return sC;
}

function passwordLength() {
  //creates prompt where password length is asked for
  let inputLen = prompt("Input desired password length.\nMust be at least 8 characters long. and no more than 128 characters long.", "8");
  //validate if between 8 - 128, reprompt until meets criteria
  while (inputLen < 8 || inputLen > 128) {
    inputLen = prompt("Input desired password length.\nMust be at least 8 characters long. and no more than 128 characters long.", "8");
  }
  //return password length when validated
  return inputLen;

}

function passwordCharTypes() {
  //send alert that atleast one should be selected.
  alert("Next, we will select the character types to include in the password.\nNOTICE: atleast one character type should be selected.");
  //send confirm box for lowercase, uppercase, numeric, special characters
  //and click cancel to exclude the character type
  let upper = confirm("Include UPPERCASE characters in password?\nClick cancel to exclude character type.");
  let lower = confirm("Include LOWERCASE characters in password?\nClick cancel to exclude character type.");
  let numeric = confirm("Include NUMERIC characters in password?\nClick cancel to exclude character type.");
  let special = confirm("Include SPECIAL characters in password?\nClick cancel to exclude character type.");

  //confirm that atleast one was selected
  //if not add prompt, to see if they want to try again
  while (upper === false && lower === false && numeric === false && special === false) {
    alert("NOTICE: Atleast one character type should be selected.");
    upper = confirm("Include UPPERCASE characters in password?\nClick cancel to exclude character type.");
    lower = confirm("Include LOWERCASE characters in password?\nClick cancel to exclude character type.");
    numeric = confirm("Include NUMERIC characters in password?\nClick cancel to exclude character type.");
    special = confirm("Include SPECIAL characters in password?\nClick cancel to exclude character type.");
  }

  //return booleans for true or false of each character type, convert to 0 and 1's
  let aggTypes = "";
  if (upper === true) {
    aggTypes = aggTypes + "1";
  }
  else {
    aggTypes = aggTypes + "0";
  }

  if (lower === true) {
    aggTypes = aggTypes + "1";
  }
  else {
    aggTypes = aggTypes + "0";
  }

  if (numeric === true) {
    aggTypes = aggTypes + "1";
  }
  else {
    aggTypes = aggTypes + "0";
  }

  if (special === true) {
    aggTypes = aggTypes + "1";
  }
  else {
    aggTypes = aggTypes + "0";
  }

  return aggTypes;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //once generate button is clickec run the function write password
