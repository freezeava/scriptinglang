let students=["aman","ankit","aashish","shweta","sachin"];


for(let i=0;i<students.length;i++){
console.log(students[i]);
}
students[0]="abhi";



//array methods -> push,pop,shift ,unshift

let color=["red","green","yellow","pink","blue"];

color.push("yellowgreen","grey");
color.pop("grey");

color.unshift("purple","dark");
color.shift("purple");

let start=["january","july","march","august"];
console.log(start);

let final=start.slice(2,4);

final.unshift("july","june");
console.log(final);


//indexof and includes

console.log(start.indexOf("march"));
console.log(start.includes("green"));

//conact & reverse
let newarry=start.concat(final);
start.reverse();
start.sort();



