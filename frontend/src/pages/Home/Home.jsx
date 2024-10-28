import { useState, useEffect, useRef } from 'react';

import AmazonLogo from '../../assets/images/amazon-white.png';
import locationIcon from '../../assets/images/location2.png';
import usaIcon from '../../assets/images/united-states.png';
import downIcon from '../../assets/images/arrow-down1.png';
import cartIcon from '../../assets/images/trolley.png';
import searchIcon from '../../assets/images/search.png';

export default function Home(){

    const [searchIsFocused, setSearchIsFocused] = useState(false);

    return (
        <div>
            <header className="flex flex-col">
                <div className="top-menu flex h-16 px-6 items-center bg-slate-900">
                    <a><img src={AmazonLogo} className='w-[95px] mt-2 me-5'/></a>
                    <a className='me-5'>
                        <div className='top-menu-tab flex items-center'>
                            <img src={locationIcon} className='w-[15px] self-end'/>
                            <div className='flex flex-col text-white'>
                                <div className='text-gray-400 text-[12px] font-medium mb-0'>Deliver to</div>
                                <div className='font-bold mt-0 text-sm'>Nigeria</div>
                            </div>
                        </div>
                    </a>
                    <div 
                    className={`search-container h-[58%] w-6/12 me-5 flex ${searchIsFocused ? 'ring-4 ring-[#FFD814] rounded-[4px]' : ''}`}>
                        <select className='w-[10%] rounded-s-[4px] text-xs p-2 hover:bg-slate-100  bg-slate-200 hover:cursor-pointer focus:outline-[#FFD814]'>
                            <option>All</option>
                        </select>
                        <input 
                        type="text" 
                        className='h-full w-[83%] block border-none py-3 px-2 text-sm focus:outline-none'
                        placeholder='Search Amazon'
                        onFocus={() => setSearchIsFocused(true)}
                        onBlur={() => setSearchIsFocused(false)}
                        />
                        <button className='w-[7%] rounded-e-[4px] bg-[#FFD814] flex items-center justify-center border-none outline-none'>
                            <img src={searchIcon} className='w-5'/>
                        </button>
                    </div>
                    <a href="" className='me-5'>
                        <div className='top-menu-tab flex items-center'>
                            <img src={usaIcon} className='w-5 me-1 mt-[1px]'/>
                            <div className='text-sm text-white font-semibold mb-0'>EN</div>
                            <img src={downIcon} className='w-3 self-end ms-0.5'/>
                        </div>
                    </a>
                    <a href="" className='me-5'>
                        <div className='top-menu-tab flex items-center'>
                            <div className='flex flex-col text-white'>
                                <div className='text-[12px] font-medium mb-0'>Hello, sign in</div>
                                <div className='font-bold mt-0 text-sm'>Accounts & Lists</div>
                            </div>
                            <img src={downIcon} className='w-3 self-end ms-0.5'/>
                        </div>
                    </a>
                    <a href="" className='ms-auto me-auto'>
                        <div className='top-menu-tab flex items-center'>
                            <div className='flex flex-col text-white'>
                                <div className='text-[12px] font-medium mb-0'>Returns</div>
                                <div className='font-bold mt-0 text-sm'>& Orders</div>
                            </div>
                        </div>
                    </a>
                    <a href="" className='ms-auto'>
                        <div className='top-menu-tab flex items-center'>
                            <img src={cartIcon} className='w-10' />
                            <div className='text-white text-sm font-bold self-end ms-0.5'>Cart</div>
                        </div>
                    </a>
                </div>
                <div className="bottom-menu"></div>
            </header>
        </div>
    )
}