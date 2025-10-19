import React from 'react';
import classes from './ProductList.module.css'
import ProductCard from "./ProductCard/ProductCard.jsx";

const ProductList = ({products}) => {
    return (
        <div className={classes.productList}>
            <h2 className={classes.productList__title}>Desserts</h2>
            <ul className={classes.productList__list}>
                {products.map(product => (
                    <li className={classes.productList__item} key={product.id}>
                        <ProductCard product={product}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;