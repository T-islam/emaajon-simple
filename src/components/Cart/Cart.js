import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    
  const Price = cart.reduce( (total,product) => total + product.price,0);
    let  ShipingCost = 0;
    if(Price > 15){
        ShipingCost = 4.90;
    }
    else if(Price > 35){
        ShipingCost = 0;
    }
    else if(Price > 0){
        ShipingCost = 12.99
    }
    const tex = Price/10;
    const grandTotal = (Price + ShipingCost + tex)
    const priceRound = price => { 
    const total =price.toFixed(2);
    return Number(total)    
}
    return (
        <div className="Order-Summery">
            <h3>Order Summary</h3>
            <h3>Items Orderd: {cart.length}</h3>
            <p>Shipping Const: {ShipingCost}</p>
            <p>Tax + Vat: {priceRound(tex)}</p>
            <h2>Total Price: {priceRound(grandTotal)}</h2>
        </div>
    );
};

export default Cart;