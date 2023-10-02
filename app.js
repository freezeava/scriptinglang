let str="Tony Stark";

if(str[0]==='T' && str.length >3){
    console.log("Yeah! this is the good string.");

}else{
    console.log("Given string is not good string");
}


//wap

let color=prompt("Enter the color of traffic light in lower case:");

switch(color){

case "green":
    console.log("you can go now");
    break;
case "red":
    console.log("stop here");
    break;
case "yellow":
    console.log("get ready to go:");
    break;
default:
    console.log("invalid traffic color you entered");


}

