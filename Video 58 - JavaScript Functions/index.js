
function nice(name){
console.log("Hey " + name + " you are so nice")
console.log("Hey " + name + " you are good")
console.log("Hey " + name + " your tshirt is nice")
console.log("Hey " + name + " your course is good too!")
}

// nice("shivam")

function sum(a,b) {
    // console.log(a + b)
    return a + b;
}

result = sum(3,5)

console.log("The sum of these numbers is ", result)


//these function can be used as variable in another function
const func1 = (x) =>{
    console.log("I am an arrow function ", x)
}

func1(45)
func1(89)