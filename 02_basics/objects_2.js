 //singleton object

 const tinderUser= new Object
 console.log(tinderUser);
 tinderUser.id="1234abv"
 tinderUser.name='hitesh'
 console.log(tinderUser);


 const one={ 
    '1':'a',
    '2':"b"
 }
 const two={ 
    '3':'a',
    '4':"b"
 }
 const obj3= {...one,...two}
 console.log(obj3);
 //another way
 const obj4=  Object.assign({},one,two)
 console.log(obj4);

 console.log(Object.keys(obj4));
 console.log(Object.values(obj4));
 console.log(Object.entries(obj4));
 console.log(obj4.hasOwnProperty('1'))

 //destructuring

 course={
   name:"django",
   price:555,
   instructor_name:"Jack"
 }

 console.log(course.name);
 const {instructor_name:instructor}=course
 //console.log(instructor_name);
 console.log(instructor);