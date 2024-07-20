import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import productImg1 from '../../images/slider-images/product-img-1.jpg';
import productImg2 from '../../images/slider-images/product-img-2.jpg';
import productImg3 from '../../images/slider-images/product-img-3.jpg';

export default function ProductImageSlider() {

    // Array of objects for images in slider.
    const slides = [
        {
            image: productImg1
        },
        {
            image: productImg2
        },
        {
            image: productImg3
        }
    ];

    // State for index of current image in slider.
    const [currentIndex, setCurrentIndex] = useState(0);

    // This function sets the current index for previous image.
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    // This function sets the current index for next image.
    const nextSlide = () => {
        const isLastIndex = currentIndex === slides.length - 1;
        const newIndex = isLastIndex ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    // Interval for changing the images in slider automatically after every 4 seconds.
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);

        // Cleanup the interval on component unmount.
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="w-[100vw] h-[780px] max-h-[40vh] md:max-h-[90vh] m-auto mb-4 relative group">
            <div
                style={{backgroundImage: `url(${slides[currentIndex]['image']})`}}
                className="w-full h-full bg-center bg-cover duration-500"
            ></div>

            <button className="md:hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer" onClick={prevSlide}>
                <FontAwesomeIcon icon="fa-solid fa-angle-left" />
            </button>
            <button className="md:hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer" onClick={nextSlide}>
                <FontAwesomeIcon icon="fa-solid fa-angle-right" />
            </button>
        </div>
    );
};
