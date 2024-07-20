import React, { createContext, useContext } from 'react';

// Creating context for product data.
const ProductData = createContext();

// Context provider for product data.
const ProductDataProvider = ({ children, values }) => {

    return (
        <ProductData.Provider value={values}>
            {children}
        </ProductData.Provider>
    );
};

// Custom hook to use ProductData context.
const useProductData = () => {
    return useContext(ProductData);
};

export { useProductData, ProductDataProvider };
