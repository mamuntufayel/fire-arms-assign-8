import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Gun.css'

const Gun = (props) => {
    // console.log(props);
    const { handleAddToCart } = props;
    const { name, img, price, id } = props.gun;


    return (
        <div className='Each-gun'>
            <img src={img} alt="" />
            <div className='gun-info'>
                <h3>Product Id:{id}</h3>
                <h3>gun name:{name}</h3>
                <h4>Price: ${price}</h4>
            </div>
            <button onClick={() => handleAddToCart(props.gun)} className='btn-info'>
                <p>Add To Cart
                    <span>  <FontAwesomeIcon className='icon' icon={faShoppingCart} ></FontAwesomeIcon> </span>
                </p>
            </button>
        </div>
    );
};

export default Gun;