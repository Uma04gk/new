function validate() {

    var username = document.getElementById("fname").value;
    var password = document.getElementById("password").value;
    if (username == localStorage.getItem("fname") && password ==localStorage.getItem("password"))
    {
        alert("Login successfully");

    }
    else {
alert("Wrong login Details");
    }
}
