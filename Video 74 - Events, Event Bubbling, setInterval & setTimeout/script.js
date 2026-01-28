let button1 = document.getElementById("btn")

button1.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yay you were clicked, Enjoy your click!</b>"
})

button1.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by Right click Please")
})

document.body.addEventListener("keydown", (e)=>{
    console.log(e)
})