import React, { useEffect } from 'react';
import { useCartData } from '../../contexts/CartDataContext.jsx';
import CartItem from './CartItem.jsx';
import PlaceOrderWindow from './PlaceOrderWindow.jsx';

export default function Cart() {

    // Getting cartItems from CartData context
    const { cartItems } = useCartData();

    return (
        <div>
            {
                cartItems.length <= 0 ? (
                    <p className="text-xl md:text-3xl font-semibold tracking-wider text-center my-10">
                        You haven't added anything in the cart yet.
                    </p>
                ) : (
                    <div
                        className="md:flex-row flex items-start justify-between px-5"
                    >
                        <div className="flex flex-col gap-4 my-8">
                            {
                                cartItems.map(item => (
                                    <CartItem key={item['name']} item={item} />
                                ))
                            }
                        </div>

                        <div className="flex-grow max-w-[40vw]">
                            <PlaceOrderWindow />
                        </div>
                    </div>
                )
            }
        </div>
    );
};
