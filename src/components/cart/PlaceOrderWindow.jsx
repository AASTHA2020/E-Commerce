import React, { useEffect, useState } from 'react';
import { useCartData } from '../../contexts/CartDataContext.jsx';

export default function PlaceOrderWindow() {

    // Getting cart items from CartData context.
    const { cartItems } = useCartData();

    // State for total price.
    const [totalPrice, setTotalPrice] = useState(0);

    // When cartItems is updated, update tht totalPrice state.
    useEffect(() => {

        let price = 0;

        cartItems.forEach(item => {
            price += (item['originalPrice'] - (item['originalPrice'] * (item['discountPercentage'] / 100))) * item['count']
        });

        setTotalPrice(price);
    }, [cartItems]);

    return (
        <div className="shadow-product-card-shadow overflow-hidden max-w-[90vw] m-auto my-10 rounded-2xl p-6">

            <h2 className="text-lg md:text-2xl font-semibold border-b border-slate-900 mb-3">
                Price Details
            </h2>

            {
                cartItems.map(item => (
                    <div
                        className="flex flex-row items-center justify-between gap-1 md:text-xl my-1"
                        key={item['name']}
                    >
                        <span>
                            {item['name']} ({item['count']})
                        </span>

                        <span>
                            &#8377; {(item['originalPrice'] - (item['originalPrice'] * (item['discountPercentage'] / 100))) * item['count']}
                        </span>
                    </div>
                ))
            }

            <p
                className="flex flex-row items-center justify-between gap-1 md:text-xl mt-4"
            >
                <span className="font-semibold">
                    Total Amount
                </span>

                <span>
                    &#8377; {totalPrice}
                </span>
            </p>

            <button className="font-semibold text-lg md:text-xl w-full mt-6 bg-yellow-600 text-white p-3 rounded-lg">
                Place Order
            </button>
        </div>
    );
};
