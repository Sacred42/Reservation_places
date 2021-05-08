const express = require('express');
const app = express();
const path = require('path');
const dboperations = require('./dboperations');
const checkRoom = require('./middleware/checkRoom')
const compareDates = require('./middleware/compareDates');


app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', "content-type" , "Cache-Control" , ['*']);
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    next();
});
app.use(express.json());
app.use(express.static(path.join(__dirname , 'static')));

app.get('/' , (req,res)=>{
    dboperations.getExpiredRooms()
    .then(()=>dboperations.getResource())
    .then(result => {
        res.send(result);
     })
})

app.get('/:id' , (req , res)=>{
    const param = req.params;
    dboperations.getResourceToFloor(param)
    .then(result =>
        res.send(result))

})

app.options('/checkData' , (req,res)=>{
    console.log(new Date());
    dboperations.getExpiredRooms()
    .then(()=>res.send(JSON.stringify('success')))
    .catch((err)=> res.status(404).send({error : err.message}));
    
})

app.put('/changeDate', (req,res)=>{
    dboperations.changeDate(req.body)
    .then((data)=>res.send(data))
    .catch((err)=> res.status(404).send({error : err.message}));
})

app.put('/unbusy' , (req,res)=>{
    dboperations.unBusyPlace(req.body)
    .then((data)=>res.send(data))
    .catch((err)=> res.status(404).send({error : err.message}));
})

app.put('/changeUser', (req,res)=>{
    dboperations.changeUser(req.body)
    .then((data)=>res.send(data))
    .catch((err)=> res.status(404).send({error : err.message}));
})

app.put('/update', (req, res )=>{
 console.log(req.body);
 const {date , activeUser} = req.body;
 dboperations.changeResource(req.body)
 .then((result)=> checkRoom.checkRoom(result))
 .then((data)=> dboperations.updateResource(data , date , activeUser))
 .then((data)=>res.send(data))
 .catch((err)=> res.status(404).send({error : err.message}));
})

app.post('/auth' , (req,res)=>{
    const {name , password} = req.body;
    if(name === 'admin' && password === 'admin'){
        res.send(JSON.stringify('succes'))
    }
    res.status(400).send(JSON.stringify('wrong password/name'));
})

app.post('/createRoom', (req,res)=>{
    dboperations.createRoom(req.body)
    .then(data=>res.send(data))
 .catch((err)=> res.status(404).send({error : err.message}));
})

app.delete('/deleteRoom', (req,res)=>{
    dboperations.deleteRoom(req.body)
    .then(data=>res.send(JSON.stringify(data)))
    .catch((err)=> res.status(404).send({error : err.message}));
})




app.listen(3001 , ()=> console.log('server working on 3001...'));