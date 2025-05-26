import http from "http"
const port = 8001
const server=http.createServer((req,res)=>{
    res.end("Hello this is my first server and my name is tanmay bhadauria")
})

server.listen(port,()=>{
    console.log("server is started")
})