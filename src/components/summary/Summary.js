import React from 'react';
import './Summary.css'

const Summary = (props) => {
    // console.log(props);
    const { name, img } = props.product;
    return (
        <div className='selected-items-cart'>

            <div className='selected-gun'>
                <img src={img} alt="" />
                <h4>{name}</h4>
            </div>

        </div>
    );

};

export default Summary;