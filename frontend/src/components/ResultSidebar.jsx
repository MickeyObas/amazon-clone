import { useCategory } from '../context/CategoryContext';
import { useEffect, useState } from 'react';
import { fetchWithAuth } from '../utils';
import { starFull, starEmpty } from "../assets/images/images"
import RangeSlider from 'react-range-slider-input';


export default function ResultSidebar(){
    const [sliderValue, setSliderValue] = useState([0, 2000]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [categoryData, setCategoryData] = useState({});

    const handleSliderChange = (newValue) => {
        setSliderValue(newValue);
    }

    const { selectedCategory } = useCategory();

    useEffect(() => {
        const fetchCategoryData = async () => {
            try {
                const response = await fetchWithAuth(`http://localhost:8000/api/categories/${selectedCategory}/`);
                if(!response.ok){
                    if(response.status === 404){
                        setError(true);
                    } else{
                        setError(true);
                        console.log("Something went wrong");
                    }
                } else{
                    const data = await response.json();
                    setCategoryData(data);
                }
            } catch(err){
                console.log("Error: ", err);
            } finally{
                setLoading(false);
            }
        };

        fetchCategoryData();

    }, [selectedCategory])
    
    return (
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
                    <div className="rating flex max-w-full gap-x-0.5 items-center">
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
    )
}
