// singletol object.create

//object literal

//using symbol as key
const id =Symbol('123A')


const user={
names:'ram',
class:17,
days_working:['sunday','monday'],
isAvailable:true,
"father's name":"bibek",
[id]:"hello nepal",
}
console.log(user.class)
console.log(user['class'])
console.log(user["father's name"])
console.log(user[id]);
//console.log(user.father's name") cant access like this


const age =Symbol('hh')
user["age"]=15
//user.age=15 
console.log(user);

//freeze
Object.freeze(user)
// wont get applied user.name="rammmmm"


const user1={
    names:'ram',
    class:17,
    days_working:['sunday','monday'],
    isAvailable:true,
    "father's name":"bibek",
   
    }
    user1.greeting= function (){
        console.log(`hello ${user1.names} or ${this.names}`);
    }
    console.log(user1.greeting());



   