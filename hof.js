// whenever a function is passed as a argument to onother function then these funcions
// are called higher order function



/*

* arr.sort()-> by default sort the element in lexicographic way .


*/

function hof(x,fn){
    //x-> number
    //fn-> function
    console.log(x);
    console.log(fn)
    fn();
}

hof(10,function exe(){
    console.log(" I am expression passed to HOF")
})


const arr =[100,20,1,30,13,10000,4,5,6];

arr.sort();
console.log(arr)