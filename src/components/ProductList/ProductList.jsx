import classes from './ProductList.module.css'
import ProductCard from "./ProductCard/ProductCard.jsx";
import {useProducts} from "../../context/ProductsContext.jsx";

const ProductList = () => {

    const {products, loading, error} = useProducts()

    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className={classes.productList}>
            <h2 className={classes.productList__title}>Desserts</h2>
            {
                loading ?
                    <p>Loading...</p>
                    :
                    <ul className={classes.productList__list}>
                        {products.map(product => (
                            <li className={classes.productList__item} key={product.id}>
                                <ProductCard product={product}/>
                            </li>
                        ))}
                    </ul>
            }

        </div>
    );
};

export default ProductList;