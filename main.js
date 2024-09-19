//Login Section
document.getElementById('loginBtn').addEventListener('click',function(event){
    event.preventDefault();

    const userNumber=document.getElementById('userNumber').value;
    const userPin=document.getElementById('userPin').value;
    console.log(userNumber,userPin)

    if(userNumber==='01538834600' && userPin==='1426'){
        window.location.href='/payooHome.html'
    }
    else{
        alert('Wrong Number or Pin')
    }
    document.getElementById('userNumber').value=''
    document.getElementById('userPin').value=''
})

//Add Money Section
let totalAmountText=document.getElementById('totalAmount').innerText;
let totalAmount=parseFloat(totalAmountText);
document.getElementById('addButton').addEventListener('click',function(event){
    event.preventDefault();
    const addingAmount=document.getElementById('addingAmount').value;
    const pinAdd=parseFloat(document.getElementById('pinAdd').value);
    if(pinAdd==='1426'){
        console.log(totalAmount)
    }
    else{
        alert('Wrong Pin')
    }

})