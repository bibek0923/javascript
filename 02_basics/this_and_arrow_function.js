// this refers to the current context
user={
    name:"jack",
    id:122,
    username:function one(){
        console.log("hello",this.name);
        console.log(this);
        
        
    }
}
user.username()
user.name="curran" // changing the context
user.username()

const a=function (){
    user="ram"
    console.log(this.user); 
    console.log(this);
    
}
a() //user will be printed

// const b=function (){
//    let  username="shyam"
//     console.log(this.username); 
// }
// b() // wont get an output

const c =  () => console.log(this);
c()
//{}no output

//arrow function
// basic syntaxt () => ()  and () => {return }   curly braces use garesi return keyword use garnu parcha explicit return



