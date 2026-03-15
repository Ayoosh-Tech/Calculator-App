let display = document.getElementById("display");

function append(value){
display.value += value;
}

function clearDisplay(){
display.value = "";
}

function calculate(){
try{
display.value = eval(display.value);
}
catch{
display.value = "Error";
}
}

function toggleSign(){
if(display.value){
display.value = parseFloat(display.value) * -1;
}
}

function percentage(){
display.value = parseFloat(display.value) / 100;
}