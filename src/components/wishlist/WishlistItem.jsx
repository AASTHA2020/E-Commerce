import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useWishlistData } from '../../contexts/WishlistDataContext.jsx';
import { Link } from 'react-router-dom';
import { useCartData } from '../../contexts/CartDataContext.jsx';

export default function WishlistItem({ item }) {

    // Getting functions from WishlistData context.
    const { removeItemFromWishlist, moveToCart } = useWishlistData();

    // Getting functions from CartData context.
    const { isItemInCart } = useCartData();

    // Getting item details.
    const itemImage = item['image'];
    const itemName = item['name'];
    const itemPrice = item['originalPrice'];
    const rating = item['rating'];
    const discountPercentage = item['discountPercentage'];
    const discountPrice = itemPrice - (itemPrice * (discountPercentage / 100));

    // Check if the item is in the cart
    const inCart = isItemInCart(itemName);

    return (
        <div className="relative p-4 mx-auto w-64 max-w-[70vw] rounded-2xl shadow-product-card-shadow hover:shadow-product-card-shadow-hover duration-300">

            <button
                className="absolute top-0 right-0 m-2"
                onClick={() => { removeItemFromWishlist(itemName) }}
            >
                <FontAwesomeIcon
                    icon="fa-solid fa-heart"
                    className="h-5 text-red-600"
                />
            </button>

            <Link to={`/E-Commerce/products/${itemName}`}>
                <img src={itemImage} alt={itemName} className="block m-auto h-60" />

                <div className="flex flex-row items-start justify-between my-4">
                    <p className="font-semibold text-slate-900">
                        {itemName}
                    </p>

                    <div className="bg-slate-900 p-1 text-white flex flex-row items-start justify-center gap-1 rounded-lg">
                        {rating}
                        <FontAwesomeIcon icon="fa-solid fa-star" className="h-3" />
                    </div>
                </div>

                <div className="flex flex-row items-center justify-between mt-8">
                    <p>
                        <span className="font-semibold text-slate-900">
                            &#8377;
                            {discountPrice}
                        </span>
                        <span className="ml-2 line-through text-slate-500 font-thin">
                            &#8377;{itemPrice}
                        </span>
                    </p>
                    <p className="font-semibold text-green-600">{discountPercentage}% OFF</p>
                </div>
            </Link>

            <button
                className="bg-slate-900 border-2 border-slate-900 text-white w-full mt-4 rounded-md py-[6px] tracking-wider uppercase hover:text-slate-900 hover:bg-white duration-300"
                onClick={() => { removeItemFromWishlist(itemName) }}
            >
                Remove
            </button>

            {inCart ? (
                <Link
                    to="/E-Commerce/cart"
                    className="block text-center bg-slate-900 border-2 border-slate-900 text-white w-full mt-4 rounded-md py-[6px] tracking-wider uppercase hover:text-slate-900 hover:bg-white duration-300"
                >
                    Go to Cart
                </Link>
            ) : (
                <button
                    className="bg-slate-900 border-2 border-slate-900 text-white w-full mt-4 rounded-md py-[6px] tracking-wider uppercase hover:text-slate-900 hover:bg-white duration-300"
                    onClick={() => { moveToCart(item) }}
                >
                    Move to Cart
                </button>
            )}
        </div>
    );
};
