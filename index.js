const http  = require("http");

const PORT = 2000;
const hostname = "localhost"
const server = http.createServer((req,res) => {
    if(req,url === "/Home"){
        res.end("Home");
    }
    if(req,url === "/About"){
        res.end("About");
    }else{
        ("page is not found");
    }
})

server.listen(PORT,hostname,()=>{
    console.log(`server is working on http://${hostname}:${PORT}`)
})