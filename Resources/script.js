// Assignment Code
var generateBtn = document.querySelector("#generate")
var passwordText = document.querySelector("#password")


// Function to Generate Code
function writePassword() {
    
    //Prompt to ask for password Options
    var pasLength = parseInt(prompt("How many characters would you like your password to be? (8-128)"))
  
    if((pasLength >= 8) && (pasLength <= 128)) {
    
    //Defining the variables used in password
    var numbers = "0123456789";
    var symbols = "!@#$%^&*()_+{}";
    var lowerCase = "qwertyuiopasdfghjklzxcvbnm";
    var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";

    // Confirming which options they want to use in their Password
    var numConfirm = confirm("Do you want to use numbers in your password?");
    var symConfirm = confirm("Do you want to use symbols in your password?");
    var lowConfirm = confirm("Do you want to use lowercase letters in your password?");
    var uppConfirm = confirm("Do you want to use uppercase letters in your password?");
    
    //Open Array to push the varibles too.
    var passPool = [];

    //Conditional Statements to push set varibles to the open array
      if(numConfirm) {
        for (i = 0; i < numbers.length; ++i) {
          passPool.push(numbers[i])
        }
      }

      if(symConfirm) {
        for(i = 0; i < symbols.length; ++i) {
          passPool.push(symbols[i])
        }
      }
     
      if(lowConfirm) {
        for(i = 0; i < lowerCase.length; ++i) {
          passPool.push(lowerCase[i])
        }
      }
     
      if(uppConfirm) {
        for(i = 0; i < upperCase.length; ++i) {
          passPool.push(upperCase[i])
        }
      }
      
      console.log(passPool)
     
      //After the condition statements are pushed, the code is randomized with the following statement.
      let passDraft = []; {
        for(let i = 0; i < pasLength; ++i) {
        var ranSelect = Math.floor(Math.random() * Math.floor(passPool.length));
        passDraft.push(passPool[ranSelect])
        }
      }
        
      console.log(passDraft)
              
      var finalPass = passDraft.join('')
     
      document.getElementById("password").textContent = finalPass
  }else {
    var incorrectPw = alert("Password has to be between 8-128 characters")
  }
} 




      


  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // var password = generatePassword();
  



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);