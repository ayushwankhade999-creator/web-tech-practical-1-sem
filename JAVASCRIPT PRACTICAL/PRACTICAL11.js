
function arithmeticOperations(){

let a = +prompt("Enter Number 1: ");
let b = +prompt("Enter Number 2: ");

let sum = a+b;
let diff = a-b;
let prod = a*b;
let div = a/b;
let mod = a%b;

document.write("number 1: "+ a + "<br>" + "Number 2: "+b+"<br>");

document.write("Sum: "+sum+"<br>");
document.write("Difference: "+ diff +"<br>");
document.write("Product: "+ prod +"<br>");
document.write("Division: "+ div.toPrecision(3) +"<br>");
document.write("Modulus: "+ mod +"<br>");
}