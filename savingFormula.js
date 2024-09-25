let newTime=new Date().toLocaleTimeString();
const historySec=document.getElementById('historySec');

function addNotification(var1,var2,var3){
    const notificationN=document.createElement('div');
    notificationN.innerHTML=`
        <p>${newTime}</p>
        <p>Income- ${var1} $</p>
        <p>Expense- ${var2} $</p>
        <p>Balance- ${var3} $</p>
    `
    notificationN.setAttribute('class','border-2')
    notificationN.classList.add('p-2','border-dashed','rounded-lg','my-1')
    historySec.insertBefore(notificationN,historySec.firstChild)
    if(historySec.childElementCount>3){
        historySec.removeChild(historySec.lastChild)
    }

    // if(historySec.childElementCount<=3){
    //     return [historySec.insertBefore(notificationN,historySec.firstChild),historySec.removeChild(historySec.lastChild)]
    // }
    
}

function buttonToggle(id1,id2){
    document.getElementById('accountSec').classList.add('hidden');
    document.getElementById('notificationSec').classList.add('hidden');
    document.getElementById('summary').classList.add('hidden');

    document.getElementById(id1).classList.remove('hidden')

    //Background Color

    document.getElementById('historyBtn').classList.remove('bg-gradient-to-r','from-blue-700','to-blue-400','text-white');
    document.getElementById('accountBtn').classList.remove('bg-gradient-to-r','from-blue-700','to-blue-400','text-white');

    document.getElementById(id2).classList.add('bg-gradient-to-r','from-blue-700','to-blue-400','text-white');
}

document.getElementById('accountBtn').addEventListener('click',function(){
    
    buttonToggle('accountSec','accountBtn')
})

document.getElementById('historyBtn').addEventListener('click',function(){
    buttonToggle('notificationSec','historyBtn')
    document.getElementById('summary').classList.remove('hidden')
})


//Variable declare globally

// const income=parseFloat(document.getElementById('income').value)
// document.getElementById('calculateSavings').addEventListener('click',function(){//-----Discuss in Support
//     console.log(income)
// })

// let totalExpense=parseFloat(house+transport+food);
// let balance=income-totalExpense;
// let savingsAmount=balance*savings/100;
// let remaining=balance-savingsAmount;

//-----------------------------------------Calculation Button
document.getElementById('calculation').addEventListener('click',function(){
    const income=returnInputValue('income');
    const house=returnInputValue('house');
    const transport=returnInputValue('transport');
    const food=returnInputValue('food');
    //console.table(house,transport,food,savings)

    if(income<=0 || house<0 || transport<0 || food<0 || isNaN(income) || isNaN(house) || isNaN(transport) || isNaN(food)){
        alert('Invalid Input');
        return
    }
    else if(income<=house || income<=transport || income<=food || income<(house+transport+food)){
        alert('Income should be more than expense')
        return
    }
    else{
        let totalExpense=parseFloat(house+transport+food);
        let balance=income-totalExpense;

        document.getElementById('exp').innerText=totalExpense;
        document.getElementById('bal').innerText=balance;

        addNotification(income,totalExpense,balance)
        document.getElementById('notificationSec').classList.add('hidden');
        }

    document.getElementById('summary').classList.remove('hidden');

})

//-----------------------Savings Button
document.getElementById('calculateSavings').addEventListener('click',function(){
    const income=returnInputValue('income');
    const house=returnInputValue('house');
    const transport=returnInputValue('transport');
    const food=returnInputValue('food');
    const savings=returnInputValue('savings');
    //console.table(house,transport,food,savings)

    if(income<=0 || house<0 || transport<0 || food<0 || savings<0 || isNaN(income) || isNaN(house) || isNaN(transport) || isNaN(food) || isNaN(savings)){
        alert('Invalid Input');
        return
    }
    else if(income<=house || income<=transport || income<=food || income<(house+transport+food) || savings>100){
        alert('Savings should not be more than 100%')
        document.getElementById('savings').value=''
        return
    }
    else{
        let totalExpense=parseFloat(house+transport+food);
        let balance=income-totalExpense;
        let savingsAmount=balance*savings/100;
        let remaining=balance-savingsAmount;
    
        document.getElementById('sav').innerText=savingsAmount;
        document.getElementById('rem').innerText=remaining;
    }


})