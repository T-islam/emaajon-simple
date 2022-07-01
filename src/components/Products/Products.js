import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCartShopping } from '@fortawesome/free-solid-svg-icons';
const Products = (props) => {
   const datas = props.data;
    const {key,category,name,seller,price,img,features,stock} = datas;
   
        return (
        <div key={key} id='Product-Container'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <div>
                    <h3 className="product-title">{name}</h3>
                    <p>By: {seller}</p>
                        <strong>{category}</strong>
                </div>
                <div className='buying-info'>
                    <div className='shopping'>
                        <h2>${price}</h2>
                        <p>only {stock} left in stock - order soon</p>
                        <button onClick={() =>{props.Addproduct(props.data)}}><FontAwesomeIcon icon={faCartShopping} /> add to cart</button>
                        
                    </div>
                    <div className='Features'>
                        <h2>Features</h2>
                        {
                            features.map(details => <li>{details.description + details.value}</li>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Products;