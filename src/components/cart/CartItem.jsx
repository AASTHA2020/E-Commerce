import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCartData } from '../../contexts/CartDataContext.jsx';
import { useWishlistData } from '../../contexts/WishlistDataContext.jsx';

export default function CartItem({ item }) {
    // Getting functions from CartData context.
    const { removeItemFromCart, incrementItemCount, decrementItemCount } = useCartData();

    // Getting functions from WishlistData context.
    const { addItemToWishlist, removeItemFromWishlist, isItemInWishlist } = useWishlistData();

    // Getting item details.
    const itemImage = item['image'];
    const itemName = item['name'];
    const itemPrice = item['originalPrice'];
    const discountPercentage = item['discountPercentage'];
    const discountPrice = itemPrice - (itemPrice * (discountPercentage / 100));
    const itemQuantity = item['count'];

    // If item quantity is zero, remove it form cart.
    useEffect(() => {
        if (itemQuantity <= 0) {
            removeItemFromCart(itemName);
        }
    }, [itemQuantity, removeItemFromCart, itemName]);
    
    // Check if the item is in the wishlist
    const inWishlist = isItemInWishlist(itemName);

    return (
        <div className="shadow-product-card-shadow overflow-hidden max-w-[90vw] m-auto rounded-2xl flex flex-row items-center justify-center gap-4 py-4 px-3 flex-grow">
            <img src={itemImage} alt={itemName} className="w-24 md:w-32 max-h-full" />

            <div className="text-sm md:text-xl">
                <p className="font-semibold">
                    {itemName}
                </p>
                <div className="flex flex-col gap-1 my-2 md:my-5">
                    <p className="font-semibold">
                        <span>
                            &#8377;
                            {discountPrice}
                        </span>

                        <span className="font-normal text-slate-500 line-through ml-3">
                            &#8377;
                            {itemPrice}
                        </span>
                    </p>

                    <p className="font-semibold text-green-600">
                        {discountPercentage}% OFF
                    </p>
                </div>

                <div>
                    <div className="flex flex-row gap-2">
                        <span>Quantity:</span>
                        <div className="flex flex-row items-center justify-center gap-0">
                            <button
                                className="hover:opacity-75"
                                onClick={() => decrementItemCount(itemName)}
                            >
                                <FontAwesomeIcon icon="fa-solid fa-minus" className="text-white bg-black rounded-full h-4 w-4 p-[1.5px]" />
                            </button>

                            <span className="mx-2">
                                {itemQuantity}
                            </span>

                            <button
                                className="hover:opacity-75"
                                onClick={() => incrementItemCount(itemName)}
                            >
                                <FontAwesomeIcon icon="fa-solid fa-plus" className="text-white bg-black rounded-full h-4 w-4 p-[1.5px]" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row flex-wrap w-full items-center justify-center gap-4 mt-5 pb-2">
                    <button
                        className="flex-grow bg-slate-900 text-white hover:bg-white hover:text-slate-900 duration-300 py-3 px-2 border-2 border-slate-900 uppercase"
                        onClick={() => removeItemFromCart(itemName)}
                    >
                        Remove From Cart
                    </button>

                    <button
                        className="flex-grow bg-white text-slate-900 hover:bg-slate-900 hover:text-white duration-300 py-3 px-2 border-2 border-slate-900 uppercase"
                        onClick={() => inWishlist ? removeItemFromWishlist(itemName) : addItemToWishlist(item)}
                    >
                        {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    </button>
                </div>
            </div>
        </div>
    );
};
