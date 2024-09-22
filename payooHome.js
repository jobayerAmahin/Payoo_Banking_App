//Add Money Section

let totalAmount=returnInputText('totalAmount');
document.getElementById('addButton').addEventListener('click',function(event){
    event.preventDefault();
    const addingAmount=returnInputValue('addingAmount');
    const pinAdd=returnInputValue('pinAdd');
    
    if(pinAdd===1426){
        totalAmount=totalAmount+addingAmount;
        document.getElementById('totalAmount').innerText=totalAmount;
    }
    else if(pinAdd==='' || addingAmount===''){
        alert('Please Provide amount or pin number')
    }
    else{
        alert('Wrong Pin')
    }
    
    document.getElementById('addingAmount').value=''
    document.getElementById('pinAdd').value=''

    //Cash In History
    const addHistory=document.createElement('div');
    addHistory.innerHTML=`
    <p class="text-xs text-black-600">${new Date().toLocaleDateString()}</p>
    <p class="text-xs text-green-800 font-bold">Money Added</p>
    <p class="text-xs text-green-800 font-bold">${addingAmount}</p>
    `
    addHistory.setAttribute('class','flex')
    addHistory.classList.add('justify-between')
    const transactionNode=document.getElementById('historyTransaction');
    transactionNode.insertBefore(addHistory,transactionNode.children[1]);
    
})
//Toggling Section
document.getElementById('outBtnToggle').addEventListener('click',function(){
    showButtonContent('cashOut')
    
    document.getElementById('addingAmount').value=''
    document.getElementById('pinAdd').value=''
})

document.getElementById('transBtnToggle').addEventListener('click',function(){
    showButtonContent('historyTransaction')

    document.getElementById('addingAmount').value=''
    document.getElementById('pinAdd').value=''
})

document.getElementById('saveBtnToggle').addEventListener('click',function(){
    showButtonContent('savingFormula')

    document.getElementById('addingAmount').value=''
    document.getElementById('pinAdd').value=''
})

document.getElementById('addBtnToggle').addEventListener('click',function(){
    showButtonContent('addMoney')

    document.getElementById('addingAmount').value=''
    document.getElementById('pinAdd').value=''
})


//Cash Out Section

document.getElementById('outBtn').addEventListener('click',function(event){
    event.preventDefault();
    const outAmount=returnInputValue('outAmount');
    const outPin=returnInputValue('outPin');
    if(outPin===1426){
        totalAmount=totalAmount-outAmount;
        document.getElementById('totalAmount').innerText=totalAmount;
    }
    else{
        alert('Wrong Pin')
    }
    
    document.getElementById('outAmount').value=''
    document.getElementById('outPin').value=''

    //Cash out History
    const outHistory=document.createElement('div');
    outHistory.innerHTML=`
    <p class="text-xs text-black-600">${new Date().toLocaleDateString()}</p>
    <p class="text-xs text-red-400 font-bold">Money Cashed Out</p>
    <p class="text-xs text-red-400 font-bold">${outAmount}</p>
    `
    outHistory.setAttribute('class','flex')
    outHistory.classList.add('justify-between')
    const transactionNode=document.getElementById('historyTransaction');
    transactionNode.insertBefore(outHistory,transactionNode.children[1]);
})

