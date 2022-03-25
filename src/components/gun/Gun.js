import React from 'react';
import './Gun.css'

const Gun = (props) => {
    console.log(props);
    const { name, img, capacity, price, action } = props.gun
    return (
        <div className='Each-gun'>
            <img src={img} alt="" />
            <div className='gun-info'>
                <h3>gun name:{name}</h3>

            </div>
        </div>
    );
};

export default Gun;