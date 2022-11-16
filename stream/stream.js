const http = require('http')
const server = http.createServer();
const fs = require('fs')

server.on('request', (req,res)=>{
    // const restream = fs.createReadStream('bio.txt')
    // restream.on('data',(cdata)=>{
    //     res.write(cdata);
    // })
    // restream.on('end',()=>{
    //     res.end();
    // })
    // restream.on('error',()=>{
    //     res.end('chal be')
    // })
    const restream = fs.createReadStream('./bio.txt')
    restream.pipe(res)
})

server.listen(9000, "127.0.0.1",()=>{
    console.log('====================================');
    console.log('nope, bro');
    console.log('====================================');
})