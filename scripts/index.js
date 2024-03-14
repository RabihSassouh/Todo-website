let username = document.getElementById("UserName");
let password = document.getElementById("Password");
let login = document.getElementById("login");
login.addEventListener("click", function () {
  if (username.value == "123" && password.value == "456") {
    window.location.href = "./pages/main.html";
  } else {
    alert("invalid user name or password");
  }
});
