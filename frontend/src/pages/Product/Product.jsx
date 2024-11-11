import { starFill, zict, headphones, headphones2, kettles, kettle3, downIcon, infoIcon } from "../../assets/images/images";
import StarRating from "../../components/StarRating";

export default function Product(){
    return (
        <div className="">
            <div className="heading-panel flex py-2 px-10 items-center border-b border-b-slate-300">
                <div className="logo me-28 font-bold text-lg">Logo</div>
                <div className="short-description font-medium text-sm me-28">
                    1.8 Liter Electric Glass Kettle Hot Water Boiler, BPA-Free, 1500W
                </div>
                <div className="rating flex gap-x-1 me-10">
                    <span className="text-xs">4.1</span>
                    <div className="flex me-[1px]">
                        <img src={starFill} alt="" className="h-[15px]"/>
                        <img src={starFill} alt="" className="h-[15px]"/>
                        <img src={starFill} alt="" className="h-[15px]"/>
                        <img src={starFill} alt="" className="h-[15px]"/>
                        <img src={starFill} alt="" className="h-[15px]"/>
                    </div>
                    <span className="text-[11px] self-start text-slate-500">131</span>
                </div>
                <div className="pricing flex items-center">
                    <span className="percent-off text-2xl text-red-600 me-2">-20%</span>
                    <span className="">
                        <div className='flex items-top font-medium text-lg text-red-600 me-1'>
                            <span className='block text-sm leading-[1.4] me-[1px]'>$</span>
                            <span className='block text-[24px] leading-[1]'>39</span>
                            <span className='block text-xs me-0.5 font-normal'>99</span>
                        </div>
                    </span>
                    <span className="self-end text-sm text-slate-600 line-through">$49.99</span>
                </div>
                <div className="product-picture h-10 flex items-center ms-auto">
                    <img src={kettle3} alt="" className="max-h-full"/>
                </div>
            </div>
            <div className="content grid grid-cols-12 py-10 px-3">
                <div className="col-span-5 flex flex-col ms-20 items-center">
                    <div className="img-container h-96">
                        <img src={kettle3} alt="" className="h-full"/>
                    </div>
                    <div className="my-3 text-sm text-slate-500 font-medium">Roll over image to zoom in</div>
                    <div className="image-switch flex gap-x-2">
                        <div className="img-container w-24 rounded-lg border border-slate-300 flex items-center justify-center py-4 px-1">
                            <img src={kettle3} alt="" className="max-w-20"/>
                        </div>
                        <div className="img-container w-24 rounded-lg border border-slate-300 flex items-center justify-center">
                            <img src={kettle3} alt="" className="max-w-20"/>
                        </div>
                        <div className="img-container w-24 rounded-lg border border-slate-300 flex items-center justify-center">
                            <img src={kettle3} alt="" className="max-w-20"/>
                        </div>
                        <div className="img-container w-24 rounded-lg border border-slate-300 flex items-center justify-center">
                            <img src={kettle3} alt="" className="max-w-20"/>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 product-info col ms-10 flex flex-col">
                    <h1 className="font-medium text-2xl mb-1">OVENTE Electric Glass Kettle Hot Water Boiler 1.8 Liter BPA Free - 1500W w/Stainless Steel Infuser, Set Temperature Control, Auto Shut Off, Portable Fast Instant Heater for Coffee & Tea - KG661S</h1>
                    <div className="text-sm text-slate-500 mb-1">Visit the OVENTE store</div>
                    <div className="rating flex items-center mb-1">
                        <span className="text-sm me-2">4.1</span>
                        <div className="flex me-1.5">
                            <img src={starFill} alt="" className="h-[15px]"/>
                            <img src={starFill} alt="" className="h-[15px]"/>
                            <img src={starFill} alt="" className="h-[15px]"/>
                            <img src={starFill} alt="" className="h-[15px]"/>
                            <img src={starFill} alt="" className="h-[15px]"/>
                        </div>
                        <img src={downIcon} alt="" className="h-3"/>
                        <span className="text-sm text-slate-500 ms-5">131 ratings</span>
                    </div>
                    <div className="text-sm">800+ bought in the last month</div>
                    <hr className="mt-1.5 mb-4"/>
                    <div className="flex items-center mb-1">
                        <span className="percent-off text-2xl text-red-600 me-2">-20%</span>
                        <span className="">
                            <div className='flex items-top font-medium text-lg  me-1'>
                                <span className='block text-sm leading-[1.4] me-[1px]'>$</span>
                                <span className='block text-[24px] leading-[1]'>39</span>
                                <span className='block text-xs me-0.5 font-normal'>99</span>
                            </div>
                        </span>
                    </div>
                    <div className="text-xs text-slate-500">List price: <span className="line-through">$49.99</span></div>
                    <div className="flex items-center mt-2.5">
                        <div className="text-sm text-slate-500 me-1.5">$63.48 Shipping & Import Fees Deposit to Nigeria Details</div>
                        <img src={downIcon} alt="" className="h-2.5"/>
                    </div>
                    <div className="flex items-center mt-2">
                        <img src={infoIcon} alt="" className="h-[18px]"/>
                        <span className="ms-2 text-sm">Sales taxes may apply at checkout</span>
                    </div>
                </div>
                <div className="col-span-3">Col 3</div>
            </div>
        </div>
    )
}