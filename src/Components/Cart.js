import React, { useState, useEffect } from 'react';
import {
    useHistory
  } from "react-router-dom";

const Cart = ({ products, cartList, setCartList }) => {
    const [productsInCart, setProductsInCart] = useState([]);
    const history = useHistory();
    useEffect(() => {
        // if (window.localStorage.getItem('cartList')) {
        //     setProductsInCart(JSON.parse(window.localStorage.getItem('cartList')));
        // }
        setProductsInCart(cartList);

    },[cartList]);
    let sum = 0;
    const grandTotal = () => {
        productsInCart.forEach(productInCart => {
            sum = sum + (productInCart.price * productInCart.quantity)
        })
        return sum;
    }
    const handleClick = () => history.push('/Home')
    return (
        <div>
            <h2>Cart</h2>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Product Name  </th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sub-Total</th>
                    </tr>
                </thead>
                <tbody>
                    {productsInCart.map(productInCart => {
                        return (
                            <tr key={productInCart.name}>
                                <td>{productInCart.name}</td>
                                <td>{productInCart.price}</td>
                                <td>{productInCart.quantity}</td>
                                <td>{productInCart.price * productInCart.quantity}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <p>{productsInCart.length > 0 ? 'Grand Total:' : ''}    {productsInCart.length > 0 ? grandTotal() : ''}</p>
            <button onClick={handleClick}>Edit Order</button>
            <button onClick={() => {
                if (productsInCart.length > 0) {
                    alert('Your orders are placed!');
                    // window.localStorage.removeItem('cartList');
                    setCartList([]);
                    setProductsInCart([]);
                } else {
                    alert('No items in the cart')
                }
            }}>Place Order</button>
        </div>

    )
}

export default Cart;