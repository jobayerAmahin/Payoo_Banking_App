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