const EventEmitter = require('events');

const event= new EventEmitter();

event.on("hlo",()=>{
    console.log('goku no');
});

event.on('hlo',()=>{
    console.log('stop it kakarot');
});

event.on("hlo",()=>{
    console.log('ka me ha me haaaaaaaaa');
});

event.emit("hlo");
