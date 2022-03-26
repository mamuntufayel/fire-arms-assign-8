import React, { useEffect, useState } from 'react';
import Gun from '../gun/Gun';
import Summary from '../summary/Summary';
import './Firearms.css'


const Firearms = () => {
    const url = "products.json"
    const [guns, setGuns] = useState([])
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setGuns(data))
    }, [])

    const handleAddToCart = (gun) => {
        const newItem = [...item, gun];
        setItem(newItem)
    }
    // console.log(item);
    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: '60px', color: 'grey' }}>Fire Arms</h1>
            <h3 style={{ textAlign: 'center' }}>Do not exceed more than four</h3>
            <div className='shop-compartment'>
                <div className="firearm-types">

                    {
                        guns.map(gun => <Gun
                            key={gun.id}
                            gun={gun}
                            handleAddToCart={handleAddToCart}
                        ></Gun>)
                    }
                </div>
                <div className="firearm-cart-summary">
                    <h2 style={{ textAlign: 'center', fontSize: '40px', color: 'grey' }}>Summary</h2>
                    <h4>Selected items:{item.length}</h4>
                    {
                        item.map(product => <Summary
                            product={product}
                        ></Summary>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Firearms;