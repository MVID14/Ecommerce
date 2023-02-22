import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [itemAmount, setItemAmount] = useState(0);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const total = cart.reduce((acc, curr) => {
            return acc + curr.price * curr.amount;
        }, 0);
        setTotal(total);
    });

    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumalator, currentValue) => {
                return accumalator + currentValue.amount;
            }, 0);
            setItemAmount(amount);
        }
    }, [cart]);

    const addToCart = (product, id) => {
        const newItem = { ...product, amount: 1 };
        // check item co trong cart khong
        const cartItem = cart.find((item) => item.id === id);
        // neu co trong cart
        if (cartItem) {
            const newCart = [...cart].map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount + 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }
    };
    const removeCart = (id) => {
        const newCart = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(newCart);
    };

    const clearCart = () => {
        setCart([]);
    };
    const increaseAmount = (id) => {
        const cartItem = cart.find((item) => item.id === id);
        addToCart(cartItem, id);
    };

    const decreaseAmount = (id) => {
        const cartItem = cart.find((item) => {
            return item.id === id;
        });
        if (cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount - 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        }
        if (cartItem.amount < 2) {
            removeCart(id);
        }
    };
    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeCart,
                clearCart,
                increaseAmount,
                decreaseAmount,
                itemAmount,
                setItemAmount,
                total,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
