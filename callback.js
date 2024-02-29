/*

* fun-> HOF as it takes fn as a argument 

* x->number

* fn->function-> the function which is passed as a argument is called callback function

*/

function fun(x,fn){
    for(let i=0;i<x;i++){
        console.log(i);
    }
    fn();
}

fun(10,function exec(){
    console.log('I am also executed')
})

setTimeout(function x(){
    console.log(' I am being printed after sometimes')
},4000)
