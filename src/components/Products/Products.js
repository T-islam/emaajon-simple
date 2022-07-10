import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Products = (props) => {
   
   const Product =props.Product;
//    console.log(Product)
    const {category,name,seller,price,img,features,stock,key} = Product || {};
   
        return (
        <div id='Product-Container'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <div>
                    <h3 className="product-title"> <Link to={'/product/'+key}> {name}</Link></h3>
                    
                        <strong>{category}</strong>
                        <p>By: {seller}</p>
                </div>
                <div className='buying-info'>
                    <div className='shopping'>
                        <h2>${price}</h2>
                        <p>only {stock} left in stock - order soon</p>
                           {props.addToCart && <button onClick={() =>{props.Addproduct(props.Product)}}><FontAwesomeIcon icon={faCartShopping} /> add to cart</button>}
                        
                    </div>
                    <div className='Features'>
                        <h2>Features</h2>
                        
                        {
                         features && features.map(details => <li key={details.value.toString()}> {details.description + details.value}</li>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Products;