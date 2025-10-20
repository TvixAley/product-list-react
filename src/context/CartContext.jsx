import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [cart, setCart] = useState([
        { id: 0, name: "Waffle with Berries", price: 6.50, quantity: 3 },
        { id: 1, name: "Ice Cream", price: 7.00, quantity: 5 },
    ]);

    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);
        const price = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

        setTotalQuantity(quantity);
        setTotalPrice(price);
    }, [cart]);

    const addToCart = (product) => setCart([...cart, product]);

    const removeFromCart = (product) => {
        setCart(cart.filter(cartItem => cartItem.id !== product.id))
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalQuantity, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
