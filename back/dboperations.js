const config = require('./dbconfig');
const sql = require('mssql');
const validationDates = require('./middleware/compareDates');
 
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

async function getResourceToFloor ({id}) {
    const query =  `SELECT Floor.Name, Room.Name, Room.Status, Room.Data FROM Room  INNER JOIN Floor ON Floor.floorId = Room.floorId WHERE Floor.Name = '${id} этаж' `
    return requestToBase(query);
}

async function getExpiredRooms(){
 const query = `UPDATE Room SET Status = 'free' , Data = NULL WHERE Room.Data < CURRENT_TIMESTAMP`;
 return requestToBase(query);
}

async function getResource() {
    const query = 'SELECT Floor.Name, Room.Name, Room.Status, Room.Data FROM Room INNER JOIN Floor ON Floor.floorId = Room.floorId'
    return requestToBase(query);
}

// async function getBusyPlaces(){
//    const query = `SELECT * FROM Room WHERE Status = 'busy' `
//    return requestToBase(query);
// }

async function changeResource(body){
    const {number, date} = body;
    const query = `SELECT * FROM Room WHERE Name = 'комната ${number}'`;
    return requestToBase(query);
}

async function updateResource(value, date){
    const formatedDates = validationDates.validationDates(date);
    const [hour , minutes , day , month] = formatedDates;
    const query = `UPDATE Room SET Status = 'busy', Data = '2021-${month}-${day}T${hour}:${minutes}:00' WHERE Name = '${value[0][0].Name}' SELECT * FROM Room WHERE Name = '${value[0][0].Name}'`;
    return requestToBase(query);
}
module.exports = {
    getResource: getResource,
    changeResource : changeResource,
    updateResource : updateResource,
    // getBusyPlaces : getBusyPlaces,
    getResourceToFloor : getResourceToFloor,
    getExpiredRooms : getExpiredRooms
}

