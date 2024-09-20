//Function for returning input value
function returnInputValue(id){
    const inputValue=document.getElementById(id).value;
    const inputNumebr=parseFloat(inputValue);
    return inputNumebr;
}

//Function for returning input text
function returnInputText(id){
    const inputText=document.getElementById(id).innerText;
    const textValue=parseFloat(inputText)
    return textValue;
}