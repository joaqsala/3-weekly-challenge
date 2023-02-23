// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  

}

function generatePassword() {
  var numPass = parseInt(prompt("How many characters do you want in your password? Enter a number between 8-128."));
      if ( numPass < 8 || numPass > 128 || isNaN(numPass)) {
        alert("The value you entered is not between 8-128.");
        return;
      }
  
  var lowCase = confirm("Do you want to include lowercase letters in your password?");
  var uppCase = confirm("Do you want to include uppercase letters in your password?");
  var numCase = confirm("Do you want to include numbers in your password?");
  var spec = confirm("Do you want to include special characters in your password?");

    while(lowCase === false && uppCase === false && numCase === false && spec === false) {
      alert("You must select at least 1 type of criteria to generate a password.");
      var lowCase = confirm("Do you want to include lowercase letters in your password?");
      var uppCase = confirm("Do you want to include uppercase letters in your password?");
      var numCase = confirm("Do you want to include numbers in your password?");
      var spec = confirm("Do you want to include special characters in your password?");
    };

    var optionsArray = [];
    var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
    var upperCase = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    var numbers = "1234567890".split("");
    var specials = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
  
    if(lowCase){
      optionsArray = optionsArray.concat(lowerCase);
    }
    if(uppCase){
      optionsArray = optionsArray.concat(upperCase);
    }
    if(numCase){
      optionsArray = optionsArray.concat(numbers);
    }
    if(spec){
      optionsArray = optionsArray.concat(specials);
    }
  
  
    var randomIndex = [];
    
    var i = 1;
    while (i <= numPass){
     
    var indexNum = Math.floor(Math.random()*optionsArray.length);
      randomIndex.push(optionsArray[indexNum]);
      i++;
    }
    return randomIndex.join("");
}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// add a series of prompts for password criteria
// when propmpted for passward criteria, user selects which criteria to include

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