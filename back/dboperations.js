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
    const query = `UPDATE Room SET ActiveUser = NULL, Data = NULL, Status = 'free' WHERE Name = '${number}' SELECT * FROM Room WHERE Name = '${number}' `;
    return requestToBase(query);
}

async function changeDate ({date:{day , month, hour, minutes, year, room}}){
 const formatedDates = validationDates.validationDates(day , month, hour, minutes, year);
 const [ dayD, monthD, hourD, minutesD, yearD] = formatedDates;
 const query = `UPDATE Room SET Data = '20${yearD}-${monthD}-${dayD}T${hourD}:${minutesD}:00' WHERE Name = 'комната ${room}' SELECT * FROM Room WHERE Name = 'комната ${room}'`
 return requestToBase(query);
} 

async function changeUser ({date:{user, room}}){
 const query = `UPDATE Room SET ActiveUser = '${user}' WHERE Name = 'комната ${room}' SELECT * FROM Room WHERE Name = 'комната ${room}'`
 return requestToBase(query);
}

async function changeResource({date}){
    const {number} = date ;
    const query = `SELECT * FROM Room WHERE Name = 'комната ${number}'`;
    return requestToBase(query);
}

async function updateResource(value, {day , month, hour, minutes, year} , activeUser){
    const formatedDates = validationDates.validationDates(day , month, hour, minutes, year);
    const [ dayD, monthD, hourD, minutesD, yearD] = formatedDates;
    const query = `UPDATE Room SET ActiveUser = '${activeUser}', Status = 'busy', Data = '20${yearD}-${monthD}-${dayD}T${hourD}:${minutesD}:00' WHERE Name = '${value[0][0].Name}' SELECT * FROM Room WHERE Name = '${value[0][0].Name}'`;
    return requestToBase(query);
}

async function createRoom({date : {number , status, floor,  day, month, hour, minutes, year} , activeUser=NULL}){
    const user = activeUser ? `'${activeUser}'` : activeUser;
    const formatedDates = status === 'busy' ? validationDates.validationDates(day , month, hour, minutes, year) : [day , month, hour, minutes, year];
    const [ dayD, monthD, hourD, minutesD, yearD] = formatedDates;
    const dataStatus = status === 'free' ? 'NULL' : `'20${yearD}-${monthD}-${dayD}T${hourD}:${minutesD}:00'`;
    const query = `INSERT INTO Room (Name , Status , floorId , Data , ActiveUser) VALUES ( 'комната ${number}', '${status}', '${floor}',  ${dataStatus}, ${user}) SELECT * FROM Room WHERE Name = 'комната ${number}'`
    return requestToBase(query);
}

async function deleteRoom ({number}){
    console.log(number)
    const query = `DELETE FROM Room WHERE Name = 'комната ${number}'`
    requestToBase(query);
    return number;
}
module.exports = {
    getResource: getResource,
    changeResource : changeResource,
    updateResource : updateResource,
    getResourceToFloor : getResourceToFloor,
    getExpiredRooms : getExpiredRooms,
    changeDate : changeDate,
    changeUser : changeUser,
    unBusyPlace : unBusyPlace,

    deleteRoom : deleteRoom,
    createRoom : createRoom
}

