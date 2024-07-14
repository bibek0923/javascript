num=[1,2,3,4] //decalaring arrays
num1=new Array(1,2,3,4,5) //declaring arryas


console.log(num);
console.log(num1);

//methods

num.push(4)
console.log(num)
num.pop()

num.unshift(9)//adds 9 to index 0
console.log(num)

num.shift() //removes first element
console.log(num)

console.log(num.includes(8));
console.log(num.indexOf(3))

new_num = num.join()//converts array into string
console.log(new_num)

//slice and splice

n1=num.slice(1,3) //creates a new array starting with index 1 and excluding 3
console.log(n1);

n2=num.splice(1,3) //include 1 and 3
console.log(n2)
console.log(num);//splice changes original array by removing spliced items


name1=['jack','jones','wills']
name2=['isow','beast','cena']

// name1.push(name2) //4th item is an array and changes orginal array
// console.log(name1)

name3=name1.concat(name2)//concat gives new array
console.log(name3);

//spread operator
//used in place of concat operator
name3=[...name1,...name2]
console.log(name3);

//flat operator 
//gives all the element inside of nested arrays of any depth

a=[1,2,[3,4,5,[4,5,6]]]
b=a.flat(Infinity)
console.log(b);


// Array.isArray , Array.from ,Array.of

console.log(Array.isArray("ran"));
console.log(Array.from("ran"));
console.log(Array.from({name:'ram'}))//interesting case , doestnow know which one to take for creating array;

x=3
y=7
z=9
arr=Array.of(x,y,x)
console.log(arr);

