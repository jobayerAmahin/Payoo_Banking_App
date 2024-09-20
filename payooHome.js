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
})
//Toggling Section
document.getElementById('outBtnToggle').addEventListener('click',function(){
    document.getElementById('cashOut').classList.remove('hidden');
    document.getElementById('addMoney').classList.add('hidden');
    
    document.getElementById('addingAmount').value=''
    document.getElementById('pinAdd').value=''
})

document.getElementById('addBtnToggle').addEventListener('click',function(){
    document.getElementById('addMoney').classList.remove('hidden');
    document.getElementById('cashOut').classList.add('hidden');

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
})
