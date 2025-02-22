/*
    1. Add a new function called "boop" to the prototype
       of String. This function should simply log out the
       String "Boop!".

    2. Create a new String with the value "meow" and
       assign it to a variable called "cat".

    3. Call the "boop" method on "cat" to make sure it
       works correctly.
*/


// SOLUTION 1
String.prototype.boop = () => {
   console.log("Boop!");
}


// SOLUTION 2
const str1 = "meow";
const cat = str1;

// SOLUTION 2
cat.boop();
