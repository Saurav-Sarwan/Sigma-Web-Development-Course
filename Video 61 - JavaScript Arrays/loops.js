let a = [1,45,34,67,5,6]

for(let i=0; i<a.length; i++){
    const element = a[i]
    console.log(element)
}

console.log("***********")

a.forEach((value, index, arr) =>{
    console.log(value,index,arr)
})

console.log("***********")

let obj = {
    a: 1,
    b: 2,
    c: 3
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element)
}

console.log("***********")

for(const value of a){
    console.log(value)
}