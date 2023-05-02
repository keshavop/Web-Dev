const fs = require("fs")

fs.writeFile("./fsAsync/readme.txt","check file kk",()=>{
    console.log("file write");
})

fs.readFile("./fsAsync/readme.txt","utf-8",(err,data)=>{
    console.log(data);
})