const a = null;

if (40 > 20 && a) {
    console.log('true');
}

// false
// 0
// "", ''
// null
// undefined
// NaN

const myObj = {};

if (myObj) {
    console.log('{} is truthy!');
}