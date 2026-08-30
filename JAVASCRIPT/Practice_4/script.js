console.log('Welcome to JavaScript');

let age=9;
let gender='Female';
let finalDiscount;
if(age<5){
    // document.querySelector('.age').innerText='Your age is less 5years. You do not need to book a ticket';
    console.log('You do not need a ticket');
    finalDiscount=100;
}else if(age>=5 && age<=8){
    // document.querySelector('.age').innerText='Your age is more than or equal to 5years but less than or equal 8years. Hence, You are eligible for half ticket';
    console.log('You are eligible for half ticket');
    finalDiscount=50;
}
else if(age>8 && age<=65){
    if(gender==='Female'){
        // document.querySelector('.age').innerText='You are eligible for 50% discounte on the ticket price';
        finalDiscount=50;
    }
    else{
    // document.querySelector('.age').innerText='You have to book a full ticket no discount applicable';
    finalDiscount=0;
    }
}
else if(age>65){
    if(gender=='Female'){
        // document.querySelector('.gender').innerText='For female there is a discount of 50% on the ticket price';
        finalDiscount=50;
    }
    else{
    // document.querySelector('.age').innerText='You are above 65year. Hence, you are eligible for 30% discount on ticket price';
    console.log('You are eligible for 30% discount on ticket price');
    finalDiscount=30;
    }
}
console.log(`You are eligible for ${finalDiscount}% discount on the ticket price`);
document.querySelector('.final_discount').innerText=`You are eligible for ${finalDiscount}% discount on the ticket price`
