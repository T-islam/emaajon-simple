import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../Products/Products';
import fakeData from './../../fakeData/products.JSON'


const ProductDetail = () => {
    const {productKey} = useParams()
    const [productData,setProductData] =useState([])
    useEffect(()=>{
        fetch(fakeData)
        .then(res => res.json())
        .then(data => setProductData(data))
        .catch(error => console.log(error))
    },[])
    
    
    const Product = productData.find(pd => (pd.key) === productKey);
       
    //  console.log(Product)
    
    return (
        <div>
            <h2>Product Details</h2>
            
            <Products addToCart={false} Product={Product}></Products>
        </div>
    );
};

export default ProductDetail;