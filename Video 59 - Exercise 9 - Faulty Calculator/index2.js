
// same question's answer with if-else ladder

alert("Welcome to faulty calculator!")
let random = Math.random()
console.log(random)

let a = Number(prompt("Enter 1st value"))
let b = Number(prompt("Enter 2nd value"))
let c = prompt("Enter operation type")

if(random<=0.1){
    if( c === "+") c = "-";
    else if( c === "-") c = "/";
    else if( c === "*") c = "+";
    else if( c === "/") c = "**";
}

let result;

if (c === "+") result = a+b;
else if(c === "-") result = a-b;
else if(c === "*") result = a*b;
else if(c === "/") result = a/b;
else if(c === "**") result = a**b;

alert(`Result: ${result}`) //Very Important
