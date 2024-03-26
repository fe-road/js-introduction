/*
    Count and log all the prime numbers until a given number.
    The given number can't be bigger than 10000.
*/

function isPrimeNumber(number) {
    if (number % 2 === 0 && number !== 2) {
        return false;
    }

    for (let w = 3; w < number; w += 2) {
        if (number % w === 0) {
            return false;
        }
    }

    return true;
}

function countAllPrimeNumbers(until) {
    if (until > 10000) {
        return 'Number not supported';
    }

    let count = 0;
    for (let i = 1; i <= until; i++) {
        if (isPrimeNumber(i)) {
            console.log(i);
            count++;
        }
    }

    return count;
}

console.log("Count: ", countAllPrimeNumbers(100));