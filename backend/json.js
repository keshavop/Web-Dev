const fs = require("fs");

const bioData = {
    name: "keshav",
    age: 69,
    description: "hii"
};

// const jsonData = JSON.stringify(bioData);
// fs.writeFile("json1.json", jsonData, (err) => {
//     console.log("done");
// });

fs.readFile("json1.json","utf-8", (err,data) =>{
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
});