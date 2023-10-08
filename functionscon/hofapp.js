//Hof eg:1

function multiGreet(func,n){
    for(let i=1;i<=n;i++){
        func();
    }
}

let greet =function(){
    console.log("Namaste India");
}

multiGreet(greet,5);

//function return HOF


// let odd=function(n){
//     if(!(n%2==0)){
//         console.log("Odd number");
//     }
// }

// let even=function(n){
//     if(n%2==0){
//         console.log("Even Number");
//     }
// }




function oddEvenFactory(request){

    if(request=="odd"){

        let odd=function(n){
            if(!(n%2==0)){
                console.log("Odd number");
            }
        }
        return odd;

    }else if(request=="even"){
        let even=function(n){
            if(n%2==0){
                console.log("Even Number");
            }
        }
        return even;

    }else{
        console.log("wrong request");
    }
}

let request="odd";

let result=oddEvenFactory(request);
console.log(result);

console.log(result(3));

//methods concept


let calculator={
     num:55,

    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },

    mul: function(a,b){
        return a*b;
    },
    mod:function(a,b){
           return a%b;
    },

    rem(a,b){
        return a/b;
    }


};



console.log(calculator.mod(10,4));