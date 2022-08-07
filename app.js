 

function updatePhoneNumber(item,operation,price){
    const input =   document.getElementById(item + '-number');  //number = phone/case
   
 console.log(input.value);
    
    if(operation == true){
        
        const inputValue =  parseInt(input.value )+ 1;
        input.value = inputValue;
       
    }
    else if(operation == false && input.value>0){
        const inputValue =  parseInt(input.value ) - 1;
        input.value = inputValue;
    }

    const phone_total = document.getElementById(item + '-total');
    phone_total.innerText = input.value * price;

    calculation();
}


function calculation(){
const phoneInput = parseInt(document.getElementById('phone-number').value);
const PhoneTotal = phoneInput * 1219;
const caseInput = parseInt(document.getElementById('case-number').value);
const caseTotal = caseInput * 59;
 
const subTotal = PhoneTotal + caseTotal ;
const tax = subTotal / 10 ;
const  Total_Price = tax + subTotal ;
document.getElementById('sub-total').innerText = subTotal;
document.getElementById('tax-amount').innerText = tax;
document.getElementById('total-price').innerText = Total_Price;
console.log(subTotal);

}

//Phone Increment decrement
function handleIncrement (){
    
    updatePhoneNumber('phone',true,1219);
    
}
function handleDecrement (){
    updatePhoneNumber('phone',false,1219);
    
}


//Case Increment decrement
function handleIncrement2 (){
   
    updatePhoneNumber('case',true,59);
 
}
function handleDecrement2 (){
    updatePhoneNumber('case',false,59);
 
}