import React, {useEffect, useState} from 'react';
import classes from './ProductList.module.css'
import ProductCard from "./ProductCard/ProductCard.jsx";

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                console.error('Product loading error', err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []); // пустой массив => выполнится один раз при монтировании компонента

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

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