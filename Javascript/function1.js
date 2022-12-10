// function advanced concepts

// defining methods
const math = {
    add: function (a, b) {
        return a + b;
    },
    multiply: function (a, b) {
        return a * b;
    }
}

console.log(math.add(2, 3));
console.log(math.multiply(2, 3));


// method declaration shorthand
const math1 = {
    add(a, b) {
        return a + b;
    },
    multiply(a, b) {
        return a * b;
    }
}

console.log(math1.add(2, 3));
console.log(math1.multiply(2, 3));


// this keyword
const Person={
    firstName:'Keshav',
    lastName:'Kumar',
    name(){
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(Person.name());