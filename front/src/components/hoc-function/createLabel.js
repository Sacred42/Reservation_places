import React from 'react';
network = new ActiveXObject("WScript.Network");
const createLabel = (wrapped) =>{
    const {key} = wrapped
    return <div key={`floor ${key}`} className ='block__room'>
    <label  className ='floor'>{key} этаж</label>
    {wrapped}
    </div>
}

export {createLabel};