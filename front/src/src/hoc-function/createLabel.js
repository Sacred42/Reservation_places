import React from 'react';

const createLabel = (wrapped) =>{
    const {key} = wrapped
    return <div className ='block__room'>
    <label className ='floor'>{key} этаж</label>
    {wrapped}
    </div>
}

export {createLabel};