
function signup(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    localStorage.setItem("Name",name)
    localStorage.setItem("Age",age)
    localStorage.setItem("Email",email)
    localStorage.setItem("password",pass)
    window.location.href="login.html"
}

function loginn(){
    let Email = document.getElementById("gmail").value;
    let Pass = document.getElementById("gass").value;

    let Email1 = localStorage.getItem("Email");
    let Pass1 = localStorage.getItem("password");



    if(Email==Email1 && Pass==Pass1){
        window.location.href="web.html";
    }else{
        alert("your email is wrong")
    }
}
function logout(){
    window.location.href="login.html"
}
function create(){
    window.location.href="index.html"
}
// function clean(){

// }
// localStorage.clear()