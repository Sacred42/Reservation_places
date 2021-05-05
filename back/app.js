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
    console.log('i was here');
    dboperations.getResource()
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
    .then(result=>res.send(JSON.stringify('success')));
    
})

app.put('/changeDate', (req,res)=>{
    dboperations.changeDate(req.body)
    .then((data)=>res.send(data))
    .catch((err)=> res.status(404).send({error : err.message}));
})

app.put('/unbusy' , (req,res)=>{
    dboperations.unBusyPlace(req.body)
    .then((data)=>res.send(data));
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




app.listen(3001 , ()=> console.log('server working on 3001...'));