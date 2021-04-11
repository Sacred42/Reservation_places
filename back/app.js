const express = require('express');
const app = express();
const path = require('path');
const dboperations = require('./dboperations');
const checkRoom = require('./middleware/checkRoom')


app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', ['*']);
    next();
});
app.use(express.json());
app.use(express.static(path.join(__dirname , 'static')));

app.get('/' , (req,res)=>{
    dboperations.getResource()
    .then(result => {
        res.send(result);
     })
})

app.get('/checkData' , (req,res)=>{
    dboperations.getBusyPlaces()
    .then(result=>console.log(result));
})

app.put('/update', (req, res )=>{
 dboperations.changeResource(req.body)
 .then((result)=> checkRoom.checkRoom(result))
 .then((data)=> dboperations.updateResource(data))
 .then((data)=>res.send(data))
 .catch((err)=> res.status(404).send({error : err.message}));
})




app.listen(5000 , ()=> console.log('server working on 5000...'));