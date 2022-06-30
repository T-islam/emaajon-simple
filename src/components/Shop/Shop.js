import React, { useEffect, useState } from 'react';
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
    
    return (
        <div id='shop-Container'>
                <div className='product-container'>
                    
                    {
                        allProducts.map(product => <Products data={product}></Products>)
                    }
                </div>
                <div className='shop-cart'>
                            <h2>Add Shop Cart</h2>
                </div>
        </div>
    );
};

export default Shop;