// Create a function once(fn) that allows fn to be called only once.
// const add = (a, b) => a + b;
// const addOnce = once(add);

// console.log(addOnce(2, 3)); // 5
// console.log(addOnce(4, 5)); // undefined

const add = (a, b) => a + b;

function once(fn) {
    let called = false;  // Flag to track if fn has been executed

    return function (...args) {
        if (!called) {
            called = true;  // Mark fn as called
            return fn(...args); // Store result
        }
        return undefined; // Ignore further calls
    };
}

const addOnce = once(add);
console.log(addOnce(3,4))
console.log(addOnce(3,4))
