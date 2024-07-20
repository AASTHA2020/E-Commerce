import React, { useEffect, useState } from 'react';
import { useProductData } from '../../contexts/ProductDataContext';
import { useParams } from 'react-router-dom';
import Loader from '../Loader.jsx';
import Rating from './Rating.jsx';

export default function ProductDetail() {

    // Getting product data from context.
    const { productData } = useProductData();

    // Getting product name from URL.
    const { productname } = useParams();

    // State for product whose details have to be shown.
    const [productDetails, setProductDetails] = useState(null);

    // Getting all product details from productData.
    useEffect(() => {
        if (!productData) return;

        setProductDetails(productData.filter(product => product['name'] === productname)[0]);
    }, [productData]);

    return (

        <div>
            {
                productDetails ? (
                    <div className="flex flex-col lg:flex-row lg:gap-4 p-4">
                        <div
                            className="mx-auto my-5 shadow-product-card-shadow w-fit p-10 rounded-xl overflow-hidden shrink-0 flex items-center justify-center"
                        >
                            <img src={productDetails['image']} alt={productDetails['name']} className="block m-auto max-h-60" />
                        </div>

                        <div className="px-4">
                            <h2
                                className="text-2xl lg:text-3xl font-semibold mt-8"
                            >
                                {productDetails['name']}
                            </h2>

                            <div className="mt-3">
                                <Rating rating={productDetails['rating']} />
                            </div>

                            <div className="text-2xl font-semibold mt-8 flex flex-row flex-wrap items-center justify-between gap-2">
                                <p>
                                    <span>
                                        &#8377;
                                        {
                                            productDetails['originalPrice'] - (productDetails['originalPrice'] * (productDetails['discountPercentage'] / 100))
                                        }
                                    </span>
                                    <span className="font-normal line-through ml-4 text-slate-400">
                                        &#8377;
                                        {productDetails['originalPrice']}
                                    </span>
                                </p>
                                <span className="text-green-600">
                                    {productDetails['discountPercentage']}% OFF
                                </span>
                            </div>

                            <div className="flex flex-row flex-wrap w-full items-center justify-center gap-4 text-lg mt-5 pb-2 border-b border-slate-800">

                                <button
                                    className="flex-grow bg-slate-900 text-white hover:bg-white hover:text-slate-900 duration-300 py-3 px-1 border-2 border-slate-900 uppercase"
                                >
                                    Add To Cart
                                </button>

                                <button
                                    className="flex-grow bg-white text-slate-900 hover:bg-slate-900 hover:text-white duration-300 py-3 px-1 border-2 border-slate-900 uppercase"
                                >
                                    Add to Wishlist
                                </button>
                            </div>

                            <div className="flex flex-col gap-2 text-sm sm:text-xl mt-4 mb-12">
                                <p>
                                    <span className="font-semibold">Brand: </span>
                                    {productDetails['brand']}
                                </p>

                                <p>
                                    <span className="font-semibold">Description: </span>
                                    {productDetails['description']}
                                </p>
                                
                                <p>
                                    <span className="font-semibold">Type: </span>
                                    {productDetails['category']}
                                </p>
                                
                                <p>
                                    <span className="font-semibold">Added In Year: </span>
                                    {productDetails['yearAdded']}
                                </p>
                            </div>
                        </div>
                    </div>
                ) : <Loader />
            }
        </div>
    );
};
