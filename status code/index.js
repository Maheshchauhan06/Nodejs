const express = require('express');

const app = express();

// sending html tag

app.get('/bro',(req,res)=>{
    console.log(req.body);
    res.send(`
        <html>
        <head>
        <body>
            <h1>hlo bro you were right</h1>
            <form  action="/submit" method="POST" >
            <input type="text" >
            <button>submit</button></form>
        </body>
        </head>
        </html>`
    )
})
 
 // url button to send data
app.post('/submit',(req,res)=>{
    res.send(`
    <html>
    <head>
    <body>
        <h1 style={{color="red"}} > well done data has been send to backend </h1>
    </body>
    </head>
    </html>
    `)
})

app.listen(800,()=>{
    console.log('hlo 800');
})

