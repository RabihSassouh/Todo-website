let username=document.getElementById("UserName");
let password=document.getElementById("Password");
let login=document.getElementById("login");
login.addEventListener("click", function() {

    if (username.value == "AdminSEF123" && password.value == "SeF@ctORy$$456") {
        window.location.href = "./pages/main.html";
    } else {
       alert("invalid user name or password");}
});
