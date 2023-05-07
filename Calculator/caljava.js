let input = document.getElementById('input');

let inputValue = "";

const buttons = document.getElementsByClassName('btn');
for(item of buttons){
    item.addEventListener('click', (event) =>{
        buttonText = event.target.innerText;
        inputValue += buttonText;
        input.value = inputValue;
    });
   
}

function clearInput () {
    inputValue = "";
    document.getElementById("input").value = inputValue;
    // input.value = inputValue;
    
}

document.addEventListener("keydown", (e) =>{
    if (e.key == "(" ||
        e.key == ")" ||
        e.key == "+" ||
        e.key == "-" ||
        e.key == "*" ||
        e.key == "/" ||
        e.key == "%" ||
        e.key == "." ||
        e.key <=9)
        inputValue += e.key;
        input.value = inputValue;
        
    
})

let btns = document.querySelectorAll('.btn2');
Array.from(btns).forEach((btn)=>{
  btn.addEventListener('click', (e)=>{
    e.target.innerHTML == '=';
    inputValue = eval(inputValue);
    document.querySelector('input').value = inputValue;
  })

})