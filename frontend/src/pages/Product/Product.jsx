import { starFill, downIcon, infoIcon, locationIcon, primeIcon, toaster, ri_1, ri_2, ri_3, ri_4, ri_5 } from "../../assets/images/images";

import ProductRating from "../../components/ProductRating";
import { fetchWithAuth, getMoneyParts } from "../../utils";

// Temporary imports till refactor
import { useState, useEffect, useRef, useCallback } from 'react';
import { resolvePath, useParams, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';


import leftArrow from '../../assets/images/left-arrow.png';
import rightArrow from '../../assets/images/right-arrow.png';
import ProductRatingsContainer from "../../components/ProductRatingsContainer";
import ProductReviewsContainer from "../../components/ProductReviewsContainer";

export default function Product(){
    const { id } = useParams();
    const navigate = useNavigate();

    // #TODO: Refactor and fix panel carousel
    const panelCarouselDivRef = useRef(null);
    const [isLeftButtonDim, setIsLeftButtonDim] = useState(true);
    const [isRightButtonDim, setIsRightButtonDim] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const [product, setProduct] = useState({});
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const [quantity, setQuantity] = useState(1);

    const { integerPart, decimalPart } = getMoneyParts(product?.price || "0");

    const qsRef = useCallback(node => {
        if (node !== null){
            const handleQuantityChange = () => {
                const options = node.options;
                Array.from(options).forEach((option) => option.textContent = option.value)
                const selectedOption = options[options.selectedIndex];
                selectedOption.textContent = `Quantity: ${selectedOption.value}`
            }
            node.addEventListener('change', handleQuantityChange);
        }
    }, [])

    const handleQuantityValueChange = (e) => {
        setQuantity(e.target.value);
    }

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetchWithAuth(`http://localhost:8000/api/products/${id}`);
                if (!response.ok){
                    if(response.status === 404){
                        setError(true);
                    }else{
                        throw new Error("Something went wrong.");
                    }}
                else {
                    const data = await response.json();
                    setProduct(data);
                }
            } catch(err) {
                setError(true);
                console.log("Error: ", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
        
    }, [id]);

    useEffect(() => {
        const fetchReviews = async () => {
            try{
                const response = await fetchWithAuth(`http://localhost:8000/api/products/${id}/ratings/`);
                if(response.ok){
                    const data = await response.json();
                    setReviews(data);
                } else{
                    console.log("Response is not okay");
                }
            } catch(err){
                console.log("Error: ", err);
            }
        };

        fetchReviews();
    }, [])

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

      const handleAddToCartClick = async () => {
        try {
            const response = await fetchWithAuth(`http://localhost:8000/api/cart/add/${product.id}/`, {
                method: 'POST',
                body: JSON.stringify({
                    'quantity': quantity
                })
            });
            if(!response.ok){
                console.error("Whoops!")
            }else{
                const data = await response.json();
                console.log(data);
                alert(`"${product.title.slice(0, 30)}..." has been added to your cart!`)
            }
        } catch (err){
            console.log(err);
        }
      }

      useEffect(() => {
        const handleScroll = () => {
            if(panelCarouselDivRef.current){
                const {scrollLeft, clientWidth, scrollWidth} = panelCarouselDivRef.current;
                setIsLeftButtonDim(scrollLeft === 0);
                setIsRightButtonDim((scrollLeft + clientWidth) >= scrollWidth);
            }
        }
    
        const panelCarouselDivCurrent = panelCarouselDivRef.current;

        if(!panelCarouselDivCurrent){
            return;
        }

        panelCarouselDivCurrent.addEventListener('scroll', handleScroll);

        return () => {
            if(panelCarouselDivCurrent){
                panelCarouselDivCurrent.removeEventListener('scroll', handleScroll);
            }
        }
      }, [])

      const images = Array(8).fill(product.picture);

    if (loading) return <h1>Loading</h1>  

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
              <h1 className="text-2xl font-bold text-red-600">Resource Not Found</h1>
              <p className="text-gray-700">The product you are looking for does not exist.</p>
              <button
                onClick={() => navigate('/')}
                className="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
              >
                Go Back to Homepage
              </button>
            </div>
          );
    }

    return (
        <div className="">
            <div className="heading-panel flex py-2 px-10 items-center border-b border-b-slate-300">
                <div className="logo me-28 font-bold text-lg">Logo</div>
                <div className="short-description font-medium text-sm me-28">
                    {product.title}
                </div>
                <div className="rating flex gap-x-1 me-10">
                    <span className="text-xs">{product.avg_rating}</span>
                    {product.avg_rating && <ProductRating 
                        className={'me-1'}
                        starHeight={'15px'}
                        avgRating={product.avg_rating}
                    />}
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
                        {product.avg_rating && <ProductRating 
                        className={'me-1'}
                        starHeight={'15px'}
                        avgRating={product.avg_rating}
                    />}
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
                        <div className="text-sm">Delivery <span className="font-semibold">Monday, December 13.</span></div>
                        <div className="text-sm mb-3">Order within <span className="text-red-500">9 hrs 17 mins</span></div>
                        <div className="text-sm">Or fastest delivery <span className="font-semibold">Monday, December 9</span></div>
                        <div className="flex items-center my-2.5">
                            <img src={locationIcon} alt="" className="h-3.5 me-2"/>
                            <span className="text-[11px] text-slate-500">Deliver to Nigeria</span>
                        </div>
                        <div className="stock-cart flex flex-col">
                            <h1 className="text-green-600 text-lg mb-2">In Stock</h1>
                            <select ref={qsRef} name="" id="quantitySelect" className="bg-slate-100 border border-slate-300 rounded-md p-1 text-sm mb-3"
                            value={quantity}
                            onChange={handleQuantityValueChange}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <button
                                className="text-[13px] bg-[#FFD814] py-1.5 rounded-full mb-1.5"
                                onClick={handleAddToCartClick}
                                >Add to Cart</button>
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
                        {product.rating && <ProductRating 
                            avgRating={product.avg_rating}
                            starHeight={"16px"}
                            />}
                        <span className="font-medium">{product.avg_rating} out of 5</span>
                    </div>
                    <span className="text-slate-700 text-sm mt-1.5">{product.rating_count} global ratings</span>
                    {/* Ratings Container */}
                    <ProductRatingsContainer ratings={product.star_ratings}/>
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
                <ProductReviewsContainer reviews={reviews} />
                </div>
            </div>
        </div>
    )
}