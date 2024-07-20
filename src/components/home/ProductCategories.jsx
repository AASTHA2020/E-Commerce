import React from 'react';
import ProductCategoryCard from './ProductCategoryCard';
import wiredImg from '../../images/product-category-images/wired-ear-buds.jpg';
import wirelessImg from '../../images/product-category-images/wireless-ear-buds.png';
import noiseCancellingImg from '../../images/product-category-images/headphone.jpg';
import speakerImg from '../../images/product-category-images/speaker.jpg';

export default function ProductCategories() {

    const productCategories = [
        {
            name: 'Wired',
            image: wiredImg
        },
        {
            name: 'Wireless',
            image: wirelessImg
        },
        {
            name: 'Noise Cancelling',
            image: noiseCancellingImg
        },
        {
            name: 'Speaker',
            image: speakerImg
        }
    ];

    return (
        <div className="my-14 text-center">
            <h2 className="uppercase font-extrabold text-3xl sm:text-4xl tracking-tighter">
                Product Categories
            </h2>
            <div className="flex flex-row flex-wrap items-center justify-start gap-8 my-14">
                {
                    productCategories.map(category => (
                        <ProductCategoryCard key={category['name']} productImg={category['image']} productName={category['name']} />
                    ))
                }
            </div>
        </div>
    );
};
