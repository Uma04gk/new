



function validate()
{


  var firstname= document.getElementById("fname");

  localStorage.setItem("fname", firstname.value);


  var lname= document.getElementById("lname");
  localStorage.setItem("lname", lname.value);




var inputEmail= document.getElementById("email");
localStorage.setItem("email", inputEmail.value);

var password= document.getElementById("Password");


localStorage.setItem("password", password.value);

var password1= document.getElementById("Confirm-Password");



if(password1.value!=password.value)
{

    alert("password does not match");
return false;
}


window.location = "login.html";
return false;
}
