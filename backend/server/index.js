const http = require("http")

const server = http.createServer((req,res)=>{

    if(req.url == "/"){
        res.end("<h1>welcome to node</h1>")
    }
    else if(req.url=="/about"){
        res.end("<h1>welcome to about page</h1>")
    }
    else{
        res.end("error 404")
    }
})

server.listen(8000,()=>{
    console.log("server is up and running");
})