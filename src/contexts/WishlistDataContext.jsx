import React, { createContext, useContext, useState } from 'react';
import { useCartData } from './CartDataContext.jsx';

// Creating context for wishlist data.
const WishlistDataContext = createContext();

// Context provider for wishlist data.
const WishlistDataProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState([]);
    const { addItemToCart } = useCartData();

    // Function to add item to wishlist
    const addItemToWishlist = (item) => {
        setWishlistItems((prevItems) => [...prevItems, item]);
    };

    // Function to remove item from wishlist
    const removeItemFromWishlist = (itemName) => {
        setWishlistItems((prevItems) => prevItems.filter(item => item.name !== itemName));
    };

    // Function to move item to cart and remove it from wishlist
    const moveToCart = (item) => {
        addItemToCart(item);
        removeItemFromWishlist(item.name);
    };

    // Check if an item is in the wishlist
    const isItemInWishlist = (itemName) => {
        return wishlistItems.some(item => item.name === itemName);
    };

    return (
        <WishlistDataContext.Provider value={{ wishlistItems, addItemToWishlist, removeItemFromWishlist, moveToCart, isItemInWishlist }}>
            {children}
        </WishlistDataContext.Provider>
    );
};

// Custom hook to use WishlistData context.
const useWishlistData = () => {
    return useContext(WishlistDataContext);
};

export { useWishlistData, WishlistDataProvider };
