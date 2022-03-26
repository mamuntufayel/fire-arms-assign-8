import React, { useEffect, useState } from 'react';
import Gun from '../gun/Gun';
import Random from '../random/Random';
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

    const handleToShowRandom = () => {

        const newItem = [...item];
        console.log(newItem);
        const randomItem = [Math.floor(Math.random() * newItem.length)]
        console.log(randomItem)
        setItem(randomItem)
    }



    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: '60px', color: 'grey' }}>Fire Arms</h1>
            <h3 style={{ textAlign: 'center' }}>Do not exceed more than four guns</h3>
            <div className='shop-compartment'>
                <div className="firearm-types">

                    {
                        guns.map(gun => <Gun
                            key={gun.id}
                            gun={gun}
                            handleAddToCart={handleAddToCart}
                            handleToShowRandom={handleToShowRandom}

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
                    {
                        <Random
                            key={item.id}
                            handleToShowRandom={handleToShowRandom}
                        ></Random>
                    }
                    <button onClick={handleToClearCart} style={{ height: '30px', width: '75%', background: 'lightSeaGreen' }}>Remove All from cart</button>
                </div>
            </div>
        </div>
    );
};

export default Firearms;