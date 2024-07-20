import React from 'react';

export default function Login() {

    return (
        <div className="flex min-h-[100vh] w-[100vw] max-w-[600px] m-auto flex-col items-center justify-center px-7">
            <form className="w-full">
                <h2 className="text-center font-semibold text-2xl md:text-3xl">
                    Login
                </h2>

                <label htmlFor="email" className="w-full my-4 text-slate-800 flex flex-col gap-2">
                    Email
                    <input type="email" name="email" id="email" className="bg-red-100 p-2  w-full border border-slate-900 rounded-md" />
                </label>

                <label htmlFor="password" className="w-full my-4 text-slate-800 flex flex-col gap-2">
                    Password
                    <input type="password" name="password" id="password" className="bg-red-100 p-2  w-full border border-slate-900 rounded-md" />
                </label>

                <button
                    className="w-full bg-slate-900 text-white text-lg md:text-xl py-2 border border-slate-900 hover:bg-white hover:text-slate-900 mt-4 duration-300"
                    onClick={(e) => { e.preventDefault() }}

                >
                    Login
                </button>

                <button
                    className="w-full bg-slate-900 text-white text-lg md:text-xl py-2 border border-slate-900 hover:bg-white hover:text-slate-900 mt-2 duration-300"
                    onClick={(e) => { e.preventDefault() }}

                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};
