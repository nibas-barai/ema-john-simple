import React, { useState } from 'react';
import fakeData from '../fakeData';
import './Shop.css';
import Product from './Product/Product';
import Cart from './Cart/Cart';
const Shop = () =>
{ //console.log(fakeData);
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);

    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) =>
    {
        // console.log('Product added, product');
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div class='product-container'>
                {/* <h2>products.length</h2> */}
                {/* <h3>This is shop</h3> */}

                {
                    products.map(pd => <Product handleAddProduct={handleAddProduct} product={pd}> </Product>)
                }

            </div>
            <div className='cart-container'>
                {/* <h2>This is cart</h2>
                // <h5> Order Summery:{cart.length}</h5> */}
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;