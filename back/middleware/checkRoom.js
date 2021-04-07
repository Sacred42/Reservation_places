function checkRoom (room){
     if(room[0].length){
        switch(room[0][0].Status){
            case 'free':
                    return room;
            case 'busy':
                   throw new Error('place is busy');
            }  
        }
        else{
                throw new Error('place is undefined');
        }
}

module.exports = {
    checkRoom : checkRoom
}