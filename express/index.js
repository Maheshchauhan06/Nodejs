const express = require('express');
const path = require('path')
const app = express();

const newpath = path.join(__dirname,'public')
 
// add html file
// app.use(express.static(newpath));

app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    const user = {
        name :'mahesh',
        sirname : 'chauhan',
        skills : ['express','html','css']
    }
    res.render('index',{user})
})

app.listen(3000);