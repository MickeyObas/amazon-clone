import { starFill, kettle3, downIcon, infoIcon, locationIcon, primeIcon, toaster, ri_1, ri_2, ri_3, ri_4, ri_5, user } from "../../assets/images/images";

import StarRating from "../../components/StarRating";
import { fetchWithAuth, getMoneyParts } from "../../utils";

// Temporary imports till refactor
import { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';


import leftArrow from '../../assets/images/left-arrow.png';
import rightArrow from '../../assets/images/right-arrow.png';

export default function Product(){
    const { id } = useParams();

    // #TODO: Refactor and fix panel carousel
    const panelCarouselDivRef = useRef(null);
    const [isLeftButtonDim, setIsLeftButtonDim] = useState(true);
    const [isRightButtonDim, setIsRightButtonDim] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const [product, setProduct] = useState({});
    const { integerPart, decimalPart } = getMoneyParts(product?.price || "0");

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetchWithAuth(`http://localhost:8000/api/products/${id}`);
                if (response.ok){
                    const data = await response.json();
                    setProduct(data);
                    console.log(data);
                } else{
                    console.log("Product not fetched");
                }
            } catch(err) {
                console.log("Whoops", err)
            }
        };

        fetchProduct();
        
    }, [id]);

    const handleLeftButtonClick = () => {
        if (panelCarouselDivRef.current) {
            panelCarouselDivRef.current.scrollBy({ left: -1000, behavior: 'smooth' });
          }
      };

      const handleRightButtonClick = () => {
        if (panelCarouselDivRef.current) {
            panelCarouselDivRef.current.scrollBy({ left: 1000, behavior: 'smooth' });
        }
      };

      useEffect(() => {
        const handleScroll = () => {
            if(panelCarouselDivRef.current){
                const {scrollLeft, clientWidth, scrollWidth} = panelCarouselDivRef.current;
                console.log(`${scrollLeft} + ${clientWidth} = ${scrollLeft+clientWidth} ? ${scrollWidth}`);
                setIsLeftButtonDim(scrollLeft === 0);
                setIsRightButtonDim((scrollLeft + clientWidth) >= scrollWidth);
            }
        }

        const panelCarouselDivCurrent = panelCarouselDivRef.current;
        panelCarouselDivCurrent.addEventListener('scroll', handleScroll);

        return () => panelCarouselDivCurrent.removeEventListener('scroll', handleScroll);
      }, [])

      const images = [ri_1, ri_2, ri_3, ri_4, ri_5, ri_1, ri_2, ri_3, ri_4, ri_5];


    return (
        <div className="">
            <div className="heading-panel flex py-2 px-10 items-center border-b border-b-slate-300">
                <div className="logo me-28 font-bold text-lg">Logo</div>
                <div className="short-description font-medium text-sm me-28">
                    {product.title}
                </div>
                <div className="rating flex gap-x-1 me-10">
                    <span className="text-xs">{product.rating}</span>
                    <div className="flex me-[1px]">
                        <img src={starFill} alt="" className="h-[15px]"/>
                        <img src={starFill} alt="" className="h-[15px]"/>
                        <img src={starFill} alt="" className="h-[15px]"/>
                        <img src={starFill} alt="" className="h-[15px]"/>
                        <img src={starFill} alt="" className="h-[15px]"/>
                    </div>
                    <span className="text-[11px] self-start text-slate-500">{product.rating_count}</span>
                </div>
                <div className="pricing flex items-center">
                    <span className="percent-off text-2xl text-red-600 me-2">-20%</span>
                    <span className="">
                        <div className='flex items-top font-medium text-lg text-red-600 me-1'>
                            <span className='block text-sm leading-[1.4] me-[1px]'>$</span>
                            <span className='block text-[24px] leading-[1]'>{integerPart}</span>
                            <span className='block text-xs me-0.5 font-normal'>{decimalPart}</span>
                        </div>
                    </span>
                    <span className="self-end text-sm text-slate-600 line-through">${product.price}</span>
                </div>
                <div className="product-picture h-10 flex items-center ms-auto">
                    <img src={product.picture} alt="" className="max-h-full"/>
                </div>
            </div>
            <div className="content grid grid-cols-12 py-10 px-3">
                <div className="col-span-5 flex flex-col ms-20 items-center sticky top-5 max-h-screen">
                    <div className="img-container h-96">
                        <img src={product.picture} alt="" className="h-full"/>
                    </div>
                    <div className="my-3 text-sm text-slate-500 font-medium">Roll over image to zoom in</div>
                    <div className="image-switch flex gap-x-2">
                        <div className="img-container w-24 rounded-lg border border-slate-300 flex items-center justify-center py-4 px-1">
                            <img src={product.picture} alt="" className="max-w-20"/>
                        </div>
                        <div className="img-container w-24 rounded-lg border border-slate-300 flex items-center justify-center">
                            <img src={product.picture} alt="" className="max-w-20"/>
                        </div>
                        <div className="img-container w-24 rounded-lg border border-slate-300 flex items-center justify-center">
                            <img src={product.picture} alt="" className="max-w-20"/>
                        </div>
                        <div className="img-container w-24 rounded-lg border border-slate-300 flex items-center justify-center">
                            <img src={product.picture} alt="" className="max-w-20"/>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 product-info col ms-10 flex flex-col">
                    <h1 className="font-medium text-2xl mb-1">{product.description}</h1>
                    <div className="text-sm text-slate-500 mb-1">Visit the OVENTE store</div>
                    <div className="rating flex items-center mb-1">
                        <span className="text-sm me-2">{product.avg_rating}</span>
                        <div className="flex me-1.5">
                            <img src={starFill} alt="" className="h-[15px]"/>
                            <img src={starFill} alt="" className="h-[15px]"/>
                            <img src={starFill} alt="" className="h-[15px]"/>
                            <img src={starFill} alt="" className="h-[15px]"/>
                            <img src={starFill} alt="" className="h-[15px]"/>
                        </div>
                        <img src={downIcon} alt="" className="h-3"/>
                        <span className="text-sm text-slate-500 ms-5">{product.rating_count} ratings</span>
                    </div>
                    <div className="text-sm">800+ bought in the last month</div>
                    <hr className="mt-1.5 mb-4 border-slate-300"/>
                    <div className="flex items-center mb-1">
                        <span className="percent-off text-2xl text-red-600 me-2">-20%</span>
                        <span className="">
                            <div className='flex items-top font-medium text-lg  me-1'>
                                <span className='block text-sm leading-[1.4] me-[1px]'>$</span>
                                <span className='block text-[24px] leading-[1]'>{integerPart}</span>
                                <span className='block text-xs me-0.5 font-normal'>{decimalPart}</span>
                            </div>
                        </span>
                    </div>
                    <div className="text-xs text-slate-500">List price: <span className="line-through">$72.99</span></div>
                    <div className="flex items-center mt-2.5">
                        <div className="text-sm text-slate-500 me-1.5">$63.48 Shipping & Import Fees Deposit to Nigeria Details</div>
                        <img src={downIcon} alt="" className="h-2.5"/>
                    </div>
                    <div className="flex items-center mt-2">
                        <img src={infoIcon} alt="" className="h-[18px]"/>
                        <span className="ms-2 text-sm">Sales taxes may apply at checkout</span>
                    </div>
                    <table className="product-info-list w-3/4 mt-2 table-fixed">
                        <tbody className="text-sm">
                            {product.attributes && product.attributes.map((attribute, idx) => (
                            <tr className="" key={idx}>
                                <td className="font-semibold py-0.5 w-[55%]">{attribute.attribute}</td>
                                <td className="">{attribute.value}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <hr className="mt-2 mb-3 border-slate-300"/>
                    <div className="about flex flex-col">
                        <h2 className="font-bold text-[17px] mb-1">About this item</h2>
                        <ul className="text-sm list-disc ps-5 flex flex-col gap-y-2">
                            {product.highlights && product.highlights.map((highlight, idx) => (
                                <li key={idx}>{highlight.title ? 
                                    highlight.title + ": " : 
                                    ""
                                }{highlight.description}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="border flex flex-col w-[80%] ms-auto px-4 py-4 rounded-md">
                        <span className="mb-4">
                            <div className='flex items-top font-medium text-lg  me-1'>
                                <span className='block text-sm leading-[1.4] me-[1px]'>$</span>
                                <span className='block text-3xl leading-[1]'>{integerPart}</span>
                                <span className='block text-xs me-0.5 font-normal'>{decimalPart}</span>
                            </div>
                        </span>
                        <span className="text-slate-600 text-sm">$100.35 Shipping & Import Fees</span>
                        <div className="flex items-center">
                            <span className="text-slate-600 text-sm me-1.5">Deposit to Nigeria Details</span>
                            <img src={downIcon} alt="" className="h-3"/>
                        </div>
                        <div className="flex items-start my-2.5">
                            <img src={infoIcon} alt="" className="h-[18px]"/>
                            <span className="ms-2 text-sm w-[84%]">Sales taxes may apply at checkout</span>
                        </div>
                        <div className="text-sm">Delivery <span className="font-semibold">Monday, December 2.</span></div>
                        <div className="text-sm mb-3">Order within <span className="text-red-500">9 hrs 17 mins</span></div>
                        <div className="text-sm">Or fastest delivery <span className="font-semibold">Thursday, November 21</span></div>
                        <div className="flex items-center my-2.5">
                            <img src={locationIcon} alt="" className="h-3.5 me-2"/>
                            <span className="text-[11px] text-slate-500">Deliver to Nigeria</span>
                        </div>
                        <div className="stock-cart flex flex-col">
                            <h1 className="text-green-600 text-lg mb-2">In Stock</h1>
                            <select name="" id="" className="bg-slate-100 border border-slate-300 rounded-md p-1 text-sm mb-3">
                                <option value="">Quantity: 1</option>
                            </select>
                            <button className="text-[13px] bg-[#FFD814] py-1.5 rounded-full mb-1.5">Add to Cart</button>
                            <button className="text-[13px] bg-[#ff8914] py-1.5 rounded-full mb-1.5">Buy Now</button>
                        </div>
                        <table className="w-full table-fixed mt-2">
                            <tbody className="text-xs text-slate-500">
                                <tr>
                                    <td className="py-1">Ships from</td>
                                    <td>Amazon</td>
                                </tr>
                                <tr>
                                    <td className="py-1">Sold by</td>
                                    <td>Pattern Direct</td>
                                </tr>
                                <tr>
                                    <td className="py-1">Returns</td>
                                    <td>Returnable until Jan 31, 2025</td>
                                </tr>
                                <tr>
                                    <td className="py-1">Support</td>
                                    <td>Product support included</td>
                                </tr>
                                <tr>
                                    <td className="py-1">Payment</td>
                                    <td>Secure transaction</td>
                                </tr>
                                <tr>
                                    <td className="py-1">Customer Service</td>
                                    <td>Amazon</td>
                                </tr>
                                <tr>
                                    <td className="py-1">Gift options</td>
                                    <td>Available at checkout</td>
                                </tr>
                            </tbody>
                        </table>
                        <hr className="my-3 border-slate-300"/>
                        <button className="text-[13px] border border-slate-600 py-1 px-1.5 rounded-md">Add to List</button>
                    </div>
                    <div className="ad border w-[80%] ms-auto mt-5 py-3 px-3">
                        <div className="flex flex-col">
                            <div className="flex justify-center mb-5">
                                <img src={toaster} alt="" className="h-32"/>
                            </div>
                            <div className="max-w-[70%] leading-4">
                                <span className="title font-semibold text-sm">
                                    6 QT Ceramic Slow Cooker, Torquoise, by GreenLife...
                                </span>
                            </div>
                            <div className="rating flex gap-x-1.5 items-center mt-1">
                                <span className="text-xs">5.0</span>
                                <div className="flex">
                                    <img src={starFill} alt="" className="h-[13px]"/>
                                    <img src={starFill} alt="" className="h-[13px]"/>
                                    <img src={starFill} alt="" className="h-[13px]"/>
                                    <img src={starFill} alt="" className="h-[13px]"/>
                                    <img src={starFill} alt="" className="h-[13px]"/>
                                </div>
                                <span className="text-xs text-slate-500">245</span>
                            </div>
                            <span className="text-red-700 mt-0.5 flex">
                                <div className='flex items-top font-medium text-lg  me-1'>
                                    <span className='block text-sm leading-[1.4] me-[1px]'>$</span>
                                    <span className='block text-[24px] leading-[1]'>64</span>
                                    <span className='block text-xs me-0.5 font-normal'>80</span>
                                </div>
                                <img src={primeIcon} alt="" className="h-6 -ms-1"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mb-1 mx-3.5 border-slate-300"/>
            <div className="product-information px-3.5 py-6">
                <h2 className="text-2xl font-semibold mb-4">Product information</h2>
                <div className="grid grid-cols-2 py-7 ps-3.5 gap-x-10">
                    <table className="table-fixed">
                        <tbody>
                            {product.attributes && product.attributes.map((attribute, idx) => (
                            <tr key={idx} className="text-sm border border-t-0 border-r-0 border-l-0 border-b-slate-300">
                                <td className="font-semibold py-1.5 w-1/2">{attribute.attribute}</td>
                                <td className="py-1.5">{attribute.value}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <div>
                        <h2 className="font-medium text-lg mt-7">Warranty & Support</h2>
                        <hr className="my-3 border-slate-300"/>
                        <p className="text-sm"><span className="font-semibold">Product Warranty</span>: For warranty information about this product, please click here</p>
                        <h2 className="font-medium text-lg mt-3.5">Feedback</h2>
                        <hr className="my-3 border-slate-300"/>
                        <p className="text-sm">Would you like to tell us about a lower price?</p>
                    </div>
                </div>
            </div>
            <hr className="mb-1 mx-3.5 border-slate-300"/>
            <div className="review-section grid grid-cols-12 px-5 py-4">
                <div className="col-span-4 flex flex-col">
                    <h1 className="font-semibold text-2xl">Customer reviews</h1>
                    <div className="rating flex gap-x-1.5 items-center mt-1">
                        <div className="flex">
                            <img src={starFill} alt="" className="h-5"/>
                            <img src={starFill} alt="" className="h-5"/>
                            <img src={starFill} alt="" className="h-5"/>
                            <img src={starFill} alt="" className="h-5"/>
                            <img src={starFill} alt="" className="h-5"/>
                        </div>
                        <span className="font-medium">4.6 out of 5</span>
                    </div>
                    <span className="text-slate-700 text-sm mt-1.5">33 global ratings</span>
                    <div className="ratings mt-4 flex  gap-y-3 flex-col">
                        <div className="rating-container flex items-center gap-x-4">
                            <span className="text-sm text-slate-500">5 star</span>
                            <div className="rating-bar-container w-[220px] h-5 relative flex">
                                <div className="rating-bar h-full bg-[#ff9d14] w-[70%] py-1 rounded-s-[4px]"></div>
                                <div className="rating-bar-empty h-full flex-1 py-1 border-[1.5px] border-s-0 border-slate-400 rounded-e-[4px]"></div>
                            </div>
                            <span className="text-sm text-slate-500">70%</span>
                        </div>
                        <div className="rating-container flex items-center gap-x-4">
                            <span className="text-sm text-slate-500">4 star</span>
                            <div className="rating-bar-container w-[220px] h-5 relative flex">
                                <div className="rating-bar h-full bg-[#ff9d14] w-[10%] py-1 rounded-s-[4px]"></div>
                                <div className="rating-bar-empty h-full flex-1 py-1 border-[1.5px] border-s-0 border-slate-400 rounded-e-[4px]"></div>
                            </div>
                            <span className="text-sm text-slate-500">10%</span>
                        </div>
                        <div className="rating-container flex items-center gap-x-4">
                            <span className="text-sm text-slate-500">3 star</span>
                            <div className="rating-bar-container w-[220px] h-5 relative flex">
                                <div className="rating-bar h-full bg-[#ff9d14] w-[5%] py-1 rounded-s-[4px]"></div>
                                <div className="rating-bar-empty h-full flex-1 py-1 border-[1.5px] border-s-0 border-slate-400 rounded-e-[4px]"></div>
                            </div>
                            <span className="text-sm text-slate-500">5%</span>
                        </div>
                        <div className="rating-container flex items-center gap-x-4">
                            <span className="text-sm text-slate-500">2 star</span>
                            <div className="rating-bar-container w-[220px] h-5 relative flex">
                                <div className="rating-bar h-full bg-[#ff9d14] w-[10%] py-1 rounded-s-[4px]"></div>
                                <div className="rating-bar-empty h-full flex-1 py-1 border-[1.5px] border-s-0 border-slate-400 rounded-e-[4px]"></div>
                            </div>
                            <span className="text-sm text-slate-500">10%</span>
                        </div>
                        <div className="rating-container flex items-center gap-x-4">
                            <span className="text-sm text-slate-500">1 star</span>
                            <div className="rating-bar-container w-[220px] h-5 relative flex">
                                <div className="rating-bar h-full bg-[#ff9d14] w-[5%] py-1 rounded-s-[4px]"></div>
                                <div className="rating-bar-empty h-full flex-1 py-1 border-[1.5px] border-s-0 border-slate-400 rounded-e-[4px]"></div>
                            </div>
                            <span className="text-sm text-slate-500">5%</span>
                        </div>
                    </div>
                    <hr className="mt-6 w-4/5 border-slate-300"/>
                    <div className="flex flex-col gap-y-3 py-4">
                        <h2 className="text-lg font-semibold">Review this product</h2>
                        <span className="text-sm">Share your thoughts with other customers</span>
                        <button className="w-[75%] text-center text-[13px] border border-slate-400 rounded-full py-1 px-3">Write a customer review</button>
                    </div>
                    <hr className="mt-6 w-4/5 border-slate-300"/>
                </div>
                <div className="col-span-full col-start-5 flex flex-col">
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold text-lg">Reviews with images</h2>
                        <span className="text-sm text-slate-500">See all photos</span>
                    </div>
                    <div className="row pt-[1px] pb-4 px-4 gap-4">
                    <div 
                    className="bg-white w-full h-[200px] pt-5 px-4 flex flex-col relative"
                    onMouseEnter={()  => setIsHovered(true)}
                    onMouseLeave={()  => setIsHovered(false)}
                    >
                        <div 
                            ref={panelCarouselDivRef}
                            className='inner-content flex gap-x-7  overflow-x-scroll pb-[7px]'>
                            <button 
                            className={`absolute top-[50%] left-0 bg-white h-[20%] w-12 -translate-y-2/4 flex justify-center items-center ${isLeftButtonDim && 'bg-opacity-60'} rounded-e-md  ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                            onClick={handleLeftButtonClick}
                            >
                                <img src={leftArrow} className={`w-5 ${isLeftButtonDim && 'bg-opacity-60'}`}/>
                            </button>
                            <button
                            className={`absolute top-[50%] bg-white h-[20%] w-12 -translate-y-2/4 flex justify-center items-center right-0 ${isRightButtonDim && 'bg-opacity-60'} rounded-s-md ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                            onClick={handleRightButtonClick}
                            >
                                <img src={rightArrow} className={`w-5 ${isRightButtonDim && 'bg-opacity-60'}`}/>
                            </button>
                            {images.map((image, idx) => (
                                <div key={idx} className='img-container h-full flex-shrink-0'>
                                    <img src={image} className='h-full'/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <hr className="border-slate-300"/>
                <div className="flex flex-col">
                    <h2 className="font-semibold text-lg mt-3 mb-6">Top reviews from Konoha Village</h2>
                    <div className="flex flex-col">
                        <div className="review-container flex flex-col mb-7">
                            <div className="flex items-center mb-1.5">
                                <img src={user} alt="" className="h-8"/>
                                <span className="text-[13px] ms-3.5">Uzumaki N.</span>
                            </div>
                            <div className="flex items-center">
                                <div className="flex me-3">
                                    <img src={starFill} alt="" className="h-3.5"/>
                                    <img src={starFill} alt="" className="h-3.5"/>
                                    <img src={starFill} alt="" className="h-3.5"/>
                                    <img src={starFill} alt="" className="h-3.5"/>
                                    <img src={starFill} alt="" className="h-3.5"/>
                                </div>
                                <span className="font-semibold text-sm">
                                    It automatically shuts off when heated
                                </span>
                            </div>
                            <span className="text-sm text-slate-500 mb-1">Reviewed in Konoha Village on February 31, 2023</span>
                            <span className="text-xs text-red-600 mb-1">Verified Purchase</span>
                            <div className="review-text max-w-[70%] text-sm">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tempore maxime repellendus sed quos. Harum beatae temporibus veritatis, culpa vitae atque deserunt voluptas aliquid dolorum cum iusto facere iste recusandae.
                            <br /><br />
                            Such a great product!<br/><br/>
                            I wholly recommend!!!
                            </div>
                            <div className="flex flex-col mt-2">
                                <div className="text-sm text-slate-500">
                                    One person found this helpful
                                </div>
                                <div className="flex mt-2 items-center gap-x-4">
                                    <button className="text-sm border border-slate-600  rounded-full px-6 py-1">Helpful</button>
                                    <div className="h-3/5 w-[1px] bg-slate-300"></div>
                                    <button className="text-sm text-slate-600  rounded-full py-1">Report</button>
                                </div>
                            </div>
                        </div>
                        <div className="review-container flex flex-col mb-7">
                            <div className="flex items-center mb-1.5">
                                <img src={user} alt="" className="h-8"/>
                                <span className="text-[13px] ms-3.5">Uzumaki N.</span>
                            </div>
                            <div className="flex items-center">
                                <div className="flex me-3">
                                    <img src={starFill} alt="" className="h-3.5"/>
                                    <img src={starFill} alt="" className="h-3.5"/>
                                    <img src={starFill} alt="" className="h-3.5"/>
                                    <img src={starFill} alt="" className="h-3.5"/>
                                    <img src={starFill} alt="" className="h-3.5"/>
                                </div>
                                <span className="font-semibold text-sm">
                                    It automatically shuts off when heated
                                </span>
                            </div>
                            <span className="text-sm text-slate-500 mb-1">Reviewed in Konoha Village on February 31, 2023</span>
                            <span className="text-xs text-red-600 mb-1">Verified Purchase</span>
                            <div className="review-text max-w-[70%] text-sm">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tempore maxime repellendus sed quos. Harum beatae temporibus veritatis, culpa vitae atque deserunt voluptas aliquid dolorum cum iusto facere iste recusandae.
                            <br /><br />
                            Such a great product!<br/><br/>
                            I wholly recommend!!!
                            </div>
                            <div className="flex flex-col mt-2">
                                <div className="text-sm text-slate-500">
                                    One person found this helpful
                                </div>
                                <div className="flex mt-2 items-center gap-x-4">
                                    <button className="text-sm border border-slate-600  rounded-full px-6 py-1">Helpful</button>
                                    <div className="h-3/5 w-[1px] bg-slate-300"></div>
                                    <button className="text-sm text-slate-600  rounded-full py-1">Report</button>
                                </div>
                            </div>
                        </div>
                        <div className="review-container flex flex-col mb-7">
                            <div className="flex items-center mb-1.5">
                                <img src={user} alt="" className="h-8"/>
                                <span className="text-[13px] ms-3.5">Uzumaki N.</span>
                            </div>
                            <div className="flex items-center">
                                <div className="flex me-3">
                                    <img src={starFill} alt="" className="h-3.5"/>
                                    <img src={starFill} alt="" className="h-3.5"/>
                                    <img src={starFill} alt="" className="h-3.5"/>
                                    <img src={starFill} alt="" className="h-3.5"/>
                                    <img src={starFill} alt="" className="h-3.5"/>
                                </div>
                                <span className="font-semibold text-sm">
                                    It automatically shuts off when heated
                                </span>
                            </div>
                            <span className="text-sm text-slate-500 mb-1">Reviewed in Konoha Village on February 31, 2023</span>
                            <span className="text-xs text-red-600 mb-1">Verified Purchase</span>
                            <div className="review-text max-w-[70%] text-sm">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tempore maxime repellendus sed quos. Harum beatae temporibus veritatis, culpa vitae atque deserunt voluptas aliquid dolorum cum iusto facere iste recusandae.
                            <br /><br />
                            Such a great product!<br/><br/>
                            I wholly recommend!!!
                            </div>
                            <div className="flex flex-col mt-2">
                                <div className="text-sm text-slate-500">
                                    One person found this helpful
                                </div>
                                <div className="flex mt-2 items-center gap-x-4">
                                    <button className="text-sm border border-slate-600  rounded-full px-6 py-1">Helpful</button>
                                    <div className="h-3/5 w-[1px] bg-slate-300"></div>
                                    <button className="text-sm text-slate-600  rounded-full py-1">Report</button>
                                </div>
                            </div>
                        </div>
                        <div className="review-container flex flex-col mb-7">
                            <div className="flex items-center mb-1.5">
                                <img src={user} alt="" className="h-8"/>
                                <span className="text-[13px] ms-3.5">Uzumaki N.</span>
                            </div>
                            <div className="flex items-center">
                                <div className="flex me-3">
                                    <img src={starFill} alt="" className="h-3.5"/>
                                    <img src={starFill} alt="" className="h-3.5"/>
                                    <img src={starFill} alt="" className="h-3.5"/>
                                    <img src={starFill} alt="" className="h-3.5"/>
                                    <img src={starFill} alt="" className="h-3.5"/>
                                </div>
                                <span className="font-semibold text-sm">
                                    It automatically shuts off when heated
                                </span>
                            </div>
                            <span className="text-sm text-slate-500 mb-1">Reviewed in Konoha Village on February 31, 2023</span>
                            <span className="text-xs text-red-600 mb-1">Verified Purchase</span>
                            <div className="review-text max-w-[70%] text-sm">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tempore maxime repellendus sed quos. Harum beatae temporibus veritatis, culpa vitae atque deserunt voluptas aliquid dolorum cum iusto facere iste recusandae.
                            <br /><br />
                            Such a great product!<br/><br/>
                            I wholly recommend!!!
                            </div>
                            <div className="flex flex-col mt-2">
                                <div className="text-sm text-slate-500">
                                    One person found this helpful
                                </div>
                                <div className="flex mt-2 items-center gap-x-4">
                                    <button className="text-sm border border-slate-600  rounded-full px-6 py-1">Helpful</button>
                                    <div className="h-3/5 w-[1px] bg-slate-300"></div>
                                    <button className="text-sm text-slate-600  rounded-full py-1">Report</button>
                                </div>
                            </div>
                        </div>
                        <div className="review-container flex flex-col mb-7">
                            <div className="flex items-center mb-1.5">
                                <img src={user} alt="" className="h-8"/>
                                <span className="text-[13px] ms-3.5">Uzumaki N.</span>
                            </div>
                            <div className="flex items-center">
                                <div className="flex me-3">
                                    <img src={starFill} alt="" className="h-3.5"/>
                                    <img src={starFill} alt="" className="h-3.5"/>
                                    <img src={starFill} alt="" className="h-3.5"/>
                                    <img src={starFill} alt="" className="h-3.5"/>
                                    <img src={starFill} alt="" className="h-3.5"/>
                                </div>
                                <span className="font-semibold text-sm">
                                    It automatically shuts off when heated
                                </span>
                            </div>
                            <span className="text-sm text-slate-500 mb-1">Reviewed in Konoha Village on February 31, 2023</span>
                            <span className="text-xs text-red-600 mb-1">Verified Purchase</span>
                            <div className="review-text max-w-[70%] text-sm">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tempore maxime repellendus sed quos. Harum beatae temporibus veritatis, culpa vitae atque deserunt voluptas aliquid dolorum cum iusto facere iste recusandae.
                            <br /><br />
                            Such a great product!<br/><br/>
                            I wholly recommend!!!
                            </div>
                            <div className="flex flex-col mt-2">
                                <div className="text-sm text-slate-500">
                                    One person found this helpful
                                </div>
                                <div className="flex mt-2 items-center gap-x-4">
                                    <button className="text-sm border border-slate-600  rounded-full px-6 py-1">Helpful</button>
                                    <div className="h-3/5 w-[1px] bg-slate-300"></div>
                                    <button className="text-sm text-slate-600  rounded-full py-1">Report</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}