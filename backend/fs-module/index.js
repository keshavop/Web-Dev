const fs = require("fs")

// fs.writeFileSync("fs-module/read.txt","welcome kiki")

// fs.appendFileSync("fs-module/read.txt","checking append")

// const read_data = fs.readFileSync("fs-module/read.txt");
// data = read_data.toString();

// console.log(data);

// fs.renameSync("fs-module/read.txt","fs-module/myRead.txt")

const data = fs.readFileSync("fs-module/myRead.txt","utf-8")
console.log(data);