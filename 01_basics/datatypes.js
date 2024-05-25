//types of datatypes
//primitive and non-primitive

//primitive ----- string , number , boolean,undefined,symbol,BigInt,null

//non-primitive(reference type) ---- arrays , objects , functions







"use strict" //treats all js code as a newer version

let age=18
let name="hero"






//typeof
console.log(typeof age); //number
console.log(typeof name);//string
console.log(typeof({a:23}))//object
console.log(typeof null);//object
console.log(typeof undefined);//undefined
console.log(typeof NaN)//number


//string type conversion
console.log("kadar"+" Khan") //kadar khan
console.log(1+'2');// 12
console.log('2'+1);//21
console.log('2'+1+1);//211
console.log(1+2+'3')//33

console.log(+true)//1
console.log(+'');//0


//symbol datatype
const a=Symbol(122)
const b=Symbol(122)
console.log(a===b);//false


console.log('0'===0);//false
console.log('0'==0);//true

let c=123n //n converts number into bigint
console.log(typeof(c));




//non-primitive types
const d=[1,2,3] //array

let obj ={
    name:"ram",
     age:14

} //object
 
let myFunction = function helloworld(){
    console.log("hello world")
} //function


console.log( typeof d); // object

console.log(typeof obj); //object

console.log(typeof myFunction); //function


myFunction()//calling a function



const b1 = [1,2,3]
const b2=b1
b2[0]=8
console.log(b1)