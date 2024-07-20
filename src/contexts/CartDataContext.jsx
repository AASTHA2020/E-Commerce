import React, { createContext, useContext, useState } from 'react';

// Creating context for cart data.
const CartDataContext = createContext();

// Context provider for cart data.
const CartDataProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Function to add item to cart
    const addItemToCart = (item) => {
        setCartItems((prevItems) => {
            const itemIndex = prevItems.findIndex(cartItem => cartItem.name === item.name);
            if (itemIndex !== -1) {
                // Item already in cart, increment the count
                const updatedItems = [...prevItems];
                updatedItems[itemIndex].count += 1;
                return updatedItems;
            } else {
                // Item not in cart, add it with count 1
                return [...prevItems, { ...item, count: 1 }];
            }
        });
    };

    // Function to remove item from cart
    const removeItemFromCart = (itemName) => {
        setCartItems((prevItems) => prevItems.filter(item => item.name !== itemName));
    };

    // Function to increment item count
    const incrementItemCount = (itemName) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.map(item => {
                if (item.name === itemName) {
                    return { ...item, count: item.count + 1 };
                }
                return item;
            });
            return updatedItems;
        });
    };

    // Function to decrement item count
    const decrementItemCount = (itemName) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.map(item => {
                if (item.name === itemName && item.count >= 1) {
                    return { ...item, count: item.count - 1 };
                }
                return item;
            }).filter(item => item.count > 0);
            return updatedItems;
        });
    };

    // Check if an item is in the cart
    const isItemInCart = (itemName) => {
        return cartItems.some(item => item.name === itemName);
    };

    return (
        <CartDataContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, incrementItemCount, decrementItemCount, isItemInCart }}>
            {children}
        </CartDataContext.Provider>
    );
};

// Custom hook to use CartData context.
const useCartData = () => {
    return useContext(CartDataContext);
};

export { useCartData, CartDataProvider };
