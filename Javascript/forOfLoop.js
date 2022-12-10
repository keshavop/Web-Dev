// array
const cars = [
    "Saab",
    "Volvo",
    "BMW"
];

// for of loop
for(let ele of cars){
    console.log(ele);
}

// 2d array
let x = [
    ['Jack', 'sara'],
    ['Sara', 'kick', 'nightfly'],
    ['Peter', 'pop', 'push', 'ironheart']
]

// acessing 2d array
for(ele of x){
    for(rows of ele){
        console.log(rows);
    }
}

// string
for(let char of "keshavOP"){
    console.log(char);
}