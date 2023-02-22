// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("This works");
  let password = generatePassword();  
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  
 
}

function generatePassword() {
  let numPass = parseInt(prompt("Enter a number between 8-128 to use in your password"));
      if ( numPass < 8 || numPass > 128 || isNaN(numPass)) {
        alert("The value you entered is not between 8-128.");
      }
 


}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// //uplong click of 'generate a password' button, a series of prompts for password criteria begins
// // when propmpted for passward criteria, user selects which criteria to include

// Start with an alert or display stating that strong passwords include certain criteria
// Press Ok to continue

// if cancel stop


// // when prompted for the length of the password, user chooser a length of at least 8 and no more than 128 characters
// Choose the number of characaters in your password from 8 to 128
// Check for validity of repsoonse - if good continue, if not good reprompt

// //when prompted for character types to include, user confirms whether or not to include lowercase, uppercase, numeric, and/or special characters

// Strong passwords include at leat one of ..., in the following choose at least one
// more alerts asking if they want to include lowercase, uppercase, numeric, and/or special characaters

// //when each prompt is answered, the input should be validated and at least one character type should be selected
// Prompt that shows what has been chosen, continue 

// //when all prompts are answered, a password should be generated that matches the criteria chosen
// upon the continue, generate password based on users criteria

// //the generated password is either displayed in an alert or written to the page
// display onscreen or in prompt