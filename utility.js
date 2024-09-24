//Function for returning input value
function returnInputValue(id){
    const inputNumebr=parseFloat(document.getElementById(id).value)
    return inputNumebr;
}

//Function for returning input text
function returnInputText(id){
    const inputText=document.getElementById(id).innerText;
    const textValue=parseFloat(inputText)
    return textValue;
}

function showButtonContent(id){
    document.getElementById('addMoney').classList.add('hidden')
    document.getElementById('cashOut').classList.add('hidden')
    document.getElementById('savingFormula').classList.add('hidden')
    document.getElementById('historyTransaction').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}