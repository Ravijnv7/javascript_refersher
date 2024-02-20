/*
* filter function
* filter is also a higher order function
* filter also loops over the array element
*there is one special thing about filter the argument function which we pass inside filter
* should return a boolean, otherwise outuput will be converted to boolean


* filter loops over every element of the array and passes each elelment to the argument 
* function f and then if output of this function call is true ,then stores the orginal 
* element in new array otherwise does not add to the new array

*/

function oddOrEven(x){
    return (x%2==0)
}

let arr=[1,2,3,4,5,6,7,8]

const newarr=arr.filter(oddOrEven);
console.log(newarr);
