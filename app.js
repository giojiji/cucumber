let user;
let pass;
let statusacces = document.getElementById("status")

function enteruser() {
user = document.getElementById("user")
pass = document.getElementById("pass")

if(user.value == "giorgi" && pass.value == "1234") {
    statusacces.innerText = "you are wellcome"
} else if (user.value.includes("@")) {
    statusacces.innerText = "inccorect format"
}

else {
    statusacces.innerText = "your password is wrong"
}


}