// Description
            // You are given a number, stored in the variable with the nameN
            // PrintYes, if the number is divisible by 4, else printNo
            // Note : A number is divisible by 4, if the result of the following expression number % 4 == 0
//outpur : Yes 

function divisibleBy4(N) {
    
    if(N%4 == 0){
        console.log("true");
    }
    else{
        console.log("false");
    }
}
var N = 12;
divisibleBy4(N)