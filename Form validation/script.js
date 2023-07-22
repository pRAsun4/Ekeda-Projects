let fnameT = document.getElementById("errortext");
let lnameT = document.getElementById("errortextL");
let emailT = document.getElementById("errortextEmail");
let mobileT = document.getElementById("errortextNumber");
let passwordT = document.getElementById("errortextPass");
let cpasswordT = document.getElementById("errortextCPass");




let mobile = document.getElementById("phone").value;
let password = document.getElementById("pass").value;
let cpassword = document.getElementById("passw").value;

let right = document.getElementById("check");
let cross = document.getElementById("cross");

function submitBtn (){
    
    // if (fname == '' && lname == '' && email == '' && mobile == '' && password == '' && cpassword == '') {
    //     alert("Please fill all the fields");
    // }
    firstName();
    emailValidation(); 
    lastName();
    
}

function firstName() {
    let fname = document.getElementById("name").value;

    if (fname.length == 0 ) {
        fnameT.innerHTML = "First Name is Required";
        cross.style.display = "block";
        right.style.display = "none"; 
    }

    if (!fname.match("^[A-Z][a-zA-Z]*$")) {
        fnameT.innerHTML = "Write the first letter in Capital ";
        cross.style.display = "block";
        right.style.display = "none"; 
        return false;
    }

    fnameT.innerHTML = "";
    right.style.display = "block";
    cross.style.display = "none";
    return true;
    
}


function lastName() {
    let lname = document.getElementById("lname").value;

    if (lname.length == 0 ) {
        lnameT.innerHTML = "Last Name is Required";
        cross.style.display = "block";
        right.style.display = "none"; 
    }

    if (!lname.match("^[A-Z][a-zA-Z]*$")) {
        lnameT.innerHTML = "Write the first letter in Capital ";
        cross.style.display = "block";
        right.style.display = "none"; 
        return false;
    }

    lnameT.innerHTML = "";
    right.style.display = "block";
    cross.style.display = "none";
    return true;
    
}




function emailValidation () {
    let email = document.getElementById("email").value;

    if (email.length == 0 ) {
        emailT.innerHTML = "Email is Required";
        cross.style.display = "block";
        right.style.display = "none"; 
    }

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailT.innerHTML = "Please Enter Valid Email.";
        cross.style.display = "block";
        right.style.display = "none";
        return false;
    }

    emailT.innerHTML = "";
    right.style.display = "block";
    cross.style.display = "none";
    return true;
}