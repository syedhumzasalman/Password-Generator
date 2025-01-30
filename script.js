
function passGenerator() {
  let passLength = document.getElementById("passLength").value;
  let number = "123456789";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lowercase = "abcdefghijklmnopqrstuvwxyz"
  let symbol = "!@#$%^&*?~;'"

  
  let password = "";
  let newChar = "";
  
  let includeNumbers = document.getElementById("numberCheckbox").checked;
  let includeLowercase = document.getElementById("lowercaseCheckbox").checked;
  let includeUppercase = document.getElementById("uppercaseCheckbox").checked;
  let includesymbol = document.getElementById("symbolCheckbox").checked;


        if(includeNumbers){
          newChar += number;
        }

        if(includeUppercase){
          newChar += uppercase;
        }

        if(includeLowercase){
          newChar += lowercase;
        }

        if(includesymbol){
          newChar += symbol;
        }

        if(newChar !== ""){
          for(let i = 0; i < passLength; i++){
            let randomIdx = Math.floor(Math.random() * newChar.length)
            password += newChar[randomIdx] 
          }
          document.getElementById("Generate-Password").value = password
        }else{
          document.getElementById("Generate-Password").value = " Atleast Check One Checkbox "
        }
        
      }
    


