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
            alert("Sorry you can't add more than 4 guns at a time !!!")
            return;
        }
    }
    const handleToClearCart = () => {
        const newItem = [];
        setItem(newItem)
    }
    const handleToShowRandom = (gun) => {
        const newItem = [...item, gun];
        const randomItem = Math.random(newItem) * 4;
        setItem(randomItem)
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
                    <button onClick={handleToShowRandom} style={{ height: '30px', width: '75%', background: 'lightSalmon', margin: '15px' }}>Choose 1 for me</button>
                    <button onClick={handleToClearCart} style={{ height: '30px', width: '75%', background: 'lightSeaGreen' }}>Remove All from cart</button>
                </div>
            </div>
        </div>
    );
};

export default Firearms;