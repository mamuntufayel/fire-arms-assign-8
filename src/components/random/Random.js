import React from 'react';

const Random = (props) => {
    const { handleToShowRandom } = props
    return (
        <div>
            <button onClick={() => handleToShowRandom()} style={{ height: '30px', width: '75%', background: 'lightSalmon', margin: '15px' }}>Choose 1 for me</button>
        </div>
    );
};

export default Random;