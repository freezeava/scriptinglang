function calsum(){
    console.log(33+4);
}


calsum();

//

function rollDice(){

   let dice= Math.floor(Math.random()*6)+1;
   console.log(dice);
}

rollDice();

//



function sum(a,b){
    console.log(a+b);
}


sum(5,6);


//sum of n number


function sumOfn(n){
   let sum=0;
    for(let i=1;i<=n;i++){
        sum =sum+i;
        
    }
    return sum;
}

console.log(sumOfn(5));



//scope


function outerFun(){
    let x=5;
    let y=6;
    function innerFunc(){
        console.log(x);
        console.log(y);

    }
    innerFunc();
}


outerFun();


//function Expression
const summ=function(a,b){

    return a+b;
}

let c=summ(2,5);
console.log(c);