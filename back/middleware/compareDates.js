const moment = require('moment');
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

function validationDates(date){
    const formated = createFormatPlusZero(date);
    const [hour , minutes , day , month] = formated;
    if( moment(`${month}/${day}/2021 ${hour}:${minutes}`, 'MM/DD/YYYY hh:mm').isValid()){
      return formated;
    }
    else{
     throw new Error('bad format data!')
    }  
}

function createFormatPlusZero(arr){
    const formatedArr = arr.map((elem)=>{
        if(elem.length < 2){
            return '0' + elem;
        }
        return elem;
    })
    return formatedArr;
}

module.exports = {
    compareDate : compareDate,
        validationDates : validationDates
}