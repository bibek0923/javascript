let a=30
const b=10
var c=20

console.log(a)
console.log(b)
console.log(c)
if(true){
    console.log("a outside is ",a)
    a=a+60
    console.log("a inner is",a)
    let d=90
    var e=100
}
console.log(a);//modified the globally declared a
console.log(e); // var can be accessed from outside so we better dont use it as it may cause various errors
//console.log(d) gives an error
//{this is scope , variables declared inside it cant be accessed from outside} , 

