// Assignment Code
let securePass ={
  lowerLetters:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  upperLetters:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  numbs:[0,1,2,3,4,5,6,7,8,9],
  specChars:['!','@','#','$','%','^','&','*','~','_']
}

let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Logic Section
function generatePassword (){
  let pword='';
  let characters=[];
  let n=0;
  let truth=0;

  //Confirm what characters the user wants in their password
  let lower=confirm("Would you like to have lowrcase letters in your password?");
  if (lower){
    truth+=1;
    n=Math.floor(Math.random()*100);
    while(n>25){n=Math.floor(Math.random()*100);}
    pword+=securePass.lowerLetters[n];
    characters=characters.concat(securePass.lowerLetters);
  }

  //Logic for user confirmed password cases
  let upper=confirm("Would you like to have uppercase letters in your password?");
  if (upper){
    truth+=1
    n=Math.floor(Math.random()*100);
    while(n>25){n=Math.floor(Math.random()*100);}
    pword+=securePass.upperLetters[n];
    characters=characters.concat(securePass.upperLetters);
  }

  let nums=confirm("Would you like to have numbers in your password?");
  if (nums){
    truth+=1
    n=Math.floor(Math.random()*100);
    while(n>9){n=Math.floor(Math.random()*100);}
    pword+=securePass.numbs[n];
    characters=characters.concat(securePass.numbs);
  }

  let specs=confirm("Would you like to have special characters in your password?");
  if (specs){
    truth+=1
    n=Math.floor(Math.random()*100);
    while(n>9){n=Math.floor(Math.random()*100);}
    pword+=securePass.specChars[n];
    characters=characters.concat(securePass.specChars);
  }

  //If all prompts cancelled retry
  if (truth===0){
    alert("You can't have a password with nothing in it!");
    alert("Please answer yes to one of the four prompts.");
    generatePassword();
  }

  //Determine Pword length-the original first values
  let len=prompt("How long would you like your password to be? (8-128 characters)");
  while (typeof(len)!=='number'&&(len<8||len>128)){
    alert("You have entered an invalid response!");
    len=prompt("How long would you like your password to be? (8-128 characters)");
  }

  //Randomly adds the rest of the characters (Fixed an index OOB error)
  for (let i=0;i<=(len-truth);i++){
    n=Math.floor(Math.random()*100);
    while(n>=characters.length){
      n=Math.floor(Math.random()*100);
    }
    pword+=characters[n]
  }
  return pword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);