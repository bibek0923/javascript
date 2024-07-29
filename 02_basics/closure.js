// Closure

function one(){
    x=6
    function two(){
        console.log((x))
        y=7
    }
   //  console.log(y); error
  two()
}
one()


// ++++interesting concept++++++

three()
function three(){
    console.log("I an executed before the definition , still no errors");
}

// func() error
const func= function four(){
    console.log("I am stored in a variable so you have to execute after the definiton ")
}
func()