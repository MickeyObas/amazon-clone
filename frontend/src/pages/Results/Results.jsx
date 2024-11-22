import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useState } from 'react';

import { starEmpty, starFull, zict } from "../../assets/images/images";
import downIcon from "../../assets/images/caret-down2.png";
import ProductResultBox from '../../components/ProductResultBox';
import { products } from '../../products';

export default function Results(){

    const [sliderValue, setSliderValue] = useState([0, 2000]);

    const handleSliderChange = (newValue) => {
        setSliderValue(newValue);
    }

    return (
        <div className="results-container">
            <div className="p-2 shadow-md border border-b-slate-300">
                <h2 className="text-sm font-medium">1-48 of over 30,000 results for <span className="text-red-500">"Dinnerware & accessories"</span></h2>
            </div>
            <div className="results-inner-container grid grid-cols-1 md:grid-cols-5 py-3 px-4">
                {/* Filters Sidebar */}
                <aside className="md:col-span-1">
                    <div className="sidebar-inner flex flex-col gap-y-5">
                        <div className="department flex flex-col">
                            <h2 className="font-bold text-sm mb-1.5">Department</h2>
                            <a href="" className="hover:text-red-600 text-sm mb-1">Kitchen & Dining</a>
                            <div className="flex flex-col ms-4 gap-y-[2px]">
                                <a href="" className="hover:text-red-600 text-sm">Rice Cookers</a>
                                <a href="" className="hover:text-red-600 text-sm">Pressure Cookers</a>
                                <a href="" className="hover:text-red-600 text-sm">Electric Pressure Cookers</a>
                                <a href="" className="hover:text-red-600 text-sm">Slow Cookers</a>
                                <a href="" className="hover:text-red-600 text-sm">Electric Hot Pots</a>
                                <a href="" className="hover:text-red-600 text-sm">Egg Cookers</a>
                                <a href="" className="hover:text-red-600 text-sm">Sous Vide Machines</a>
                            </div>
                        </div>
                        <div className="reviews">
                            <h2 className="font-bold text-sm mb-1.5">Customer Reviews</h2>
                            <div className="flex">
                                <div className="rating flex max-w-full items-center gap-x-0.5 items-center">
                                    <img src={starFull} className="h-4"/>
                                    <img src={starFull} className="h-4"/>
                                    <img src={starFull} className="h-4"/>
                                    <img src={starFull} className="h-4"/>
                                    <img src={starEmpty} className="h-[16.2px]"/>
                                </div>
                                <div className="text-[13px] ms-1">& Up</div>
                            </div>
                        </div>
                        <div className="brands">
                            <h2 className="font-bold text-sm mb-1.5">Brands</h2>
                            <div className="options flex flex-col gap-y-0.5">
                                <label className="text-sm">
                                    <input type="checkbox" name="" id="" className="me-1.5 scale-125"/>
                                    Instant
                                </label>
                                <label className="text-sm">
                                    <input type="checkbox" name="" id="" className="me-1.5 scale-125"/>
                                    Ninja
                                </label>
                                <label className="text-sm">
                                    <input type="checkbox" name="" id="" className="me-1.5 scale-125"/>
                                    Crock-Pot
                                </label>
                                <label className="text-sm">
                                    <input type="checkbox" name="" id="" className="me-1.5 scale-125"/>
                                    Hawkins
                                </label>
                                <label className="text-sm">
                                    <input type="checkbox" name="" id="" className="me-1.5 scale-125"/>
                                    AROMA
                                </label>
                                <label className="text-sm">
                                    <input type="checkbox" name="" id="" className="me-1.5 scale-125"/>
                                    CUCKOO
                                </label>
                                <label className="text-sm">
                                    <input type="checkbox" name="" id="" className="me-1.5 scale-125"/>
                                    Fissler
                                </label>
                            </div>
                        </div>
                        <div className="price">
                            <h2 className="font-bold text-sm mb-1.5">Price</h2>
                            <div className="font-bold text-sm">${sliderValue[0]} - ${sliderValue[1]}+</div>
                            <div className='flex items-center relative h-10'>
                                <RangeSlider
                                    id={'priceSlider'}
                                    className={'mt-4 max-w-[70%] me-2 bottom-1/2 absolute translate-y-1/2'}   
                                    min={100}
                                    max={2000}
                                    step={50}
                                    value={sliderValue}
                                    onInput={handleSliderChange}
                                />
                                <button className='span absolute px-3 py-1 rounded-3xl text-sm border border-slate-800 right-4'>Go</button>
                            </div>
                            
                        </div>
                        <div className="deals">
                            <h2 className="font-bold text-sm mb-1.5">Deals & Discounts</h2>
                            <div className="flex flex-col items-start">
                                <a className="text-sm hover:text-red-600">All Discounts</a>
                                <a className="text-sm hover:text-red-600">Today's deals</a>
                            </div>
                        </div>
                        <div className="brands">
                            <h2 className="font-bold text-sm mb-1.5">Seller</h2>
                            <div className="options flex flex-col gap-y-0.5">
                                <label className="text-sm">
                                    <input type="checkbox" name="" id="" className="me-1.5 scale-125"/>
                                    Amazon
                                </label>
                                <label className="text-sm">
                                    <input type="checkbox" name="" id="" className="me-1.5 scale-125"/>
                                    Amazon Resale
                                </label>
                                <label className="text-sm">
                                    <input type="checkbox" name="" id="" className="me-1.5 scale-125"/>
                                    Amazon Japan
                                </label>
                            </div>
                        </div>
                        <div className="condition">
                            <h2 className="font-bold text-sm mb-1.5">Condition</h2>
                            <div className="options flex flex-col gap-y-0.5">
                                <label className="text-sm">
                                    <input type="checkbox" name="" id="" className="me-1.5 scale-125"/>
                                    New
                                </label>
                                <label className="text-sm">
                                    <input type="checkbox" name="" id="" className="me-1.5 scale-125"/>
                                    Used
                                </label>
                                <label className="text-sm">
                                    <input type="checkbox" name="" id="" className="me-1.5 scale-125"/>
                                    Refurbished
                                </label>
                            </div>
                        </div>
                    </div>
                </aside>
                <div className="results-content md:col-span-4">
                    <h1 className="text-xl font-bold">Results</h1>
                    <p className="text-sm text-slate-600">Check each product page for other buying options. Price and other details may vary based on product size and color.</p>
                    {renderProducts(products)}
                </div>
            </div>
        </div>
    )
}

const groupProducts = (products) => {
    const groupedProducts = [];
    let endIdx = 0;
    for(let i=0; i < products.length; i+=4){
        endIdx += 4;
        groupedProducts.push(products.slice(i, endIdx))
    }
    return groupedProducts;
}

const renderProducts = (products) => {
    const rows = groupProducts(products);

    return (
        <div className="inner-content py-1">
            {rows.map((row, rowidx) => (
                <div key={rowidx} className="row flex gap-2 mb-2">
                    {row.map((product, productidx) => (
                        <ProductResultBox 
                            key={productidx}
                            image={product.image}
                            description={product.description}
                            stock={product.stock}
                            priceMain={product.priceMain}
                            priceSub={product.priceSub}
                        />
                    ))}
                </div>
            ))}
        </div>
    )

}