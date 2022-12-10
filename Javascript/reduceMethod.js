const prices = [1.99, 30.69, 87.5, 78.9, 36.8, 69.88]

let total =0;
for(let price of prices){
    total+=price
}

console.log(total);


// reduce method
const total1 = prices.reduce((total1, price1) =>{
    return total1 + price1
})

console.log(total1);


// reducer to calculate min price
const minPrice = prices.reduce((min, price) =>{
    if(price < min){
        return price;
    }
    return min;
})

console.log(minPrice);