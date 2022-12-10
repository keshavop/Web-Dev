// arrow function
const add = (x, y) => {
    return x + y;
}

const square = (x) => {
    return x * x;
}

const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1
}

console.log(add(3, 6));
console.log(square(6));
console.log(rollDice());


//arrow function inplict return 
const add1 = (a, b) => a + b;

const rollDice1 = () => (
    Math.floor(Math.random() * 6) + 1
)

console.log(add1(3, 6));
console.log(rollDice1());