document.querySelector("#signupbutton").addEventListener("click", signup);

var userdata = JSON.parse(localStorage.getItem("signupdata")) || [];



function signup(){
    var firstName = document.querySelector("#First-Name").value;
    var lastName = document.querySelector("#Last-Name").value;
    var mobile = document.querySelector("#mobile-number").value;
    var email = document.querySelector("#Email").value;
    var password = document.querySelector("#password").value;
    var cfmpassword = document.querySelector("#cfmpassowrd").value;
    var usercred = {
        firstName: firstName,
        lastName: lastName,
        mobile: mobile,
        email: email,
        password: password,
        cfmpassword: cfmpassword
    }
    if(firstName==""||mobile==""||email==""||lastName==""||password==""||cfmpassword==""){
        alert("enter valid details");
    }else{
        userdata.push(usercred);
    }
    localStorage.setItem("signupdata",JSON.stringify(userdata));
    if(firstName!=""&&lastName!=""&&email!=""&&mobile!==""&&password!=""&&cfmpassword!=""){
        window.localStorage.href="index.html"
    }
}
