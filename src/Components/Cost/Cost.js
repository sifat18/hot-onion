import React from 'react';

const Cost = ({ items, children }) => {
    let total = 0;
    let totalQuantity = 0;
    let tax = 0
    for (const prod of items) {
        let quantity = !prod.quantity ? 1 : prod.quantity;
        total = total + prod.price * quantity;
        totalQuantity = totalQuantity + quantity;
    }
    let ship = totalQuantity > 0 ? 15 : 0;
    tax = totalQuantity > 0 ? (total + ship * .10) : 0;

    return (
        <div className='mt-3'>
            <h3 className='text-danger'>Order Summary</h3>
            <h3 className='text-danger'>items:  {totalQuantity}</h3>
            <p className='text-start'>Total: ${total.toFixed(2)}</p>
            <p className='text-start'>Shippig: ${ship.toFixed(2)}</p>
            <p className='text-start fw-normal'>Tax: $ {tax.toFixed(2)}</p>
            <p className='text-start'>grandtotal: ${(tax + total).toFixed(2)}</p>
            {children}

        </div>
    );
};

export default Cost;