// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {
  //ask user to enter the number of characters they want - alerts if it's not within range
  var numPass = parseInt(prompt("How many characters do you want in your password? Enter a number between 8-128."));
      if ( numPass < 8 || numPass > 128 || isNaN(numPass)) {
        alert("The value you entered is not between 8-128.");
        return;
      }
  
  //ask user to confirm if they want lowercase, uppercase, numbers, and special characters
  var lowCase = confirm("Do you want to include lowercase letters in your password?");
  var uppCase = confirm("Do you want to include uppercase letters in your password?");
  var numCase = confirm("Do you want to include numbers in your password?");
  var spec = confirm("Do you want to include special characters in your password?");

  //makes sure that user chooses at least one criteria
    while(lowCase === false && uppCase === false && numCase === false && spec === false) {
      alert("You must select at least 1 type of criteria to generate a password.");
      var lowCase = confirm("Do you want to include lowercase letters in your password?");
      var uppCase = confirm("Do you want to include uppercase letters in your password?");
      var numCase = confirm("Do you want to include numbers in your password?");
      var spec = confirm("Do you want to include special characters in your password?");
    };

  //arrays that can be added into optionsArray based on user input
    var optionsArray = [];
    var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
    var upperCase = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    var numbers = "1234567890".split("");
    var specials = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
  
  //concatenates the arrays with optionsArray
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
  
  //creates empty array to store the password
    var randomIndexArray = [];

  //creates a while loop to add the correct number of characters into randomIndex
    var i = 1;
    while (i <= numPass){
     
    var indexNum = Math.floor(Math.random()*optionsArray.length);
      randomIndexArray.push(optionsArray[indexNum]);
      i++;
    }
    return randomIndexArray.join("");  //this is the password that is returned to writePassord()
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

