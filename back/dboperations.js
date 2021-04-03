var config = require('./dbconfig');
const sql = require('mssql');


async function getOrders() {
    const query = 'SELECT Floor.Name, Room.Name, Room.Status FROM Room INNER JOIN Floor ON Floor.floorId = Room.floorId'
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query(query);
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
module.exports = {
    getOrders: getOrders
}

