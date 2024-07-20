import React from 'react';

export default function Profile() {

    return (
        <div className="text-xl md:text-2xl font-semibold flex flex-col items-start justify-center w-full py-7 px-6 gap-5">
            <p>
                <span className="text-slate-400 mr-2">
                    Name:
                </span>
                <span>
                    Aastha
                </span>
            </p>

            <p>
                <span className="text-slate-400 mr-2">
                    Email:
                </span>
                <span>
                    missaastha11@gmail.com
                </span>
            </p>
        </div>
    );
};
