let fnameT = document.getElementById("errortext");
let lnameT = document.getElementById("errortextL");
let emailT = document.getElementById("errortextEmail");
let mobileT = document.getElementById("errortextNumber");
let passwordT = document.getElementById("errortextPass");
let cpasswordT = document.getElementById("errortextCPass");

let fname = document.getElementById("name").value;
let lname = document.getElementById("lname").value;
let email = document.getElementById("email").value;
let mobile = document.getElementById("phone").value;
let password = document.getElementById("pass").value;
let cpassword = document.getElementById("passw").value;


function submitBtn (){
    
    if (fname == '' && lname == '' && email == '' && mobile == '' && password == '' && cpassword == '') {
        alert("Please fill all the fields");
    }

    emailValidation(); 
    
}

function emailValidation () {
    var mailInput = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    
    if(email.value.match(mailInput)){
        return true;
    }
    else {
        emailT.innerHTML = "enter a valid mail";
    }
}