import { useState, useEffect, useRef, memo } from 'react';

import AmazonLogo from '../../assets/images/amazon-white.png';
import locationIcon from '../../assets/images/location2.png';
import usaIcon from '../../assets/images/united-states.png';
import downIcon from '../../assets/images/arrow-down1.png';
import cartIcon from '../../assets/images/trolley.png';
import searchIcon from '../../assets/images/search.png';
import menuIcon from '../../assets/images/menu1.png';

import headphones from '../../assets/images/headphones.jpg';
import chair from '../../assets/images/chair.jpg';
import mouse from '../../assets/images/mouse.jpg';
import keyboard from '../../assets/images/keyboard.jpg';

import bedding from '../../assets/images/bedding.jpg';
import cleaningTools from '../../assets/images/cleaning-tools.jpg';
import homeDecor from '../../assets/images/home-decor.jpg';
import homeStorage from '../../assets/images/home-storage.jpg';

import jeansUnder50 from '../../assets/images/jeans-under-fifty.jpg';
import topsUnder25 from '../../assets/images/tops-under-twenty-five.jpg';
import dressesUnder30 from '../../assets/images/dresses-under-thirty.jpg';
import shoesUnder50 from '../../assets/images/shoes-under-fifty.jpg';

import kitchenAndDining from '../../assets/images/kitchen-and-dining.jpg';
import homeImprovement from '../../assets/images/home-improvement.jpg';
import decor from '../../assets/images/decor.jpg';
import beddingAndBath from '../../assets/images/bedding-and-bath.jpg';

import cooker from '../../assets/images/cooker.jpg';
import coffee from '../../assets/images/coffee.jpg';
import pots from '../../assets/images/pots.jpg';
import kettles from '../../assets/images/kettles.jpg';

import dining from '../../assets/images/dining.jpg';
import home from '../../assets/images/home.jpg';
import kitchen from '../../assets/images/kitchen.jpg';
import healthAndBeauty from '../../assets/images/health-and-beauty.jpg';

import gaming from '../../assets/images/gaming.jpg';
import toys from '../../assets/images/toys.jpg';




