let str="  hello  ";
let str1=str.trim();   //Trims whitespaces from both ends of string and returns a new one
console.log(str1,str);
//Strings are immutable 

//lowecase and upper case method 

let fname="Aashish";

console.log(fname.toLowerCase());
console.log(fname.toUpperCase());
//indexof method
console.log(fname.indexOf('s'));


//method chaining

let fir=" Sushmita   ";

console.log(fir.trim().toUpperCase());


//Slice Method concept

let stri="ILoveCoding";


console.log(stri.slice(5)); //Coding
console.log(stri.slice(1,5)); //Love


//replace method

console.log(stri.replace("Love","like"));

//repeat method

console.log(stri.repeat(3));


// assignment-1

let msg="  help!";

console.log(msg.trim().toUpperCase());
