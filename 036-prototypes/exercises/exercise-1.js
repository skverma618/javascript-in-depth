/*
    1. Log out all the properties within the Object
       prototype. (Only it's own properties)

    2. Log out all the properties within the Array
       prototype. (Only it's own properties)

    3. Log out all the properties within the Array
       prototype's prototype.

    4. Does this make sense? Why?
*/

// 1.
console.log(Object.getOwnPropertyNames(Object.prototype))

console.log(Object.getOwnPropertyNames(Array.prototype))
// console.log(Object.getOwnPropertyNames(Array.__proto__))

console.log(Object.getOwnPropertyNames(Array.__proto__))