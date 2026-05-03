const display = document.getElementById('display');

function calcNum(input){
    
    if (display.value === "Error"){
        return;
    }
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}