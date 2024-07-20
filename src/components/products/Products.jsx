import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useProductData } from '../../contexts/ProductDataContext.jsx';
import FilterSection from './FilterSection.jsx';
import Loader from '../Loader.jsx';

export default function Product() {

    // Getting productData state from context.
    const { productData } = useProductData();

    // State for products to display.
    const [productsToDisplay, setProductsToDisplay] = useState([]);

    // State for filter criteria.
    const [filterCriteria, setFilterCriteria] = useState([
        'Wired', 'Noise Cancelling', 'Wireless', 'Speaker'
    ]);

    // State for sorting preference of products.
    const [sortPreference, setSortPreference] = useState('');

    // State for ratings preferences.
    const [ratingsPreference, setRatingsPreference] = useState(0);

    // Update productsToDisplay when productData, filterCriteria, or sortPreference changes.
    useEffect(() => {
        // Filter according to category.
        let filteredProducts = productData.filter(product => 
            filterCriteria.includes(product.category)
        );

        // Filter according to ratings.
        filteredProducts = filteredProducts.filter(product => product.rating >= ratingsPreference);

        // Sort according to discounted price.
        if (sortPreference === 'lowToHigh') {
            filteredProducts = filteredProducts.sort((a, b) => {
                const priceA = a.originalPrice
                const discountedPriceA = priceA - (priceA * (a.discountPercentage / 100))

                const priceB = b.originalPrice
                const discountedPriceB = priceB - (priceB * (b.discountPercentage / 100))

                return discountedPriceA - discountedPriceB;
            });
        } else if (sortPreference === 'highToLow') {
            filteredProducts = filteredProducts.sort((a, b) => {
                const priceA = a.originalPrice
                const discountedPriceA = priceA - (priceA * (a.discountPercentage / 100))

                const priceB = b.originalPrice
                const discountedPriceB = priceB - (priceB * (b.discountPercentage / 100))

                return discountedPriceB - discountedPriceA;
            });
        };

        setProductsToDisplay(filteredProducts);
    }, [productData, filterCriteria, sortPreference, ratingsPreference]);

    return (
        <div className="flex flex-row flex-wrap justify-start items-start relative">
            <FilterSection setFilterCriteria={setFilterCriteria} setSortPreference={setSortPreference} setRatingsPreference={setRatingsPreference} />
            <div className="flex flex-row justify-start items-center flex-wrap gap-4 mx-8 my-4 lg:ml-72 lg:mr-64">
                {
                    productsToDisplay ? (
                        productsToDisplay.map(product => (
                            <ProductCard key={product['name']} productDetails={product} />
                        ))
                    ) : <Loader />
                }
            </div>
        </div>
    );
};