import ImageCarousel from '../../components/ImageCarousel';

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
                        <select className='w-[10%] rounded-s-[4px] text-xs font-medium p-2 hover:bg-slate-100  bg-slate-200 hover:cursor-pointer focus:outline-[#FFD814]'>
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
                <div className="bottom-menu flex items-center bg-slate-700 h-10 px-6 text-white text-sm font-medium gap-x-6">
                    <a href="" className='flex items-center'>
                        <img src={menuIcon} alt="" className='w-6 me-1'/>
                        <div>All</div>
                    </a>
                    <a href="">Today's Deals</a>
                    <a href="">Customer Service</a>
                    <a href="">Registry</a>
                    <a href="">Gift Cards</a>
                    <a href="">Sell</a>
                </div>
            </header>
            <div className='bg-slate-200 main-content relative-'>
                <ImageCarousel>
                    <div className='absolute top-[40%] w-full'>
                        <div className='row flex p-4 gap-4 h-40'>
                            <div className='bg-white w-[300px] h-[420px] py-5 px-4 flex flex-col'>
                                <h2 className='text-[23px] font-semibold mb-3'>Gaming Acessories</h2>
                                <div className='inner-content grid grid-cols-2 gap-3 gap-y-9'>
                                    <div className='relative'>
                                        <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                            <img src={headphones} alt="" className='max-w-full h-auto scale-150'/>
                                        </div>
                                        <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Headsets</span>
                                    </div>
                                    <div className='relative'>
                                        <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                            <img src={keyboard} alt="" className='max-w-full h-auto scale-150'/>
                                        </div>
                                        <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Keyboards</span>
                                    </div>
                                    <div className='relative'>
                                        <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                            <img src={mouse} alt="" className='max-w-full h-auto scale-150'/>
                                        </div>
                                        <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Computer mice</span>
                                    </div>
                                    <div className='relative'>
                                        <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                            <img src={chair} alt="" className='max-w-full h-auto scale-150'/>
                                        </div>
                                        <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Chairs</span>
                                    </div>
                                </div>
                                <a href="" className='text-[13px] mt-auto text-blue-800'>See more</a>
                            </div>
                            <div className='bg-white w-[300px] h-[420px] py-5 px-4 flex flex-col'>
                                <h2 className='text-[23px] font-semibold mb-3 leading-[1.2]'>Shop for your home<br />essentials</h2>
                                <div className='inner-content grid grid-cols-2 gap-3 gap-y-9'>
                                    <div className='relative'>
                                        <div className=' w-[125px] h-[106px] flex content-center items-center overflow-hidden'>
                                            <img src={cleaningTools} alt="" className='max-w-full h-auto scale-150'/>
                                        </div>
                                        <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Cleaning Tools</span>
                                    </div>
                                    <div className='relative'>
                                        <div className=' w-[125px] h-[106px] flex content-center items-center overflow-hidden'>
                                            <img src={homeStorage} alt="" className='max-w-full h-auto scale-150'/>
                                        </div>
                                        <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Home Storage</span>
                                    </div>
                                    <div className='relative'>
                                        <div className=' w-[125px] h-[106px] flex content-center items-center overflow-hidden'>
                                            <img src={homeDecor} alt="" className='max-w-full h-auto scale-150'/>
                                        </div>
                                        <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Home Decor</span>
                                    </div>
                                    <div className='relative'>
                                        <div className=' w-[125px] h-[106px] flex content-center items-center overflow-hidden'>
                                            <img src={bedding} alt="" className='max-w-full h-auto scale-150'/>
                                        </div>
                                        <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Bedding</span>
                                    </div>
                                </div>
                                <a href="" className='text-[13px] mt-auto text-blue-800'>Discover more in Home</a>
                            </div>
                            <div className='bg-white w-[300px] h-[420px] py-5 px-4 flex flex-col'>
                                <h2 className='text-[23px] font-semibold mb-3'>Shop deals in Fashion</h2>
                                <div className='inner-content grid grid-cols-2 gap-3 gap-y-9'>
                                    <div className='relative'>
                                        <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                            <img src={jeansUnder50} alt="" className='max-w-full h-auto scale-150'/>
                                        </div>
                                        <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Jeans under $50</span>
                                    </div>
                                    <div className='relative'>
                                        <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                            <img src={topsUnder25} alt="" className='max-w-full h-auto scale-150'/>
                                        </div>
                                        <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Tops under $25</span>
                                    </div>
                                    <div className='relative'>
                                        <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                            <img src={dressesUnder30} alt="" className='max-w-full h-auto scale-150'/>
                                        </div>
                                        <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Dresses under $30</span>
                                    </div>
                                    <div className='relative'>
                                        <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                            <img src={shoesUnder50} alt="" className='max-w-full h-auto scale-150'/>
                                        </div>
                                        <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Shoes under $50</span>
                                    </div>
                                </div>
                                <a href="" className='text-[13px] mt-auto text-blue-800'>See all deals</a>
                            </div>
                            <div className='bg-white w-[300px] h-[420px] py-5 px-4 flex flex-col'>
                                <h2 className='text-[23px] font-semibold mb-3 leading-[1.2]'>New home arrivals under $50</h2>
                                <div className='inner-content grid grid-cols-2 gap-3 gap-y-9'>
                                    <div className='relative'>
                                        <div className=' w-[125px] h-[106px] flex content-center items-center overflow-hidden'>
                                            <img src={kitchenAndDining} alt="" className='max-w-full h-auto scale-150'/>
                                        </div>
                                        <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Kitchen & Dining</span>
                                    </div>
                                    <div className='relative'>
                                        <div className=' w-[125px] h-[106px] flex content-center items-center overflow-hidden'>
                                            <img src={homeImprovement} alt="" className='max-w-full h-auto scale-150'/>
                                        </div>
                                        <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Home improvement</span>
                                    </div>
                                    <div className='relative'>
                                        <div className=' w-[125px] h-[106px] flex content-center items-center overflow-hidden'>
                                            <img src={decor} alt="" className='max-w-full h-auto scale-150'/>
                                        </div>
                                        <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Decor</span>
                                    </div>
                                    <div className='relative'>
                                        <div className=' w-[125px] h-[106px] flex content-center items-center overflow-hidden'>
                                            <img src={beddingAndBath} alt="" className='max-w-full h-auto scale-150'/>
                                        </div>
                                        <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Bedding & Bath</span>
                                    </div>
                                </div>
                                <a href="" className='text-[13px] mt-auto text-blue-800'>Shop the latest from Home</a>
                            </div>
                        </div>
                    </div>
                </ImageCarousel>

                <div className='row flex p-4 gap-4 mt-20'>
                    <div className='bg-white w-[300px] h-[420px] py-5 px-4 flex flex-col'>
                        <h2 className='text-[23px] font-semibold leading-[1.2] mb-3'>Top categories in Kitchen appliances</h2>
                        <div className='inner-content grid grid-cols-3 gap-x-2 gap-y-9'>
                            <div className='relative col-span-3'>
                                <div className='w-full h-[145px] flex content-center items-center overflow-hidden'>
                                    <img src={cooker} alt="" className='max-w-full h-full scale-110'/>
                                </div>
                                <span className='text-sm font-medium absolute left-0'>Cooker</span>
                            </div>
                            <div className='relative'>
                                <div className='h-[75px] flex content-center items-center overflow-hidden'>
                                    <img src={coffee} alt="" className='max-w-full scale-150'/>
                                </div>
                                <span className='text-sm font-medium absolute left-0'>Coffee</span>
                            </div>
                            <div className='relative'>
                                <div className='h-[75px] flex content-center items-center overflow-hidden'>
                                    <img src={pots} alt="" className='max-w-full scale-150'/>
                                </div>
                                <span className='text-sm font-medium absolute left-0'>Pots and...</span>
                            </div>
                            <div className='relative'>
                                <div className='h-[75px] flex content-center items-center overflow-hidden'>
                                    <img src={kettles} alt="" className='max-w-full scale-150'/>
                                </div>
                                <span className='text-sm font-medium absolute left-0'>Kettles</span>
                            </div>
                        </div>
                        <a href="" className='text-[13px] mt-auto text-blue-800'>See more</a>
                    </div>
                    <div className='bg-white w-[300px] h-[420px] py-5 px-4 flex flex-col'>
                        <h2 className='text-[23px] font-semibold mb-3'>Refresh your space</h2>
                        <div className='inner-content grid grid-cols-2 gap-3 gap-y-9'>
                            <div className='relative'>
                                <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                    <img src={dining} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Dining</span>
                            </div>
                            <div className='relative'>
                                <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                    <img src={home} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Home</span>
                            </div>
                            <div className='relative'>
                                <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                    <img src={kitchen} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Kitchen</span>
                            </div>
                            <div className='relative'>
                                <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                    <img src={healthAndBeauty} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Health & Beauty</span>
                            </div>
                        </div>
                        <a href="" className='text-[13px] mt-auto text-blue-800'>See all deals</a>
                    </div>
                    <div className='bg-white w-[300px] h-[420px] py-5 px-4 flex flex-col'>
                        <h2 className='text-[23px] font-semibold mb-3'>Get your game on</h2>
                        <div className='h-[76%] bg-yellow-200 w-auto overflow-hidden'>
                            <img src={gaming} alt="" className='w-full h-full'/>
                        </div>
                        <a href="" className='text-[13px] mt-auto text-blue-800'>See all deals</a>
                    </div>
                    <div className='bg-white w-[300px] h-[420px] py-5 px-4 flex flex-col'>
                        <h2 className='text-[23px] font-semibold mb-3'>Toys under $25</h2>
                        <div className='h-[76%] bg-yellow-200 w-full overflow-hidden'>
                            <img src={toys} alt="" className='object-cover object-center w-full h-full'/>
                        </div>
                        <a href="" className='text-[13px] mt-auto text-blue-800'>See all deals</a>
                    </div>
                </div>
            </div>
        </div>
    )
}