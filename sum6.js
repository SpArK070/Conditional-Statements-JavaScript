// Description
// You are given two numbers, stored in the variable with the following names
// fuel, distance
// Find the value of required, such that
// required = fuel*distance 
// If the value of required is greater than 50, print Enough, else printGo On

//output : go on

function enoughFuelConsumption(fuel, distance) {
   
     req = fuel*distance;

    if(req > 50){
        console.log("Enough");
    }
    else {
        console.log("Go On");
    }
}

var fuel = 1;
var distance = 46;
enoughFuelConsumption(fuel, distance)