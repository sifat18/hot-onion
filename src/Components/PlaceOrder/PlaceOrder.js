import React from 'react';
import img from '../../hooks/giphy.gif';
const PlaceOrder = () => {
    return (
        <div className='text-center my-5'>
            <img src={img} alt="" style={{
                height: '500px',
                width: '800px'
            }} />
        </div>
    );
};

export default PlaceOrder;