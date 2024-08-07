a=true
if(a == true){
    console.log("hello");
    
}
if(a){
    console.log("hii");
    
}

a=!a
if(a==false){
    console.log("bye")
}
//< > <= >= == !=  ===(checks type too)  !==

if(2=='2'){
    console.log("go bro"); // go bro is printed
    
}
if(2==='2'){
    console.log("dont go bro"); // dont go bro is not printed
    
}
if(2!=='2'){
    console.log("dont go bro"); // dont go bro is printed
    
}


if(true) console.log("hellloo"), console.log(2+500); //bad practice
;
a=50
if(a<30){
    console.log(" less than 30")
    
}
else if(a<50){
    console.log("less than 50")
    
}
else{
    console.log("invalid")
}
