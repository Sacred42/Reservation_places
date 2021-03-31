const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname , 'static')));


app.get('/kek' , (req,res)=>{
    res.sendFile(__dirname + '/views' +'/test.html');
})
app.get('/' , (req,res)=>{
    res.sendFile(__dirname + '/views' + '/index.html');
})



app.listen(3000 , ()=> console.log('server working on 3000...'));