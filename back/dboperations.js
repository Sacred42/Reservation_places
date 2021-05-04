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
    const query =  `SELECT Floor.Name, Room.Name, Room.Status, Room.Data , Room.ActiveUser FROM Room  INNER JOIN Floor ON Floor.floorId = Room.floorId WHERE Floor.Name = '${id} этаж' `
    return requestToBase(query);
}

async function getExpiredRooms(){
 const query = `UPDATE Room SET ActiveUser = NULL, Status = 'free' , Data = NULL WHERE Room.Data < CURRENT_TIMESTAMP`;
 return requestToBase(query);
}

async function getResource() {
    const query = 'SELECT Floor.Name, Room.Name, Room.Status, Room.Data, Room.ActiveUser  FROM Room INNER JOIN Floor ON Floor.floorId = Room.floorId'
    return requestToBase(query);
}

async function unBusyPlace(room)
{
    const{number} = room;
    console.log(number);
    const query = `UPDATE Room SET ActiveUser = NULL, Data = NULL, Status = 'free' WHERE Name = '${number}' SELECT * FROM Room WHERE Name = '${number}' `;
    return requestToBase(query);
}

// async function getBusyPlaces(){
//    const query = `SELECT * FROM Room WHERE Status = 'busy' `
//    return requestToBase(query);
// }

async function changeResource({date}){
    const {number} = date ;
    const query = `SELECT * FROM Room WHERE Name = 'комната ${number}'`;
    return requestToBase(query);
}

async function updateResource(value, {day , month, hour, minutes, year} , activeUser){
    const formatedDates = validationDates.validationDates(day , month, hour, minutes, year);
    console.log(formatedDates);
    const [ dayD, monthD, hourD, minutesD, yearD] = formatedDates;
    const query = `UPDATE Room SET ActiveUser = '${activeUser}', Status = 'busy', Data = '20${yearD}-${monthD}-${dayD}T${hourD}:${minutesD}:00' WHERE Name = '${value[0][0].Name}' SELECT * FROM Room WHERE Name = '${value[0][0].Name}'`;
    return requestToBase(query);
}
module.exports = {
    getResource: getResource,
    changeResource : changeResource,
    updateResource : updateResource,
    getResourceToFloor : getResourceToFloor,
    getExpiredRooms : getExpiredRooms,

    unBusyPlace : unBusyPlace
}

