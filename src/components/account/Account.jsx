import React, { useState } from 'react';
import Profile from './Profile';
import Address from './Address';

export default function Account() {

    const [activeBtn, setActiveBtn] = useState('Profile');

    const changeActiveBtn = (e) => {
        setActiveBtn(e.target.value)
    }

    return (
        <div className="w-[90vw] max-w-[600px] m-auto my-6 shadow-product-card-shadow rounded-b-2xl overflow-hidden">
            <div className="w-full flex flex-row items-center justify-center">
                <button
                    className={`
                        flex-grow py-3 px-2 md:text-xl
                        ${activeBtn === 'Profile' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}
                    `}
                    value={'Profile'}
                    onClick={changeActiveBtn}
                >
                    Profile
                </button>

                <button
                    className={`
                        flex-grow py-3 px-2 md:text-xl
                        ${activeBtn === 'Address' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}
                    `}
                    value={'Address'}
                    onClick={changeActiveBtn}
                >
                    Address
                </button>
            </div>

            {
                activeBtn === 'Profile' ? <Profile /> : <Address />
            }
        </div>
    );
};
