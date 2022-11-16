 const fs = require('fs')
 const hlo = {
    firsname: 'mahesh',
    lastname : ' chauhan',
 }

 const data = JSON.stringify(hlo)
 
 fs.writeFileSync('bio.txt',data)
  const newdata = fs.readFileSync('bio.txt')

fs.readFile('bio.txt','utf-8',(err,data)=>{
    const original  = JSON.parse(data)
    console.log(original);
})
