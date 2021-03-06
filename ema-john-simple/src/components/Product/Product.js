import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) =>
{
    //console.log(props.product);
    //console.log(props);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>

            <div>
                <img src={img} alt=""></img>
                {/* <img src={props.product.img} alt=""></img> */}
            </div>



            <div>
                {/* <h3>This is Product</h3> */}
                <h4 className='product-name'> {props.product.name}</h4>
                <br />
                <p><small>by:{seller}</small></p>
                <p>${price} </p>
                <p><small>Only{stock}left in stock-Order soon</small></p>
                <button class='main-button' onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>
        </div>
    );
};

export default Product;