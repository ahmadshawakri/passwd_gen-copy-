document.getElementById("generator").addEventListener("click", generatePass);

function generatePass(){
    const characters = `0123456789abcdefghijklmnopqrstuvwxyz
!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    var passwd = "";
    var rand_char = "";
    for(var i = 0; i < 16; i++){
        rand_char = characters[Math.floor(Math.random() * characters.length)];
        passwd += rand_char;
    }
    document.getElementById("rand_passwd").value = passwd;
}


