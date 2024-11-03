import PanelCarousel from '../../components/PanelCarousel';
import { gameImages, homeDecorImages, internationalTopSellersImages } from '../../imageCollections';
import { 
    AmazonLogo, 
    usaIcon, 
    headphones, 
    chair, 
    mouse, 
    keyboard, 
    bedding, 
    cleaningTools, 
    homeDecor, 
    homeStorage, 
    jeansUnder50, 
    topsUnder25, 
    dressesUnder30, 
    shoesUnder50, 
    kitchenAndDining, 
    homeImprovement, 
    decor, 
    beddingAndBath, 
    cooker, 
    coffee, 
    pots, 
    kettles, 
    dining, 
    home, 
    kitchen, 
    healthAndBeauty, 
    gaming, 
    toys, 
    makeup, 
    backpack, 
    dining2, 
    accessories2, 
    handbags, 
    homeDecor2, 
    kitchen2, 
    smartHome, 
    smartphones, 
    suitcases, 
    tablets, 
    watches, 
    intelImage, 
    boysWatch, 
    brushes, 
    desktops, 
    girlsWatch, 
    hardDrives, 
    laptops, 
    menWatch, 
    mirrors, 
    pcAcessories, 
    sponges, 
    womenWatch, 
    globeIcon, 
    upDownIcon, 
    dollarIcon 
} from '../../assets/images/images';

import ImageCarousel from '../../components/ImageCarousel';
import Header from '../../components/Header';
import ProductItemBox from '../../components/ProductItemBox';


