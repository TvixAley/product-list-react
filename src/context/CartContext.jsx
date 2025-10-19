import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [cart, setCart] = useState([
        {
            "id": 0,
            "name": "Waffle with Berries",
            "price": 6.50,
            "quantity": 3,
        },
    ]);

    const addToCart = (product) => setCart([...cart, product]);

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
