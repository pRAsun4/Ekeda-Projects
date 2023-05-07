const gender = document.querySelectorAll('input[name="gender"]');

let displayBmi = document.getElementById("resultBmi");
let commentBox = document.getElementById("commentBox");
let selectGender = "";


function genderCheck() {
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            selectGender = gender[i].value;
            break;
        } 
        
    }
    console.log(selectGender);
}



function submit() {
    let height = document.getElementById("heightText").value;
    let weight = document.getElementById("weightText").value;
    let nameBox = document.getElementById("nameBox").value;
    let age = document.getElementById("ageText").value;
   
    
    if (height == "" && weight == "") {
        alert("Please enter all the related field..");
        return
    }
    height /=100;
    console.log(height);

    let calBmi = weight/(height*height);
    let resultBmi = calBmi.toFixed(2);

    console.log(resultBmi);
    console.log(nameBox);

    if (calBmi < 18.5) {
        displayBmi.innerHTML ="Hellow  " + nameBox + "  You are  " + age + "  your BMI is  " + resultBmi;
        commentBox.innerHTML = " And you are under weight";
    }
    else if (resultBmi >= 18.5 && resultBmi <= 24.9) {
        displayBmi.innerHTML = "Hellow  " + nameBox + "  You are  " + age + "  your BMI is  " + resultBmi;;
        commentBox.innerHTML = "And you are Normal";
    }
    else if (resultBmi >= 25 && resultBmi <=29.9) {
        displayBmi.innerHTML = "Hellow  " + nameBox + "  You are  " + age + "  your BMI is  " + resultBmi;;
        commentBox.innerHTML = "And you are Over Weight";
    }
    else if (resultBmi >= 30 && resultBmi <= 34.9) {
        displayBmi.innerHTML = "Hellow  " + nameBox + "  You are  " + age + "  your BMI is  " + resultBmi;;
        commentBox.innerHTML = "And you are Obesity-1";
    }
    else if (resultBmi >= 35 && resultBmi <= 39.9) {
        displayBmi.innerHTML = "Hellow  " + nameBox + "  You are  " + age + "  your BMI is  " + resultBmi;;
        commentBox.innerHTML = "And you are Obesity-2";
    }
    else if (resultBmi > 40) {
        displayBmi.innerHTML = "Hellow  " + nameBox + "  You are  " + age + "  your BMI is  " + resultBmi;;
        commentBox.innerHTML = "And you are Extreamly Obesity";
    }
}
