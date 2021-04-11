var config = require('./dbconfig');
const sql = require('mssql');
 
async function requestToBase(query){
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query(query);
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    } 
}



async function getResource() {
    const query = 'SELECT Floor.Name, Room.Name, Room.Status, Room.Data FROM Room INNER JOIN Floor ON Floor.floorId = Room.floorId'
    return requestToBase(query);
}

async function getBusyPlaces(){
   const query = `SELECT * FROM Room WHERE Status = 'busy' `
   return requestToBase(query);
}

async function changeResource(body){
    const {number, data} = body;
    
    const query = `SELECT * FROM Room WHERE Name = 'комната ${number}'`;
    return requestToBase(query);
}

async function updateResource(value){
    const query = `UPDATE Room SET Status = 'busy' WHERE Name = '${value[0][0].Name}' SELECT * FROM Room WHERE Name = '${value[0][0].Name}'`;
    return requestToBase(query);
}
module.exports = {
    getResource: getResource,
    changeResource : changeResource,
    updateResource : updateResource,
    getBusyPlaces : getBusyPlaces
}

