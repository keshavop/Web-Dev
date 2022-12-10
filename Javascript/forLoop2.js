// js array
const cars = [
    "Saab",
    "Volvo",
    "BMW"
];

// print array
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// nesting loop
for (let i = 1; i <= 5; i++) {
    console.log(`i is: ${i}`)

    for (let j = 1; j <= 3; j++) {
        console.log("  " + j + " is : " + j);
    }
}

// 2d array
let x = [
    ['Jack', 'sara'],
    ['Sara', 'kick', 'nightfly'],
    ['Peter', 'pop', 'push', 'ironheart']
]

// acessing 2d array
for (let i = 0; i < x.length; i++) {
    const row = x[i];
    console.log("Row #" + (i+1));
    for (let j = i; j < row.length; j++) {
        console.log(row[j]);
    }
}