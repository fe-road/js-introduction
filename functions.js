function Circle(radius = 0) {
    this.radius = radius;

    this.calculateArea = function() {
        return 3.14 * (this.radius ** 2);
    }

    this.calculatePerimeter = function() {
        // TODO
    }
}

function Person(name = '', age = 0) {
    this.name = name;
    this.age = age;

    this.greet = function() {
        console.log("Hi, my name is: " + this.name);
    }
}

const myCircle = new Circle(5);
console.log(myCircle.calculateArea());

// const me = new Person('Phellipe Perin', 30);
// me.greet();
