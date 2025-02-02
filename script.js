// calculator program

const display = document.getElementById("display");

function AppendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function Calculate(){
    try {
        display.value = new Function('return ' + display.value)();
    } catch {
        display.value = "Error";
    }
}