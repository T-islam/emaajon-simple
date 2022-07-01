import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './shop.css'

const Shop = () => {
  const[products,setProduct]  =useState([])
    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(response => response.json())
        .then(data => setProduct(data))
    },[])
    let allProducts =products.slice(0,10);
      const [cart,setCart] =  useState([])
    const addProduct = (product) =>{
        const newCart = [...cart , product]
        setCart(newCart)
    }
    return (
        <div id='shop-Container'>
                <div className='product-container'>
                    
                    {
                        allProducts.map(product => <Products Addproduct={addProduct} data={product}></Products>)
                    }
                </div>
                <div className='shop-cart'>
                           <Cart cart={cart}></Cart>
                </div>
        </div>
    );
};

export default Shop;