const myAge = 20;
const anotherPersonsAge = 26;

if (myAge === anotherPersonsAge) {
    console.log('Same age');
} else if (myAge > anotherPersonsAge) {
    console.log('Older'); 
} else {
    console.log('Younger');
}

const isMarried = true;
if (isMarried) {
    console.log('is married');
} else {
    console.log('not married');
}

const gender = 'M';
if (gender === 'M') {
    console.log('masculine');
} else if (gender === 'F') {
    console.log('feminine');
} else {
    console.log('rather not say');
}

const me = {
    name: 'Phellipe Perin',
    age: 30,
    gender: 'M',
};
if (me.age >= 30) {
    console.log("I'm at least 30 years old...");
}

function isOlder(myAge, compare) {
    return myAge > compare;
}
if (!isOlder(me.age, 30)) {
    console.log("I'm younger than or 30 years old.");
}