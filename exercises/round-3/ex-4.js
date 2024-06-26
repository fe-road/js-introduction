/*
    Write a program that prints the numbers 1 to 100.

    - For multiples of 3, print "Fizz" instead of the number.
    - For multiples of 5, print "Buzz".
    - For numbers which are multiples of both 3 and 5, print "FizzBuzz".
    - Otherwise, print the number.    
*/

for (let i = 1; i <= 100; i++) {
    let output = "";

    if (i % 3 === 0) {
        output += "Fizz";
    }
    if (i % 5 === 0) {
        output += "Buzz";
    }

    if (output) {
        console.log(output);
    } else {
        console.log(i);
    }
}