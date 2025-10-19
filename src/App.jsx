import './styles/App.css'
import ProductList from "./components/ProductList/ProductList.jsx";
import ProductCart from "./components/ProductCart/ProductCart.jsx";
import data from './data.json'
import {useState} from "react";


function App() {

    const [products, setProducts] = useState(data)

    return (
        <main>
            <ProductList products={products}/>
            <ProductCart/>
        </main>
    )
}

export default App
