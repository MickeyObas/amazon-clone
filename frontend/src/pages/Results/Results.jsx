import { starEmpty, starFull, zict } from "../../assets/images/images";
import downIcon from "../../assets/images/caret-down2.png";

export default function Results(){
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
                            <h2 className="font-semibold text-sm mb-1.5">Department</h2>
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
                            <h2 className="font-semibold text-sm mb-1.5">Customer Reviews</h2>
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
                            <h2 className="font-semibold text-sm mb-1.5">Brands</h2>
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
                    </div>
                    
                </aside>
                <div className="results-content md:col-span-4">
                    <h1 className="text-xl font-bold">Results</h1>
                    <p className="text-sm text-slate-600">Check each product page for other buying options. Price and other details may vary based on product size and color.</p>
                    <div className="inner-content py-1">
                        <div className="row flex gap-2 mb-2">
                            <div className="product-card w-[250px] border rounded-md flex flex-col">
                                <div className="img-container h-[250px] flex items-center justify-center">
                                    <img src={zict} />
                                </div>
                                <div className="product-content border-t py-0.5 px-2 h-[325px] w-full">
                                    <a href="" className="text-xs text-blue-900 underline">+9 other colors/patterns</a>
                                    <h1 className="max-w-[95%] font-medium mt-2">102PCS Purple and Gold Plastic Plates - Purple Disposable Plates - High End Purple Party Plates Include</h1>
                                    <div className="flex gap-1 items-center mt-2">
                                        <div className="rating flex max-w-full h-6 items-center">
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                        </div>
                                        <img src={downIcon} alt="" className="h-3"/>
                                        <h4 className="text-sm text-slate-500">254</h4>
                                    </div>
                                    <h4 className="text-sm text-slate-600">50+ bought in past month</h4>
                                    <div className="mt-3 flex gap-1 items-center">
                                        <div className='flex items-top font-medium text-lg'>
                                            <span className='block text-sm leading-[1.4] me-[1px]'>$</span>
                                            <span className='block text-[24px] leading-[1]'>253</span>
                                            <span className='block text-xs me-0.5 font-normal'>64</span>
                                        </div>
                                        <div className="text-slate-600 text-sm">($0.44/Count)</div>
                                    </div>
                                    <div className="text-sm mt-1.5">Delivery <span className="font-semibold">Wed, Nov 27</span></div>
                                    <div className="text-xs mt-1">Ships to Nigeria</div>
                                    <button className="bg-[#FFD814] py-2 px-3 rounded-full text-xs font-medium mt-2">Add to Cart</button>
                                </div>
                            </div>
                            <div className="product-card w-[250px] border rounded-md flex flex-col">
                                <div className="img-container h-[250px] flex items-center justify-center">
                                    <img src={zict} />
                                </div>
                                <div className="product-content border-t py-0.5 px-2 h-[325px] w-full">
                                    <a href="" className="text-xs text-blue-900 underline">+9 other colors/patterns</a>
                                    <h1 className="max-w-[95%] font-medium mt-2">102PCS Purple and Gold Plastic Plates - Purple Disposable Plates - High End Purple Party Plates Include</h1>
                                    <div className="flex gap-1 items-center mt-2">
                                        <div className="rating flex max-w-full h-6 items-center">
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                        </div>
                                        <img src={downIcon} alt="" className="h-3"/>
                                        <h4 className="text-sm text-slate-500">254</h4>
                                    </div>
                                    <h4 className="text-sm text-slate-600">50+ bought in past month</h4>
                                    <div className="mt-3 flex gap-1 items-center">
                                        <div className='flex items-top font-medium text-lg'>
                                            <span className='block text-sm leading-[1.4] me-[1px]'>$</span>
                                            <span className='block text-[24px] leading-[1]'>253</span>
                                            <span className='block text-xs me-0.5 font-normal'>64</span>
                                        </div>
                                        <div className="text-slate-600 text-sm">($0.44/Count)</div>
                                    </div>
                                    <div className="text-sm mt-1.5">Delivery <span className="font-semibold">Wed, Nov 27</span></div>
                                    <div className="text-xs mt-1">Ships to Nigeria</div>
                                    <button className="bg-[#FFD814] py-2 px-3 rounded-full text-xs font-medium mt-2">Add to Cart</button>
                                </div>
                            </div>
                            <div className="product-card w-[250px] border rounded-md flex flex-col">
                                <div className="img-container h-[250px] flex items-center justify-center">
                                    <img src={zict} />
                                </div>
                                <div className="product-content border-t py-0.5 px-2 h-[325px] w-full">
                                    <a href="" className="text-xs text-blue-900 underline">+9 other colors/patterns</a>
                                    <h1 className="max-w-[95%] font-medium mt-2">102PCS Purple and Gold Plastic Plates - Purple Disposable Plates - High End Purple Party Plates Include</h1>
                                    <div className="flex gap-1 items-center mt-2">
                                        <div className="rating flex max-w-full h-6 items-center">
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                        </div>
                                        <img src={downIcon} alt="" className="h-3"/>
                                        <h4 className="text-sm text-slate-500">254</h4>
                                    </div>
                                    <h4 className="text-sm text-slate-600">50+ bought in past month</h4>
                                    <div className="mt-3 flex gap-1 items-center">
                                        <div className='flex items-top font-medium text-lg'>
                                            <span className='block text-sm leading-[1.4] me-[1px]'>$</span>
                                            <span className='block text-[24px] leading-[1]'>253</span>
                                            <span className='block text-xs me-0.5 font-normal'>64</span>
                                        </div>
                                        <div className="text-slate-600 text-sm">($0.44/Count)</div>
                                    </div>
                                    <div className="text-sm mt-1.5">Delivery <span className="font-semibold">Wed, Nov 27</span></div>
                                    <div className="text-xs mt-1">Ships to Nigeria</div>
                                    <button className="bg-[#FFD814] py-2 px-3 rounded-full text-xs font-medium mt-2">Add to Cart</button>
                                </div>
                            </div>
                            <div className="product-card w-[250px] border rounded-md flex flex-col">
                                <div className="img-container h-[250px] flex items-center justify-center">
                                    <img src={zict} />
                                </div>
                                <div className="product-content border-t py-0.5 px-2 h-[325px] w-full">
                                    <a href="" className="text-xs text-blue-900 underline">+9 other colors/patterns</a>
                                    <h1 className="max-w-[95%] font-medium mt-2">102PCS Purple and Gold Plastic Plates - Purple Disposable Plates - High End Purple Party Plates Include</h1>
                                    <div className="flex gap-1 items-center mt-2">
                                        <div className="rating flex max-w-full h-6 items-center">
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                        </div>
                                        <img src={downIcon} alt="" className="h-3"/>
                                        <h4 className="text-sm text-slate-500">254</h4>
                                    </div>
                                    <h4 className="text-sm text-slate-600">50+ bought in past month</h4>
                                    <div className="mt-3 flex gap-1 items-center">
                                        <div className='flex items-top font-medium text-lg'>
                                            <span className='block text-sm leading-[1.4] me-[1px]'>$</span>
                                            <span className='block text-[24px] leading-[1]'>253</span>
                                            <span className='block text-xs me-0.5 font-normal'>64</span>
                                        </div>
                                        <div className="text-slate-600 text-sm">($0.44/Count)</div>
                                    </div>
                                    <div className="text-sm mt-1.5">Delivery <span className="font-semibold">Wed, Nov 27</span></div>
                                    <div className="text-xs mt-1">Ships to Nigeria</div>
                                    <button className="bg-[#FFD814] py-2 px-3 rounded-full text-xs font-medium mt-2">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="row flex gap-2 mb-2">
                            <div className="product-card w-[250px] border rounded-md flex flex-col">
                                <div className="img-container h-[250px] flex items-center justify-center">
                                    <img src={zict} />
                                </div>
                                <div className="product-content border-t py-0.5 px-2 h-[325px] w-full">
                                    <a href="" className="text-xs text-blue-900 underline">+9 other colors/patterns</a>
                                    <h1 className="max-w-[95%] font-medium mt-2">102PCS Purple and Gold Plastic Plates - Purple Disposable Plates - High End Purple Party Plates Include</h1>
                                    <div className="flex gap-1 items-center mt-2">
                                        <div className="rating flex max-w-full h-6 items-center">
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                        </div>
                                        <img src={downIcon} alt="" className="h-3"/>
                                        <h4 className="text-sm text-slate-500">254</h4>
                                    </div>
                                    <h4 className="text-sm text-slate-600">50+ bought in past month</h4>
                                    <div className="mt-3 flex gap-1 items-center">
                                        <div className='flex items-top font-medium text-lg'>
                                            <span className='block text-sm leading-[1.4] me-[1px]'>$</span>
                                            <span className='block text-[24px] leading-[1]'>253</span>
                                            <span className='block text-xs me-0.5 font-normal'>64</span>
                                        </div>
                                        <div className="text-slate-600 text-sm">($0.44/Count)</div>
                                    </div>
                                    <div className="text-sm mt-1.5">Delivery <span className="font-semibold">Wed, Nov 27</span></div>
                                    <div className="text-xs mt-1">Ships to Nigeria</div>
                                    <button className="bg-[#FFD814] py-2 px-3 rounded-full text-xs font-medium mt-2">Add to Cart</button>
                                </div>
                            </div>
                            <div className="product-card w-[250px] border rounded-md flex flex-col">
                                <div className="img-container h-[250px] flex items-center justify-center">
                                    <img src={zict} />
                                </div>
                                <div className="product-content border-t py-0.5 px-2 h-[325px] w-full">
                                    <a href="" className="text-xs text-blue-900 underline">+9 other colors/patterns</a>
                                    <h1 className="max-w-[95%] font-medium mt-2">102PCS Purple and Gold Plastic Plates - Purple Disposable Plates - High End Purple Party Plates Include</h1>
                                    <div className="flex gap-1 items-center mt-2">
                                        <div className="rating flex max-w-full h-6 items-center">
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                        </div>
                                        <img src={downIcon} alt="" className="h-3"/>
                                        <h4 className="text-sm text-slate-500">254</h4>
                                    </div>
                                    <h4 className="text-sm text-slate-600">50+ bought in past month</h4>
                                    <div className="mt-3 flex gap-1 items-center">
                                        <div className='flex items-top font-medium text-lg'>
                                            <span className='block text-sm leading-[1.4] me-[1px]'>$</span>
                                            <span className='block text-[24px] leading-[1]'>253</span>
                                            <span className='block text-xs me-0.5 font-normal'>64</span>
                                        </div>
                                        <div className="text-slate-600 text-sm">($0.44/Count)</div>
                                    </div>
                                    <div className="text-sm mt-1.5">Delivery <span className="font-semibold">Wed, Nov 27</span></div>
                                    <div className="text-xs mt-1">Ships to Nigeria</div>
                                    <button className="bg-[#FFD814] py-2 px-3 rounded-full text-xs font-medium mt-2">Add to Cart</button>
                                </div>
                            </div>
                            <div className="product-card w-[250px] border rounded-md flex flex-col">
                                <div className="img-container h-[250px] flex items-center justify-center">
                                    <img src={zict} />
                                </div>
                                <div className="product-content border-t py-0.5 px-2 h-[325px] w-full">
                                    <a href="" className="text-xs text-blue-900 underline">+9 other colors/patterns</a>
                                    <h1 className="max-w-[95%] font-medium mt-2">102PCS Purple and Gold Plastic Plates - Purple Disposable Plates - High End Purple Party Plates Include</h1>
                                    <div className="flex gap-1 items-center mt-2">
                                        <div className="rating flex max-w-full h-6 items-center">
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                        </div>
                                        <img src={downIcon} alt="" className="h-3"/>
                                        <h4 className="text-sm text-slate-500">254</h4>
                                    </div>
                                    <h4 className="text-sm text-slate-600">50+ bought in past month</h4>
                                    <div className="mt-3 flex gap-1 items-center">
                                        <div className='flex items-top font-medium text-lg'>
                                            <span className='block text-sm leading-[1.4] me-[1px]'>$</span>
                                            <span className='block text-[24px] leading-[1]'>253</span>
                                            <span className='block text-xs me-0.5 font-normal'>64</span>
                                        </div>
                                        <div className="text-slate-600 text-sm">($0.44/Count)</div>
                                    </div>
                                    <div className="text-sm mt-1.5">Delivery <span className="font-semibold">Wed, Nov 27</span></div>
                                    <div className="text-xs mt-1">Ships to Nigeria</div>
                                    <button className="bg-[#FFD814] py-2 px-3 rounded-full text-xs font-medium mt-2">Add to Cart</button>
                                </div>
                            </div>
                            <div className="product-card w-[250px] border rounded-md flex flex-col">
                                <div className="img-container h-[250px] flex items-center justify-center">
                                    <img src={zict} />
                                </div>
                                <div className="product-content border-t py-0.5 px-2 h-[325px] w-full">
                                    <a href="" className="text-xs text-blue-900 underline">+9 other colors/patterns</a>
                                    <h1 className="max-w-[95%] font-medium mt-2">102PCS Purple and Gold Plastic Plates - Purple Disposable Plates - High End Purple Party Plates Include</h1>
                                    <div className="flex gap-1 items-center mt-2">
                                        <div className="rating flex max-w-full h-6 items-center">
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                        </div>
                                        <img src={downIcon} alt="" className="h-3"/>
                                        <h4 className="text-sm text-slate-500">254</h4>
                                    </div>
                                    <h4 className="text-sm text-slate-600">50+ bought in past month</h4>
                                    <div className="mt-3 flex gap-1 items-center">
                                        <div className='flex items-top font-medium text-lg'>
                                            <span className='block text-sm leading-[1.4] me-[1px]'>$</span>
                                            <span className='block text-[24px] leading-[1]'>253</span>
                                            <span className='block text-xs me-0.5 font-normal'>64</span>
                                        </div>
                                        <div className="text-slate-600 text-sm">($0.44/Count)</div>
                                    </div>
                                    <div className="text-sm mt-1.5">Delivery <span className="font-semibold">Wed, Nov 27</span></div>
                                    <div className="text-xs mt-1">Ships to Nigeria</div>
                                    <button className="bg-[#FFD814] py-2 px-3 rounded-full text-xs font-medium mt-2">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="row flex gap-2 mb-2">
                            <div className="product-card w-[250px] border rounded-md flex flex-col">
                                <div className="img-container h-[250px] flex items-center justify-center">
                                    <img src={zict} />
                                </div>
                                <div className="product-content border-t py-0.5 px-2 h-[325px] w-full">
                                    <a href="" className="text-xs text-blue-900 underline">+9 other colors/patterns</a>
                                    <h1 className="max-w-[95%] font-medium mt-2">102PCS Purple and Gold Plastic Plates - Purple Disposable Plates - High End Purple Party Plates Include</h1>
                                    <div className="flex gap-1 items-center mt-2">
                                        <div className="rating flex max-w-full h-6 items-center">
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                        </div>
                                        <img src={downIcon} alt="" className="h-3"/>
                                        <h4 className="text-sm text-slate-500">254</h4>
                                    </div>
                                    <h4 className="text-sm text-slate-600">50+ bought in past month</h4>
                                    <div className="mt-3 flex gap-1 items-center">
                                        <div className='flex items-top font-medium text-lg'>
                                            <span className='block text-sm leading-[1.4] me-[1px]'>$</span>
                                            <span className='block text-[24px] leading-[1]'>253</span>
                                            <span className='block text-xs me-0.5 font-normal'>64</span>
                                        </div>
                                        <div className="text-slate-600 text-sm">($0.44/Count)</div>
                                    </div>
                                    <div className="text-sm mt-1.5">Delivery <span className="font-semibold">Wed, Nov 27</span></div>
                                    <div className="text-xs mt-1">Ships to Nigeria</div>
                                    <button className="bg-[#FFD814] py-2 px-3 rounded-full text-xs font-medium mt-2">Add to Cart</button>
                                </div>
                            </div>
                            <div className="product-card w-[250px] border rounded-md flex flex-col">
                                <div className="img-container h-[250px] flex items-center justify-center">
                                    <img src={zict} />
                                </div>
                                <div className="product-content border-t py-0.5 px-2 h-[325px] w-full">
                                    <a href="" className="text-xs text-blue-900 underline">+9 other colors/patterns</a>
                                    <h1 className="max-w-[95%] font-medium mt-2">102PCS Purple and Gold Plastic Plates - Purple Disposable Plates - High End Purple Party Plates Include</h1>
                                    <div className="flex gap-1 items-center mt-2">
                                        <div className="rating flex max-w-full h-6 items-center">
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                        </div>
                                        <img src={downIcon} alt="" className="h-3"/>
                                        <h4 className="text-sm text-slate-500">254</h4>
                                    </div>
                                    <h4 className="text-sm text-slate-600">50+ bought in past month</h4>
                                    <div className="mt-3 flex gap-1 items-center">
                                        <div className='flex items-top font-medium text-lg'>
                                            <span className='block text-sm leading-[1.4] me-[1px]'>$</span>
                                            <span className='block text-[24px] leading-[1]'>253</span>
                                            <span className='block text-xs me-0.5 font-normal'>64</span>
                                        </div>
                                        <div className="text-slate-600 text-sm">($0.44/Count)</div>
                                    </div>
                                    <div className="text-sm mt-1.5">Delivery <span className="font-semibold">Wed, Nov 27</span></div>
                                    <div className="text-xs mt-1">Ships to Nigeria</div>
                                    <button className="bg-[#FFD814] py-2 px-3 rounded-full text-xs font-medium mt-2">Add to Cart</button>
                                </div>
                            </div>
                            <div className="product-card w-[250px] border rounded-md flex flex-col">
                                <div className="img-container h-[250px] flex items-center justify-center">
                                    <img src={zict} />
                                </div>
                                <div className="product-content border-t py-0.5 px-2 h-[325px] w-full">
                                    <a href="" className="text-xs text-blue-900 underline">+9 other colors/patterns</a>
                                    <h1 className="max-w-[95%] font-medium mt-2">102PCS Purple and Gold Plastic Plates - Purple Disposable Plates - High End Purple Party Plates Include</h1>
                                    <div className="flex gap-1 items-center mt-2">
                                        <div className="rating flex max-w-full h-6 items-center">
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                        </div>
                                        <img src={downIcon} alt="" className="h-3"/>
                                        <h4 className="text-sm text-slate-500">254</h4>
                                    </div>
                                    <h4 className="text-sm text-slate-600">50+ bought in past month</h4>
                                    <div className="mt-3 flex gap-1 items-center">
                                        <div className='flex items-top font-medium text-lg'>
                                            <span className='block text-sm leading-[1.4] me-[1px]'>$</span>
                                            <span className='block text-[24px] leading-[1]'>253</span>
                                            <span className='block text-xs me-0.5 font-normal'>64</span>
                                        </div>
                                        <div className="text-slate-600 text-sm">($0.44/Count)</div>
                                    </div>
                                    <div className="text-sm mt-1.5">Delivery <span className="font-semibold">Wed, Nov 27</span></div>
                                    <div className="text-xs mt-1">Ships to Nigeria</div>
                                    <button className="bg-[#FFD814] py-2 px-3 rounded-full text-xs font-medium mt-2">Add to Cart</button>
                                </div>
                            </div>
                            <div className="product-card w-[250px] border rounded-md flex flex-col">
                                <div className="img-container h-[250px] flex items-center justify-center">
                                    <img src={zict} />
                                </div>
                                <div className="product-content border-t py-0.5 px-2 h-[325px] w-full">
                                    <a href="" className="text-xs text-blue-900 underline">+9 other colors/patterns</a>
                                    <h1 className="max-w-[95%] font-medium mt-2">102PCS Purple and Gold Plastic Plates - Purple Disposable Plates - High End Purple Party Plates Include</h1>
                                    <div className="flex gap-1 items-center mt-2">
                                        <div className="rating flex max-w-full h-6 items-center">
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                            <img src={starFull} className="h-4"/>
                                        </div>
                                        <img src={downIcon} alt="" className="h-3"/>
                                        <h4 className="text-sm text-slate-500">254</h4>
                                    </div>
                                    <h4 className="text-sm text-slate-600">50+ bought in past month</h4>
                                    <div className="mt-3 flex gap-1 items-center">
                                        <div className='flex items-top font-medium text-lg'>
                                            <span className='block text-sm leading-[1.4] me-[1px]'>$</span>
                                            <span className='block text-[24px] leading-[1]'>253</span>
                                            <span className='block text-xs me-0.5 font-normal'>64</span>
                                        </div>
                                        <div className="text-slate-600 text-sm">($0.44/Count)</div>
                                    </div>
                                    <div className="text-sm mt-1.5">Delivery <span className="font-semibold">Wed, Nov 27</span></div>
                                    <div className="text-xs mt-1">Ships to Nigeria</div>
                                    <button className="bg-[#FFD814] py-2 px-3 rounded-full text-xs font-medium mt-2">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}