const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for each loop
nums.forEach(element => {
    console.log(element);
});

nums.forEach(function (ele) {
    if (ele % 2 === 0) {
        console.log(ele);
    }
}
)