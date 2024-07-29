

function sum(a,b){
   
    return(a+b)
}
s=sum(2,3)
console.log(`sum is ${s}`);

//a,b are parameters and 2,3 are arguments


//rest operator ...  we can pass any values 
function sum1(...num1){
    return num1
}
console.log(sum1(1,22,5,4));

function anyObje(obj){
    console.log(obj);
    console.log(`user name is ${obj.username}`);
}

anyObje({username:"ram", id:4555})

//similarly we can pass arrays too