const express = require('express');
const app = express();

 // linking pages
app.get('/',(req,res)=>{
    res.send(` home sweet home
     <a href="/about">go home about me</a>
    `)
} )
app.get('/about',(req,res)=>{
    res.send(`want to know about me 
     <a href="/">go home bro</a>
    `)
   
} )



app.listen(3000);