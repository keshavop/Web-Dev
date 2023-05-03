const express = require("express")
const path = require("path")

const app = express()
const PORT = 3000;

// const staticPath = path.join(__dirname, "./public");
// app.use(express.static(staticPath));

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());

app.get("/",(req,res) =>{
    res.render("index",{
        title : "ejs",
        name:"kiki"
    });
})


// app.get("/", (req,res) =>{
//     res.send(staticPath)
// })

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});