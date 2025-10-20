import {createContext, useContext, useState, useEffect} from "react";

const CartContext = createContext(null);

export function CartProvider({children}) {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);
        const price = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

        setTotalQuantity(quantity);
        setTotalPrice(price);

        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (!existingItem) return prevCart;

            if (existingItem.quantity > 1) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            } else {
                return prevCart.filter(item => item.id !== product.id);
            }
        });
    };

    const getProductQuantity = (productId) => {
        const item = cart.find(cartItem => cartItem.id === productId);
        return item ? item.quantity : 0;
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            totalQuantity,
            getProductQuantity,
            totalPrice
        }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
