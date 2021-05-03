import React from 'react';
const templates = (templ) => {
    console.log('from templ switxh-', templ);
    const {template} = templ;
    switch(template){
        case 'BusyPlace' : 
        return (
            <div>зонять места</div>
        );
        case 'FromRoom' : 
        return (
            <div>я из комнаты</div>
        )
        default :
         return (<div>ну туда!</div>)
    } 
}

export default templates;