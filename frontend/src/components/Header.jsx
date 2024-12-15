import { useContext, useEffect, useState, createContext} from 'react';
import { json, useNavigate } from 'react-router-dom';

import AmazonLogo from '../assets/images/amazon-white.png';
import locationIcon from '../assets/images/location2.png';
import usaIcon from '../assets/images/united-states.png';
import downIcon from '../assets/images/arrow-down1.png';
import cartIcon from '../assets/images/trolley.png';
import searchIcon from '../assets/images/search.png';
import menuIcon from '../assets/images/menu1.png';

import { AuthContext } from '../context/AuthContext.jsx';
import { useCategory } from '../context/CategoryContext.jsx';
import { fetchWithAuth } from '../utils';
import { useCart } from '../context/CartContext.jsx';


export default function Header(){

    const { user } = useContext(AuthContext);
    const [searchIsFocused, setSearchIsFocused] = useState(false);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const { cart, settCart } = useCart();

    const { selectedCategory, setSelectedCategory } = useCategory();    

    let categoryTitle;
    let categoryId;

    if(selectedCategory){
        categoryTitle = selectedCategory.split("-")[0];
        categoryId = selectedCategory.split("-")[1];
    }
    const [searchCategory, setSearchCategory] = useState(categoryTitle || '');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetchWithAuth('http://localhost:8000/api/categories/');
                if(!response.ok){
                    if(response.status === 404){
                        setError(true);
                    }else{
                        console.log("Something went wrong");
                    }
                } else{
                    const data = await response.json();
                    setCategories(data);
                }
            } catch(err){
                setError(true);
                console.log("Error: ", err);
            } finally{
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchCart = async () => {
            const response = await fetchWithAuth('http://localhost:8000/api/cart/');
            if(!response.ok){
                console.log("Whoops, cart fetch go bad, brr!");
            }else{
                const data = await response.json();
                settCart(data);
                localStorage.setItem('cart', JSON.stringify(data))
            }
        };

        fetchCart();

    }, [])

    const handleCategorySelect = (e) => {
        const categoryId = (e.target.value);
        if(categories){
            const category = categories.find((category) => category.id.toString() === categoryId)
            // Store category as 'title-id' string for varying uses
            setSelectedCategory(`${category.title}-${category.id}`);
            localStorage.setItem('selectedCategory', JSON.stringify(`${category.title}-${category.id}`))
            setSearchCategory(category.title);
        }
    }

    const handleSearchQueryChange = (e) => {
        setSearchQuery(e.target.value);
    }

    const handleSearchButtonClick = () => {
        if(!searchQuery && !searchCategory){
            if(searchQuery !== ""){
                return false;
            }
        }

        const searchData = {
            q: searchQuery || "",
            c: searchCategory || ""
        }

        const searchParams = new URLSearchParams(searchData);
        
        navigate(`s/?${searchParams.toString()}`);
    }

    const isCheckoutPage = location.pathname.includes('checkout');

    if(isCheckoutPage){
        return (
            <header className="flex flex-col">
            <div className="top-menu flex justify-between h-16 px-6 items-center bg-gradient-to-r from-green-950 to-green-700">
                <a href='/'><img src={AmazonLogo} className='w-[95px] mt-2'/></a>
                <a href="" className='text-white text-3xl'>Secure checkout</a>
                <a href="/cart/" className=''>
                    <div className='top-menu-tab flex items-center'>
                        <div className='relative'>
                            <img src={cartIcon} className='w-10' />
                            {/* <div className='absolute bottom-0 -right-3 bg-white rounded-full h-5 w-5 flex items-center justify-center text-white text-xs'>
                                <div className='text-white text-sm font-bold'></div>
                            </div> */}
                        </div>
                    </div>
                </a>
            </div>
        </header>
        )
    }

    return (
        <header className="flex flex-col">
            <div className="top-menu flex h-16 px-6 items-center bg-slate-900">
                <a href='/'><img src={AmazonLogo} className='w-[95px] mt-2 me-5'/></a>
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
                    <select 
                        className='w-[22%] rounded-s-[4px] text-xs font-medium p-2 hover:bg-slate-100  bg-slate-200 hover:cursor-pointer focus:outline-[#FFD814]'
                        onInput={handleCategorySelect}
                        defaultValue={categoryId}
                        >
                        <option value="">All</option>
                        {categories && categories.map((category, idx) => (
                            <option
                                key={idx}
                                value={category.id}
                                selected={category.title === categoryTitle}
                            >{category.title}</option>
                        ))}
                    </select>
                    <input 
                        type="text" 
                        className='h-full w-[83%] block border-none py-3 px-2 text-sm focus:outline-none'
                        placeholder='Search Amazon'
                        onFocus={() => setSearchIsFocused(true)}
                        onBlur={() => setSearchIsFocused(false)}
                        onChange={handleSearchQueryChange}
                        value={searchQuery}
                    />
                    <button 
                        className='w-[7%] rounded-e-[4px] bg-[#FFD814] flex items-center justify-center border-none outline-none'
                        onClick={handleSearchButtonClick}
                        >
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
                            <div className='text-[12px] font-medium mb-0'>
                                Hello, <span>{user ? user.first_name : 'sign in'}</span>
                            </div>
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
                <a href="/cart/" className='ms-auto'>
                    <div className='top-menu-tab flex items-center'>
                        <div className='relative'>
                            <img src={cartIcon} className='w-10' />
                            <div className='absolute bottom-0 -right-3 bg-red-500 rounded-full h-5 w-5 flex items-center justify-center text-white text-xs'>
                                <div className='text-white text-sm font-bold'>{cart?.total_quantity || 0}</div>
                            </div>
                        </div>
                       
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
    )
}