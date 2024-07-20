import React from 'react';

export default function Account() {

    return (
        <>
            <form>
                <div className="flex flex-row flex-wrap gap-4 max-w-[90%] m-auto my-8">
                    <label htmlFor="name">
                        <input type="text" id="name" className="bg-slate-200 w-28 rounded-md text-xl p-2 border border-slate-900" placeholder="Name" />
                    </label>

                    <label htmlFor="mobile">
                        <input type="tel" id="mobile" className="bg-slate-200 w-28 rounded-md text-xl p-2 border border-slate-900" placeholder="Mobile" />
                    </label>

                    <label htmlFor="pin">
                        <input type="text" id="pin" className="bg-slate-200 w-28 rounded-md text-xl p-2 border border-slate-900" placeholder="PIN Code" />
                    </label>

                    <label htmlFor="city">
                        <input type="text" id="city" className="bg-slate-200  w-28 rounded-md text-xl p-2 border border-slate-900" placeholder="City" />
                    </label>

                    <label htmlFor="address">
                        <textarea id="address" className="bg-slate-200 rounded-md text-xl p-2 border border-slate-900 h-40" placeholder="Address"></textarea>
                    </label>

                </div>

                <select id="state" name="state" className=" bg-slate-200 ml-7 rounded-md text-xl p-2 border border-slate-900 block">
                    <option value="Choose State">Choose State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                </select>

                <div className="flex flex-row items-center justify-center flex-wrap text-white w-full px-6 py-5 gap-[2px]">
                    <button
                        className="bg-slate-900 p-3 border border-slate-900 font-semibold flex-grow hover:bg-white hover:text-slate-900"
                        onClick={(e) => { e.preventDefault() }}
                    >
                        Add
                    </button>
                    <button
                        className="bg-slate-900 p-3 border border-slate-900 font-semibold flex-grow hover:bg-white hover:text-slate-900"
                        onClick={(e) => { e.preventDefault() }}
                    >
                        Random Data
                    </button>
                    <button
                        className="bg-slate-900 p-3 font-semibold flex-grow hover:bg-white hover:text-slate-900 border border-slate-900"
                        onClick={(e) => { e.preventDefault() }}
                    >
                        Cancel
                    </button>
                </div>
            </form>

            <div className="my-6 mx-6">
                <p className="font-semibold text-lg md:text-xl">
                    Aastha (Demo)
                </p>

                <p className="mt-4">
                    022222015042
                </p>

                <p>
                    366/68 Diamond Mansion, 1St Flr, Room No 8 Kalbadevi Rd, Kalbadevi
                </p>

                <p>
                    Mumbai
                </p>

                <p>
                    Maharashtra
                </p>
            </div>
        </>
    );
};
