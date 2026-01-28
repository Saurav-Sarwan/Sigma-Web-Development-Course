console.log("Hello World")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)
// boxes[2].style.backgroundColor = "red"


// document.getElementById("redbox").style.backgroundColor = "red"


// document.querySelector(".box").style.backgroundColor = "green" //only adds to 1st element with class = "box"

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "yellow"
})

// for (let i = 0; i < document.querySelectorAll(".box").length; i++) {
//     const element = document.querySelectorAll(".box")[i];
//     element.style.backgroundColor = "yellowgreen"    
// }

