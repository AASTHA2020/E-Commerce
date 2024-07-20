import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Search() {

    return (
        <div className="bg-white max-w-[90%] mx-auto my-5 rounded-3xl text-black font-normal overflow-hidden flex flex-row items-center justify-center">
            <label htmlFor="searchBar">
                <input id="searchBar" type="text" className="bg-transparent flex-grow py-1 px-2" />
            </label>
            <button className="bg-transparent p-1 px-2 hover:opacity-75 border-l border-slate-600">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </button>
        </div>
    );
};
