import React from 'react';

const Summary = (props) => {
    console.log(props);
    const { name, img } = props.product;
    return (
        <div className='selected-item'>
            <img src={img} alt="" />
            <h4>Selected Name:{name}</h4>

        </div>
    );
};

export default Summary;