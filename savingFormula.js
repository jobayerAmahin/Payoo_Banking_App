function returnNumber(id){
    return parseFloat(document.getElementById(id).value)
}

//Variable declare globally

// const income=parseFloat(document.getElementById('income').value)
// document.getElementById('calculateSavings').addEventListener('click',function(){//-----Discuss in Support
//     console.log(income)
// })

let totalExpense=parseFloat(house+transport+food);
let balance=income-totalExpense;
let savingsAmount=balance*savings/100;
let remaining=balance-savingsAmount;

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