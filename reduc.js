/*
* reduce is also a higher order function

*reduce also take function f as a argument

* what it does is it goes one by one to every element of the array
* say the current element is arr[i]

* reduce will pass this element to the function f, and accumulate the result of further 
*function calls with this particular result

*/




const arr=[1,2,3,4,5,6];

function sum(prevValu,curVal){
    console.log(prevValu,curVal)
    return prevValu+curVal;
}

const result=arr.reduce(sum);

console.log(result);


/*

* real life applications of reduce


*/

function addPrices(prevResult,curResult){
    console.log(prevResult,curResult)
    let newPrice=prevResult.price+curResult.price;
    return {price:newPrice}
}

let cart=[{price:80000,name:"Iphone"},{price:1200,name:"Backcover"},
{price:700,name:"tempered glass"}]

const totalPrice=cart.reduce(addPrices);

console.log(totalPrice.price)


let sum1=0;
for(let i=0;i<cart.length;i++){
    sum1=sum1+cart[i].price;
}
console.log(sum1)