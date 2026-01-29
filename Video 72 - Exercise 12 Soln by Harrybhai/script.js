console.log("Script.js Initializing")

let boxes = document.getElementsByClassName("box")
console.log(boxes)

// to get random no. do ->
// a - r*(b - a) 
// gives random no. btw a to b

function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()*225);
    let val2 = Math.ceil(0 + Math.random()*225);
    let val3 = Math.ceil(0 + Math.random()*225);
    return `rgb(${val1},${val2},${val3})`
}

Array.from(boxes).forEach( e =>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})