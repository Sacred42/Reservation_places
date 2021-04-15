function compareDate(arr){
    const nowDate = getNowData();
    const expiredRooms = [];
    arr[0].forEach((elem)=> {
        if(parseDateFromDB(elem.Data)  < nowDate){
          expiredRooms.push(elem);
        }
    });
    return expiredRooms;
}

function getNowData(){
    const nowDate = new Date().toISOString();
    const getMS = Date.parse(nowDate);
    console.log(getMS);
    return getMS ;
}

function parseDateFromDB(date){
    if(date === null){
        return ;
    }
    const getMS = Date.parse(date)
    console.log(getMS);
    return getMS;
}

module.exports = {
    compareDate : compareDate
}