const express = require('express');
const app = express();
const path = require('path');
// var Db  = require('./dboperations');
// var Order = require('./order');
const dboperations = require('./dboperations');


app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', ['*']);
    next();
});
app.use(express.static(path.join(__dirname , 'static')));
app.get('/' , (req,res)=>{
    dboperations.getOrders().then(result => {
        res.send(result);
     })
})



app.listen(5000 , ()=> console.log('server working on 5000...'));