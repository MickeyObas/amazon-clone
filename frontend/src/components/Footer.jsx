import { 
    AmazonLogo,
    globeIcon,
    upDownIcon,
    dollarIcon,
    usaIcon 
} from "../assets/images/images"

export default function Footer(){
    return (
        <footer className='bg-slate-800 '>
            <div className='footer-wrapper flex flex-col pt-8'>
                <div className='main-footer-links text-slate-300 flex justify-between pb-10 px-32'>
                    <div className='link-batch flex flex-col'>
                        <div className='text-[16px] font-semibold text-white mb-2'>Get to know us</div>
                        <div className='links flex flex-col text-[14px] gap-2 leading-[1.3]'>
                            <a href="">Careers</a>
                            <a href="">Blog</a>
                            <a href="">About Amazon</a>
                            <a href="">Investor Relations</a>
                            <a href="">Amazon Devices</a>
                            <a href="">Amazon Services</a>
                        </div>
                    </div>
                    <div className='link-batch flex flex-col'>
                        <div className='text-[16px] font-semibold text-white mb-2'>Make Money with Us</div>
                        <div className='links flex flex-col text-[14px] gap-2 leading-[1.3]'>
                            <a href="">Sell products on Amazon</a>
                            <a href="">Sell on Amazon Business</a>
                            <a href="">Sell apps on Amazon</a>
                            <a href="">Become an Affiliate</a>
                            <a href="">Advertise Your Products</a>
                            <a href="">Self-Publish with Us</a>
                            <a href="">Host an Amazon Hub</a>
                            <a href="">See More Make Money<br />with Us</a>
                        </div>
                    </div>
                    <div className='link-batch flex flex-col'>
                        <div className='text-[16px] font-semibold text-white mb-2'>Amazon Payment Products</div>
                        <div className='links flex flex-col text-[14px] gap-2 leading-[1.3]'>
                            <a href="">Amazon Business Card</a>
                            <a href="">Shop with Points</a>
                            <a href="">About Amazon</a>
                            <a href="">Reload Your Balance</a>
                            <a href="">Amazon Currency Converter</a>
                        </div>
                    </div>
                    <div className='link-batch flex flex-col'>
                        <div className='text-[16px] font-semibold text-white mb-2'>Let us Help You</div>
                        <div className='links flex flex-col text-[14px] gap-2 leading-[1.3]'>
                            <a href="">Amazon and COVID-19</a>
                            <a href="">Your Account</a>
                            <a href="">Your Orders</a>
                            <a href="">Shipping Rates &<br />Policies</a>
                            <a href="">Returns &<br />Replacements</a>
                            <a href="">Manage Your<br />Content and Devices</a>
                            <a href="">Help</a>
                        </div>
                    </div>
                </div>
                <div className='border-t-[0.5px] border-gray-200/20 my-4'></div>
                <div className='footer-panel flex justify-center items-center h-[100px]'>
                    <div className='logo-container w-20 me-20'>
                        <img src={AmazonLogo} alt='' />
                    </div>
                    <div className='flex gap-2 text-slate-300 text-[13px]'>
                        <button className='px-2 py-[7px] border border-gray-200/50 rounded-[4px] flex items-center w-28'>
                            <div className='w-4 h-4 me-2'>
                                <img src={globeIcon} alt='' className='w-full'/>
                            </div>
                            <span className='me-5'>English</span>
                            <div className='w-3 h-3 opacity-30'>
                                <img src={upDownIcon} alt='' className='w-full'/>
                            </div>
                        </button>
                        <button className='px-2 py-[7px] border border-gray-200/50 rounded-[4px] flex items-center'>
                            <div className='w-4 h-4 me-2'>
                                <img src={dollarIcon} alt='' className='w-full'/>
                            </div>
                            <span className='me-5'>USD - U.S. Dollar</span>
                            <div className='w-3 h-3 opacity-30'>
                                <img src={upDownIcon} alt='' className='w-full'/>
                            </div>
                        </button>
                        <button className='px-2 py-[7px] border border-gray-200/50 rounded-[4px] flex items-center'>
                            <div className='w-4 h-4 me-2'>
                                <img src={usaIcon} alt='' className='w-full'/>
                            </div>
                            <span className='me-5'>United States</span>
                            <div className='w-3 h-3 opacity-30'>
                                <img src={upDownIcon} alt='' className='w-full'/>
                            </div>
                        </button>
                    </div>
                </div>
                <div className='footer-bottom bg-slate-900 text-slate-400 text-xs py-6'>
                    <div className='footer-bottom-wrapper'>
                        <div className='footer-bottom-links pt-5 grid grid-cols-7 gap-y-5 gap-x-7 max-w-[1024px] ml-[140px]'>
                            <a className='link-group leading-[1.2]'>
                                <div className='text-slate-200 font-medium'>Amazon<br />Music</div>
                                <div>Stream<br />millions<br />of songs</div>
                            </a>
                            <a className='link-group leading-[1.2]'>
                                <div className='text-slate-200 font-medium'>Amazon Ads<br />Music</div>
                                <div>Reach customers<br />wherever they<br />spend their time</div>
                            </a>
                            <a className='link-group leading-[1.2]'>
                                <div className='text-slate-200 font-medium'>6pm</div>
                                <div>Score deals<br />on fashion brands</div>
                            </a>
                            <a className='link-group leading-[1.2]'>
                                <div className='text-slate-200 font-medium'>AbeBooks</div>
                                <div>Books, arts<br />& collectibles</div>
                            </a>
                            <a className='link-group leading-[1.2]'>
                                <div className='text-slate-200 font-medium'>ACX</div>
                                <div>Audiobook Publishing<br />Made Easy</div>
                            </a>
                            <a className='link-group leading-[1.2]'>
                                <div className='text-slate-200 font-medium'>Sell on Amazon</div>
                                <div>Start a Selling<br />Account</div>
                            </a>
                            <a className='link-group leading-[1.2]'>
                                <div className='text-slate-200 font-medium'>Veeqo</div>
                                <div>Shipping Sofware<br />Inventory<br />Management</div>
                            </a>

                            {/* Next Row */}

                            <a className='link-group leading-[1.2]'>
                                <div className='text-slate-200 font-medium'>Amazon Business</div>
                                <div>Everything<br />For<br />Your<br />Business</div>
                            </a>
                            <a className='link-group leading-[1.2]'>
                                <div className='text-slate-200 font-medium'>AmazonGlobal</div>
                                <div>Ship Orders<br />Internationally</div>
                            </a>
                            <a className='link-group leading-[1.2]'>
                                <div className='text-slate-200 font-medium'>Home Services</div>
                                <div>Experiences Pros<br />Happiness<br />Guarantee</div>
                            </a>
                            <a className='link-group leading-[1.2]'>
                                <div className='text-slate-200 font-medium'>Amazon Web Services</div>
                                <div>Scalable Cloud<br />Computing<br />Services</div>
                            </a>
                            <a className='link-group leading-[1.2]'>
                                <div className='text-slate-200 font-medium'>Audible</div>
                                <div>Listen to Books &<br />Original<br />Audio Performances</div>
                            </a>
                            <a className='link-group leading-[1.2]'>
                                <div className='text-slate-200 font-medium'>Box Office Mojo</div>
                                <div>Find Movie<br />Box Office Data</div>
                            </a>
                            <a className='link-group leading-[1.2]'>
                                <div className='text-slate-200 font-medium'>Goodreads</div>
                                <div>Book reviews<br />&<br />recommendations</div>
                            </a>

                            {/* Next Row */}

                            <a className='link-group leading-[1.2]'>
                                <div className='text-slate-200 font-medium'>IMDb</div>
                                <div>Movies, TV<br />& Celebrities</div>
                            </a>
                            <a className='link-group leading-[1.2]'>
                                <div className='text-slate-200 font-medium'>IMDbPro</div>
                                <div>Get Info<br />Professional Entertainers<br />Need</div>
                            </a>
                            <a className='link-group leading-[1.2]'>
                                <div className='text-slate-200 font-medium'>Kindle Direct<br />Publishing</div>
                                <div>Indie Digital &<br />Print Pulishing<br />Made Easy</div>
                            </a>
                            <a className='link-group leading-[1.2]'>
                                <div className='text-slate-200 font-medium'>Prime Video<br />Direct</div>
                                <div>Video<br />Distribution<br />Made Easy</div>
                            </a>
                            <a className='link-group leading-[1.2]'>
                                <div className='text-slate-200 font-medium'>Shopbop</div>
                                <div>Designer<br />Fashion Brands</div>
                            </a>
                            <a className='link-group leading-[1.2]'>
                                <div className='text-slate-200 font-medium'>Woot!</div>
                                <div>Deals and<br />Shenanigans</div>
                            </a>
                            <a className='link-group leading-[1.2]'>
                                <div className='text-slate-200 font-medium'>Zappos</div>
                                <div>Shoes &<br />Clothing</div>
                            </a>

                            {/* Next line */}

                            <a className='link-group leading-[1.2]'>
                                <div className='text-slate-200 font-medium'>Ring</div>
                                <div>Smart Home<br />Security Systems</div>
                            </a>
                            <a className='link-group leading-[1.2]'>
                                <div className='text-slate-200 font-medium'>eero WiFi</div>
                                <div>Stream 4K Video<br />in Every Room</div>
                            </a>
                            <a className='link-group leading-[1.2]'>
                                <div className='text-slate-200 font-medium'>Blink</div>
                                <div>Smart Security<br />for Every Home</div>
                            </a>
                            <a className='link-group leading-[1.2]'>
                                <div className='text-slate-200 font-medium'>Neighbors App</div>
                                <div>Real-Time<br />Crime<br />& Security Alerts</div>
                            </a>
                            <a className='link-group leading-[1.2]'>
                                <div className='text-slate-200 font-medium'>Amazon Subscription Boxes</div>
                                <div>Top subscription boxes<br />right to your door</div>
                            </a>
                            <a className='link-group leading-[1.2]'>
                                <div className='text-slate-200 font-medium'>PillPack</div>
                                <div>Pharmacy<br />Simplified</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='last-panel flex flex-col bg-slate-900 text-slate-200 text-xs items-center py-4'>
                    <div className='flex gap-x-5'>
                        <a href="">Conditions of Use</a>
                        <a href="">Privacy Notice</a>
                        <a href="">Consumer Health Data Privacy Disclosure</a>
                        <a href="">Your Ads Privacy Choices</a>
                    </div>
                    <div className='copyright mt-1'>&copy; 1996-2025, Amazon Clone, MickeyTheBrave</div>
                </div>
            </div>
        </footer>
    )
}