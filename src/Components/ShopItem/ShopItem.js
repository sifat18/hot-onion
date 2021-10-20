import React from 'react';

const ShopItem = ({ items }) => {
    const { img, name, quantity } = items;
    return (

        <div className="d-flex justify-content-between  bg-list text-center my-2 " >
            <p><img className='' src={img} alt="100x100" width='120' height='150' /></p>
            <p className='text-white mt-5 mx-2'>{name}</p>
            <p className='text-white mt-5 pt-2 mx-3'>{quantity}</p>
        </div>

    );
};

export default ShopItem;