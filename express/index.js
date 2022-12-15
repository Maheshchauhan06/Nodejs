const express = require('express');
const path = require('path')
const app = express();


const newpath = path.join(__dirname, "getinghtml");
app.use(express.static(newpath))

app.get('/',(req,res)=>{
    res.send('hlo')
})

app.listen(3000);