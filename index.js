//Server 

const http = require("http")

const httpServer = http.createServer((req,res)=>{
    // every incomming data from header, cookie, body, query, params, file or files is collected/stored by req
    // manipulate the request
    // respond to rhe client
    const url = req.url
    const method = req.method
    console.log({url,method})

    if (url==="/" && method ==="GET"){
        console.log(res.end("Home Page"))

    }else if(url === "/about-us" && method ==="GET"){
        console.log(res.end("About-us"))
    }else {
        console.log(res.end("Error Page................"))
    }
})


const HOST = "localhost"       // Url => service, hostname or url , localhost= 127.0.0.1 ,  ::1
const PORT = 9005     // 0-2^16-1 ~~ 65535

// run 

httpServer.listen(PORT,HOST,(err)=>{
    if(!err){
        console.log("Server is running on PORT: ", PORT)
        console.log("Press CTRL + C to disconnect server....")
    }
})