let arr = [1,13,25,7,21,5]

let newArr = []
for (let i = 0; i<arr.length; i++){
    const ele = arr[i]
    // newArr[i] = ele**2
    newArr.push(ele**2)
}
console.log(newArr)

console.log("***********")

let newArr1 = arr.map((e)=>{
    return e**2
})
console.log(newArr1)

console.log("***********")


// i didn't understand filter function.

// ----"---- reduce function

console.log(Array.from("Saurav")) // converts string to array.