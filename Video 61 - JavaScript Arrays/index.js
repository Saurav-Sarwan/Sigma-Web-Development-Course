let arr = [1,2,3,4,5]

console.log(arr , typeof arr)

console.log("***********")

arr[0] = 5666
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])

console.log(arr.toString()) // gives the output of array as string
console.log(arr.join(" and "))

// ye jo shift() hota hai voh pop() ka bhai hota hai...
// ye jo unshift() hota hai voh push() ka bhai hota hai...
// 😊
console.log("***********")

let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]
console.log(a1.concat(a2,a3)) // this concat's a1,a2,a3 & returns new array

console.log("***********")

let a = [7,9,8]
console.log(a.sort()) 

console.log("***********")

let numbers = [1,2,3,4,5]
console.log(numbers.splice(1,3)) // index 1 se lekar 3 tak elements nikal do.
console.log(numbers)

let numbers1 = [1,2,3,4,5]
console.log(numbers1.splice(1,3,23,34)) // ---"---, aur oose jagha 23,34 dal do.
console.log(numbers1)

console.log("***********")

console.log(numbers1.reverse())




