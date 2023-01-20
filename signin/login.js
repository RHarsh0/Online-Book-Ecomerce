arr = JSON.parse(localStorage.getItem("login"));

let mail = document.getElementById("mail");
let pass = document.getElementById("pass");
let login = document.getElementById("sub");
let direct = document.createElement("a");

login.addEventListener("click",function(){
    
    direct.href = "ecommerce.html"
    arr.forEach(element => {
        if(mail.value==element.mailob && pass.value == element.passob){
            
             return "ecommerce.html";
        }
       
    });
    return alert("intruder");
})