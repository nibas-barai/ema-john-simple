import React from 'react';

const Cart = (props) =>
{
    const cart = props.cart;
    // console.log(cart);
    // const totalPrice = cart.reduce((total, prd)=> total + prd.price, 0);//shortcut
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = product.price;
    }
    let shipping = 0;
    if (totalPrice > 35) {
        shipping = 0;
    }
    else if (totalPrice > 15) {
        shipping = 4.99;
    }
    else if(totalPrice<0){
        shipping = 12.99;
    }
    const tax = (totalPrice / 10).toFixed(2);
    const grandtotal = (totalPrice + shipping + Number(tax)).toFixed(2);
    
    const fomatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered:{cart.length}</p>
            <p>Product Price:{fomatNumber(totalPrice)}</p>
            <p><small>Shipping </small>Cost:{shipping}</p>
            <p><small>Tax & Vat:{tax}</small></p>
            {/* <p>Total Price:{totalPrice + shipping + tax}</p> */}
            <p>Total Price:{grandtotal}</p>
        </div>
    );
};

export default Cart;