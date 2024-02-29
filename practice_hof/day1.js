// whenever a function is passed as a argument to a another function then this type of function is known as higer order function


// function hof(x,gof){
//     console.log(`${x} is passed as a argument`);
//      console.log(gof)
//      gof();

// }

// hof(23,function gof(){
//     console.log("this function is passed as argument to the other function which will be called higher order function");
// })

// const arr =[121,34,55,66];

// // sort is also a higher order function which applies on array

// arr.sort((a,b)=>a-b);

// console.log(arr);

// going to read about map function which also a higher order fucntion

/*

* map is also a higher order function -> function f will be passed as a agrument 
* map will return a new modified array-> how the array will be modified it should be clear ? 
* what it does is that it will pass each element of the original array to the function f which is passed as a argument
* after modifing each element of the array it will reaturn a new array;





*/

// function square(el){
//     return el*el;
// }


// const arr1=[1,2,3,4,5];

//  const result=arr1.map(square);

//  console.log(result);

//  function cube(el){

//     return el*el*el;

//  }

//  const result1=arr1.map(cube);
//  console.log(result1);


/*
* we can do all those things without using map function i,e; higher order functions;

*/

const arr=[1,2,3,45];

const newarr=[];
for(let i=0;i<arr.length;i++){
    newarr.push(arr[i]*arr[i]);

}
console.log(newarr);

