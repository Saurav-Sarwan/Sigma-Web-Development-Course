console.log("This is strings tutorial")

let a = "Saurav"
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
// console.log(a[6])

console.log(a.length)

let real_name = "Sarwan"
let friend = "Rohan"
console.log("His real name is " + real_name + " and his friend's name is " + friend)

// Template literal -
console.log(`His real name is ${real_name} and his friend's name is ${friend}`)

let b = `This is ${real_name}`
console.log(b)

let c = "Shivam"
console.log(c.toUpperCase())
console.log(c.toLowerCase())
console.log(c.length)
console.log(c.slice(1,4))
console.log(c.slice(2))

console.log(c.replace("Sh","77"))
console.log(c.concat(a,"Aishwaria","Rahul","Priya"))

console.log(c) //string is immutable
console.log(c.indexOf("iv"))