function getPassword(){
    const chars = document.getElementById("passwSymbols").value;

    //const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*( )_+?><:{}[]'

    let passwordLength = document.getElementById("passwLength").value;
    let password =  "";

    for (let i=0; i<passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber,randomNumber+1);
    }
    document.getElementById('password').value = password;
}

function copyPassword() {
    /* Get the text field */
    var copyText = document.getElementById("password");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    //alert("Copied: " + copyText.value);
    
  }
