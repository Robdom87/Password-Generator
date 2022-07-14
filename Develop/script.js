// Assignment Code
var generateBtn = document.querySelector("#generate"); //has the whole generate button html in there

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //in the write password function genrate password function is run and value stored in password
  var passwordText = document.querySelector("#password"); //selected text area and stored in passwordText

  passwordText.value = password; //assigned password to passwordText.value, and should replace placeholder value in box
  

}

function generatePassword() {
  var length = passwordLength ();
  var types = passwordCharTypes ();
// include recursive function to the length of the password
//random number generator to figure out the character to for each bit of the string
  return ; //return the full password
}

function passwordLength(){
  //creates prompt where password length is asked for
  let inputLen = prompt("Input desired password length.\nMust be at least 8 characters long. and no more than 128 characters long.", "8");
  //validate if between 8 - 128, reprompt until meets criteria
  while (inputLen < 8 || inputLen > 128) {
    inputLen = prompt("Input desired password length.\nMust be at least 8 characters long. and no more than 128 characters long.", "8");
  } 
  //return password length when validated
  return inputLen;
  
}

function passwordCharTypes(){
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
  if (upper=== true){
    aggTypes = aggTypes + "1";
  }
  else {
    aggTypes = aggTypes + "0";
  }

  if (lower=== true){
    aggTypes = aggTypes + "1";
  }
  else {
    aggTypes = aggTypes + "0";
  }

  if (numeric=== true){
    aggTypes = aggTypes + "1";
  }
  else {
    aggTypes = aggTypes + "0";
  }

  if (special=== true){
    aggTypes = aggTypes + "1";
  }
  else {
    aggTypes = aggTypes + "0";
  }
  
  return aggTypes;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //once generate button is clickec run the function write password
