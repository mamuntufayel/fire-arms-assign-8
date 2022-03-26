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
        if (item.length !== 4) {
            const newItem = [...item, gun];
            setItem(newItem)

        }
        else {
            return;
        }
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
                    <h4>Selected items: {item.length}</h4>
                    <h3>Selected Gun</h3>
                    {
                        item.map(product => <Summary
                            key={product.id}
                            product={product}
                        ></Summary>)
                    }
                    <button style={{ height: '30px', width: '75%', background: 'lightSalmon' }}>Choose 1 for me</button>
                </div>
            </div>
        </div>
    );
};

export default Firearms;