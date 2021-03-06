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

function checkPresentData (date){
    const[day, month, hour, minutes, year] = date;
    const newMonth = parseInt(month) - 1;
    const newDate = new Date(`20${year}`, newMonth, day , hour , minutes);
    const dateNow = new Date();
    if(newDate < dateNow){
        throw new Error('date from past is prevent!');
    }
    return date;
}

function parseDateFromDB(date){
    if(date === null){
        return ;
    }
    const getMS = Date.parse(date)
    console.log(getMS);
    return getMS;
}

function validationDates(){
    const formated = createFormatPlusZero([...arguments]);
    const [day, month, hour, minutes, year] = formated;
    if( moment(`${month}/${day}/20${year} ${hour}:${minutes}`, 'MM/DD/YYYY hh:mm').isValid()){
      return checkPresentData(formated);
    }
    else{
     throw new Error('bad format date!')
    }  
}

function createFormatPlusZero(arr){
    console.log('that arr-', arr)
    
    const formatedArr = arr.map((elem)=>{
        if(elem.length < 2 ){
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