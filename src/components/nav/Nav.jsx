import React, { useEffect, useState } from 'react';
import appLogo from '../../images/app-logo.jpg';
import { Link } from 'react-router-dom';
import NavigationLink from './NavigationLink.jsx';
import Search from './Search.jsx';

export default function Nav() {

    // Array of navigation links text and their links.
    const navigationLinks = [
        {
            linkText: 'Products',
            linkTo: '/E-Commerce/products'
        },
        {
            linkText: 'Wishlist',
            linkTo: '/E-Commerce/wishlist'
        },
        {
            linkText: 'MyCart',
            linkTo: '/E-Commerce/cart'
        },
        {
            linkText: 'Account',
            linkTo: '/E-Commerce/account'
        },
        {
            linkText: 'Login',
            linkTo: '/E-Commerce.login'
        },
    ];

    // State for hamburger button.
    const [hamActive, setHamActive] = useState(false);

    // This function updates the hamburger button state.
    const handleHamburgerClick = () => {
        setHamActive(prevHamState => !prevHamState);
    };

    // Hides nav links when document is clicked or scrolled except nav.
    useEffect(() => {

        // This function hides the nav links if hamburger is active.
        const handleDocumentClick = () => {
            if (hamActive) {
                handleHamburgerClick();
            }
        };

        // Adding event listener to document for click or scroll to hide navlinks if hamburger is active.
        document.addEventListener('click', handleDocumentClick);
        document.addEventListener('scroll', handleDocumentClick);

        // Cleanup functions for event listeners on document.
        return () => {
            document.removeEventListener('click', handleDocumentClick);
            document.removeEventListener('scroll', handleDocumentClick);
        };
    });

    return (
        <nav
            className="bg-black sticky top-0 z-30 flex flex-row items-center justify-between px-3"
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <Link to={'/E-Commerce/'} className="w-fit relative z-20 flex items-center justify-start flex-grow bg-black lg:flex-grow-0 sm:hover:opacity-65 duration-300">
                <img
                    src={appLogo}
                    alt="Sound sphere"
                    className="w-12 rounded-full m-3 mxl-0"
                />
                <p className="text-xl font-semibold text-white sm:text-3xl">
                    Sound Sphere
                </p>
            </Link>
            <button
                className="absolute top-0 right-6 z-30 h-full flex flex-col items-center justify-center sm:hover:opacity-75 lg:hidden duration-300"
                onClick={handleHamburgerClick}
            >
                <div
                    className={`w-6 h-[2px] bg-white rounded duration-300 ${hamActive ? "rotate-45 translate-y-2" : ""}`}
                ></div>
                <div
                    className={`w-6 h-[2px] my-[4px] bg-white rounded duration-300 ${hamActive ? "opacity-0" : ""}`}
                ></div>
                <div
                    className={`w-6 h-[2px] bg-white rounded duration-300 ${hamActive ? "-rotate-45 -translate-y-[4px]" : ""}`}
                ></div>
            </button>

            <div
                className={`text-white text-lg font-medium sm:text-xl mr-4 flex flex-col items-center lg:flex-row gap-0 lg:gap-8 absolute z-10 left-0 lg:static bg-black w-[100vw] lg:w-fit px-0 lg:py-0 duration-1000 py-0 ${hamActive ? "py-4 top-[72px]" : "top-[-100vh]"}`}
            >
                <Search />
                {
                    navigationLinks.map(link => (
                        <NavigationLink key={link['linkText']} linkText={link['linkText']} linkTo={link['linkTo']} setHamActive={setHamActive} />
                    ))
                }
            </div>
        </nav>
    );
};
