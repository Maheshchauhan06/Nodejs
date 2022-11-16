const http = require('http')
const  fs = require('fs')

const server= http.createServer((req, res)=>{
   
    if (req.url=='/') {
        res.end('home page')
    }else {
      const data = fs.readFileSync('../api/userapi.json','utf-8')
       const data1 = JSON.parse(data)
       res.writeHead(200,{'content-type':'application/json'})
       res.end(data1[2].name)
    }
})

server.listen(9000, "127.0.0.1", ()=>{
    console.log('yes its working');
})