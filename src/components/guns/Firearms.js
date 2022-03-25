import React, { useEffect, useState } from 'react';
import Gun from '../gun/Gun';
import './Firearms.css'

const Firearms = () => {
    const [guns, setGuns] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
            .then(res => res.json())
            .then(data => setGuns(data))
    }, [])
    return (
        <div>
            <h1>fire arms</h1>
            <h3>Do not exceed more than four</h3>
            <div className='shop-compartment'>
                <div className="firearm-types">

                    {
                        guns.map(gun => <Gun
                            key={gun.id}
                            gun={gun}
                        ></Gun>)
                    }
                </div>
                <div className="firearm-summary">
                    <h2>Summary</h2>
                </div>
            </div>
        </div>
    );
};

export default Firearms;