for(let i=0;i<100;i++){
    console.log("Hello JavaScript!");
}

//odd and Even Wap

let num=5;

if(!(num%2==0)){
   console.log("ODD num: ",num);
}else{
    console.log("EVEN no: ",num)
}

//range wise 


for(let i=1;i<=15;i++){

    if(!(i%2==0)){
        console.log("ODD num: ",i);
     }else{
         console.log("EVEN no: ",i)
     }


}

//table of any number


let n=5;

for(let i =1 ;i<=10;i++){
    console.log(`table of ${n}: ${n*i}`);
}


//nested loop


for(let i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        console.log(j);
    }
}


//while loop
let n1=1;
while(n1<=5){
    console.log(n1);
    n1++;
}

//do-while loop

let n2=1;

do{
    console.log(n2);
    n2++;
}while(n2<=10);



for(let i=1;i<=10;i++){
    if(i==7){
        break;
    }
    console.log(i);
}


//loops with arrays

let students=["aman","ankit","aashish","shweta","sachin"];


for(let i=0;i<students.length;i++){
console.log(students[i]);
}



// loops with Nested Array

let upper=[["aman","ankit","aashish","shweta","sachin"],["bmw","toyota","suzuki","tata","yamaha","volks"]];


for(let i=0;i<upper.length;i++){
    for(let j=0;j<upper[i].length;j++){
          console.log(upper[i][j]);
          
    }
}

let mens=["aman","ankit","aashish","shweta","sachin"];

for (men of mens){
    console.log(men,"for of loop");
}

for(up of upper){
    for(down of up){
        console.log(down)
    }
}