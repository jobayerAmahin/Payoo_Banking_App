//Add Money Section
let totalAmountText=document.getElementById('totalAmount').innerText;
let totalAmount=parseFloat(totalAmountText);
document.getElementById('addButton').addEventListener('click',function(event){
    event.preventDefault();
    const addingAmount=document.getElementById('addingAmount').value;
    const pinAdd=document.getElementById('pinAdd').value;
    if(pinAdd==='1426'){
        totalAmount=totalAmount+parseFloat(addingAmount);
        document.getElementById('totalAmount').innerText=totalAmount;
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
})

document.getElementById('addBtnToggle').addEventListener('click',function(){
    document.getElementById('addMoney').classList.remove('hidden');
    document.getElementById('cashOut').classList.add('hidden');
})


//Cash Out Section

document.getElementById('outBtn').addEventListener('click',function(event){
    event.preventDefault();
    const outAmount=document.getElementById('outAmount').value;
    const outPin=document.getElementById('outPin').value;
    if(outPin==='1426'){
        totalAmount=totalAmount-parseFloat(outAmount);
        document.getElementById('totalAmount').innerText=totalAmount;
    }
    else{
        alert('Wrong Pin')
    }
    
    document.getElementById('addingAmount').value=''
    document.getElementById('pinAdd').value=''
})
