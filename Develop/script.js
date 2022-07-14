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
  //send confirm box for lowercase, uppercase, numeric, special characters
  //mention that atleast one will be selected
  //and click cancel to exclude the character type
  //confirm that atleast one was selected
  //if not add prompt, to see if they want to try again
  //return booleans for true or false of each character type
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //once generate button is clickec run the function write password
