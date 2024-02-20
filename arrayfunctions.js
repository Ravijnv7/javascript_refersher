/*
* map function-> map function is higher order function available with arrays
*it takes function as a argument->f
*it returns array in which every value is actually populated by calling function f with 
* original array element as argument

* every elemement of original array is passed one by one in the argument function ->f

* whatever the outuput for each individual element , we populate the output in an array

* map internally iterates on each element of array and pass the element to argument function ->f
 
* and then stored the returned value inside an array
*/


function square(el){
    return el*el;
}
const arr=[1,2,3,4,5];


 const result=arr.map(square);
 console.log(result)


 function cube(x){
    return x*x*x;
 }

 function isEvenorOdd(x){
    if(x%2==0){
        return "even"
    }
    else{
        return "odd"
    }

 }

 const cuberesult=arr.map(cube);
 console.log(cuberesult)

 const evenodd=arr.map(isEvenorOdd);
 console.log(evenodd)

 /*
 * if the function we are passing in map takes two
 * argument then the first argument will be actual value and second argument will
 * be index ot that value


 */


 const newArray=[1,2,3,4,5,6];

 function print(element,idx){
    return `Element is at index ${idx}is ${element}`
 }

 const result2=newArray.map(print);
 console.log(result2)