export default function Home(){

    return (
        <div>
            <Header />
            <div className='bg-slate-200 main-content relative-'>
                <ImageCarousel>
                    <div className='absolute top-[40%] w-full'>
                        <div className='row flex p-4 gap-4 h-40'>
                            <div className='bg-white w-[300px] h-[420px] py-5 px-4 flex flex-col'>
                                <h2 className='text-[23px] font-semibold mb-3'>Gaming Acessories</h2>
                                <div className='inner-content grid grid-cols-2 gap-3 gap-y-9'>
                                    <ProductItemBox title={'Headsets'} image={headphones} />
                                    <ProductItemBox title={'Keyboards'} image={keyboard} />
                                    <ProductItemBox title={'Computer Mice'} image={mouse} />
                                    <ProductItemBox title={'Chairs'} image={chair} />
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
                <PanelCarousel title={"Most wished for in Video Games"} images={gameImages} />
                <PanelCarousel title={`Home Decor under $20`} images={homeDecorImages} />
                <div className='row flex pt-[1px] pb-4 px-4 gap-4'>
                    <div className='bg-white w-[300px] h-[420px] py-5 px-4 flex flex-col'>
                        <h2 className='text-[23px] font-semibold mb-3 leading-[1.2]'>Most-loved travel essentials</h2>
                        <div className='inner-content grid grid-cols-2 gap-3 gap-y-9'>
                            <div className='relative'>
                                <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                    <img src={backpack} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Backpacks</span>
                            </div>
                            <div className='relative'>
                                <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                    <img src={suitcases} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Suitcases</span>
                            </div>
                            <div className='relative'>
                                <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                    <img src={accessories2} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Accessories</span>
                            </div>
                            <div className='relative'>
                                <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                    <img src={handbags} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Handbags</span>
                            </div>
                        </div>
                        <a href="" className='text-[13px] mt-auto text-blue-800'>See all deals</a>
                    </div>
                    <div className='bg-white w-[300px] h-[420px] py-5 px-4 flex flex-col'>
                        <h2 className='text-[23px] font-semibold mb-3 leading-[1.2]'>New arrivals inspired by your recent searches</h2>
                        <div className='inner-content flex flex-col h-[80%]'>
                            <div className=' w-full flex content-center items-center overflow-hidden'>
                                <img src={intelImage} alt="" className='scale-50'/>
                            </div>
                            <p className='text-[13px] leading-[1.2] mt-1 mb-2'>Intel® Core™ i7-12700 Desktop Processor 25MB Cache up to 4.90GHz</p>
                            <div className='flex items-top font-medium text-lg'>
                                <span className='block text-[13px] leading-[1.4] me-0.5'>$</span>
                                <span className='block text-[22px] leading-[1]'>253</span>
                                <span className='block text-xs me-0.5 font-normal'>64</span>
                            </div>
                            <div className='magnify-row flex gap-x-2 h-[20%] mt-4'>
                                <div className='flex content-center items-center overflow-hidden border border-black rounded-xl w-1/4'>
                                    <img src={headphones} alt="" className='w-full'/>
                                </div>
                                <div className='flex content-center items-center overflow-hidden border border-black rounded-xl w-1/4'>
                                    <img src={keyboard} alt="" className='w-full'/>
                                </div>
                                <div className='flex content-center items-center overflow-hidden border border-black rounded-xl w-1/4'>
                                    <img src={chair} alt="" className='w-full'/>
                                </div>
                                <div className='flex content-center items-center overflow-hidden border border-black rounded-xl w-1/4'>
                                    <img src={makeup} alt="" className='w-full'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white w-[300px] h-[420px] py-5 px-4 flex flex-col'>
                        <h2 className='text-[23px] font-semibold mb-3'>Wireless Tech</h2>
                        <div className='inner-content grid grid-cols-2 gap-3 gap-y-9'>
                            <div className='relative'>
                                <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                    <img src={smartphones} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Smartphones</span>
                            </div>
                            <div className='relative'>
                                <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                    <img src={watches} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Watches</span>
                            </div>
                            <div className='relative'>
                                <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                    <img src={watches} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Headphones</span>
                            </div>
                            <div className='relative'>
                                <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                    <img src={tablets} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Tablets</span>
                            </div>
                        </div>
                        <a href="" className='text-[13px] mt-auto text-blue-800'>See all deals</a>
                    </div>
                    <div className='bg-white w-[300px] h-[420px] py-5 px-4 flex flex-col'>
                        <h2 className='text-[23px] font-semibold mb-3'>Fanastic finds for homes</h2>
                        <div className='inner-content grid grid-cols-2 gap-3 gap-y-9'>
                            <div className='relative'>
                                <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                    <img src={kitchen2} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Kitchen</span>
                            </div>
                            <div className='relative'>
                                <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                    <img src={homeDecor2} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Home Decor</span>
                            </div>
                            <div className='relative'>
                                <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                    <img src={dining2} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Dining</span>
                            </div>
                            <div className='relative'>
                                <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                    <img src={smartHome} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Smart Home</span>
                            </div>
                        </div>
                        <a href="" className='text-[13px] mt-auto text-blue-800'>See all deals</a>
                    </div>
                </div>
                <div className='row flex pt-[1px] pb-4 px-4 gap-4'>
                    <div className='bg-white w-[300px] h-[420px] py-5 px-4 flex flex-col'>
                        <h2 className='text-[23px] font-semibold mb-3 leading-[1.2]'>Fantastic finds for homes</h2>
                        <div className='inner-content grid grid-cols-2 gap-3 gap-y-9'>
                            <div className='relative'>
                                <div className=' w-[125px] h-[130px] flex content-center items-center overflow-hidden'>
                                    <img src={kitchen2} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Kitchen</span>
                            </div>
                            <div className='relative'>
                                <div className=' w-[125px] h-[130px] flex content-center items-center overflow-hidden'>
                                    <img src={homeDecor2} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Home Decor</span>
                            </div>
                            <div className='relative'>
                                <div className=' w-[125px] h-[130px] flex content-center items-center overflow-hidden'>
                                    <img src={dining2} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Dining</span>
                            </div>
                            <div className='relative'>
                                <div className=' w-[125px] h-[130px] flex content-center items-center overflow-hidden'>
                                    <img src={smartHome} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Smart Home</span>
                            </div>
                        </div>
                        <a href="" className='text-[13px] mt-auto text-blue-800'>See all deals</a>
                    </div>
                    <div className='bg-white w-[300px] h-[420px] py-5 px-4 flex flex-col'>
                        <h2 className='text-[23px] font-semibold mb-3 leading-[1.2]'>Score the top PCs and Accessories</h2>
                        <div className='inner-content grid grid-cols-2 gap-3 gap-y-9'>
                            <div className='relative'>
                                <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                    <img src={desktops} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Desktops</span>
                            </div>
                            <div className='relative'>
                                <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                    <img src={laptops} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Laptops</span>
                            </div>
                            <div className='relative'>
                                <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                    <img src={hardDrives} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Harddrives</span>
                            </div>
                            <div className='relative'>
                                <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                    <img src={pcAcessories} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>PC Accessories</span>
                            </div>
                        </div>
                        <a href="" className='text-[13px] mt-auto text-blue-800'>See all deals</a>
                    </div>
                    <div className='bg-white w-[300px] h-[420px] py-5 px-4 flex flex-col'>
                        <h2 className='text-[23px] font-semibold mb-3 leading-[1.2]'>Level up your beauty routine</h2>
                        <div className='inner-content grid grid-cols-2 gap-3 gap-y-9'>
                            <div className='relative'>
                                <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                    <img src={makeup} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Makeup</span>
                            </div>
                            <div className='relative'>
                                <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                    <img src={brushes} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Brushes</span>
                            </div>
                            <div className='relative'>
                                <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                    <img src={sponges} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Sponges</span>
                            </div>
                            <div className='relative'>
                                <div className=' w-[125px] h-[116px] flex content-center items-center overflow-hidden'>
                                    <img src={mirrors} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Mirrors</span>
                            </div>
                        </div>
                        <a href="" className='text-[13px] mt-auto text-blue-800'>See all deals</a>
                    </div>
                    <div className='bg-white w-[300px] h-[420px] py-5 px-4 flex flex-col'>
                        <h2 className='text-[23px] font-semibold mb-3'>Most loved watches</h2>
                        <div className='inner-content grid grid-cols-2 gap-3 gap-y-9'>
                            <div className='relative'>
                                <div className=' w-[125px] h-[124px] flex content-center items-center overflow-hidden'>
                                    <img src={womenWatch} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Women</span>
                            </div>
                            <div className='relative'>
                                <div className=' w-[125px] h-[124px] flex content-center items-center overflow-hidden'>
                                    <img src={menWatch} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Men</span>
                            </div>
                            <div className='relative'>
                                <div className=' w-[125px] h-[124px] flex content-center items-center overflow-hidden'>
                                    <img src={girlsWatch} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Girls</span>
                            </div>
                            <div className='relative'>
                                <div className=' w-[125px] h-[124px] flex content-center items-center overflow-hidden'>
                                    <img src={boysWatch} alt="" className='max-w-full h-auto scale-150'/>
                                </div>
                                <span className='text-xs font-medium absolute left-0 bottom-[-16px]'>Boys</span>
                            </div>
                        </div>
                        <a href="" className='text-[13px] mt-auto text-blue-800'>See all deals</a>
                    </div>
                </div>
                <PanelCarousel title={'International Top Sellers for you'} images={internationalTopSellersImages}/>
            </div>
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
                        <div className='copyright mt-1'>&copy; 1996-2024, Amazon.com, Inc. or its affiliates</div>
                    </div>
                </div>
            </footer>
        </div>
    )
}