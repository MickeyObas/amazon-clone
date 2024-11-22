import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ImageCarousel from '../../components/ImageCarousel';
import PanelCarousel from '../../components/PanelCarousel';
import ProductItemGrid from '../../components/ProductItemGrid';

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import { 
    headphones, 
    chair, 
    keyboard, 
    cooker, 
    coffee, 
    pots, 
    kettles, 
    gaming, 
    toys, 
    makeup, 
    intelImage
} from '../../assets/images/images';

import { 
    gameImages, 
    homeDecorImages,
    internationalTopSellersImages 
} from '../../imageCollections';

import { 
    beautyRoutineLevelUp,
    fantasticFindsForHomes,
    fashionShopDeals,
    gamingAccessories,
    homeArrivalsUnder50,
    mostLovedTravelEssentials,
    mostLovedWatches,
    refreshSpace,
    topPCsAndAcessories,
    wirelessTech ,
    homeEssentials
} from '../../productCollections';


export default function Home(){

    const { user } = useContext(AuthContext);

    return (
        <div>
            <div className='bg-slate-200 main-content relative-'>
                <ImageCarousel>
                    <div className='absolute top-[40%] w-full'>
                        <div className='row flex p-4 gap-4 h-40'>
                            <ProductItemGrid
                                title={'Gaming Accessories'}
                                cta={'See all deals'}
                                productItemArray={gamingAccessories}/>
                            <ProductItemGrid
                                title={'Shop for your home essentials'}
                                cta={'Discover more in home'}
                                productItemArray={homeEssentials}
                                extraClass={{wrapper: {
                                    ratio: {
                                        height: 'h-[108px]',
                                        width: ''
                                    }
                                }}}/>
                            <ProductItemGrid
                                title={'Shop deals in Fashion'}
                                cta={'See all deals'}
                                productItemArray={fashionShopDeals}/>
                            <ProductItemGrid
                                title={'New home arrivals under $50'}
                                cta={'Shop the lastest from Home'}
                                productItemArray={homeArrivalsUnder50}
                                extraClass={{wrapper: {
                                    ratio: {
                                        height: 'h-[108px]',
                                        width: ''
                                    }
                                }}}/>
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
                    <ProductItemGrid
                        title={'Refresh your space'}
                        cta={'See all deals'}
                        productItemArray={refreshSpace}
                        extraClass={{wrapper: {
                            ratio: {
                                height: 'h-[126px]',
                                width: ''
                            }
                        }}}
                        />
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
                <ProductItemGrid
                    title={'Most-loved travel essentials'}
                    cta={'See all deals'}
                    productItemArray={mostLovedTravelEssentials}
                    extraClass={{wrapper: {
                        ratio: {
                            height: 'h-[109px]',
                            width: ''
                        }
                    }}}/>
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
                    <ProductItemGrid
                        title={'Wireless Tech'}
                        cta={'See all deals'}
                        productItemArray={wirelessTech}
                        extraClass={{wrapper: {
                        ratio: {
                            height: 'h-[123px]',
                            width: ''
                        }
                    }}}/>
                    <ProductItemGrid
                        title={'Fantastic Finds for Homes'}
                        cta={'See all deals'}
                        productItemArray={fantasticFindsForHomes}
                        extraClass={{wrapper: {
                        ratio: {
                            height: 'h-[109px]',
                            width: ''
                        }
                    }}}/>
                </div>
                <div className='row flex pt-[1px] pb-4 px-4 gap-4'>
                    <ProductItemGrid
                        title={'Fantastic Finds for Homes'}
                        cta={'See all deals'}
                        productItemArray={fantasticFindsForHomes}
                        extraClass={{wrapper: {
                        ratio: {
                            height: 'h-[109px]',
                            width: ''
                        }
                        }}}/>
                    <ProductItemGrid
                        title={'Top PCs and Accessories'}
                        cta={'See all deals'}
                        productItemArray={topPCsAndAcessories}
                        extraClass={{wrapper: {
                        ratio: {
                            height: 'h-[125px]',
                            width: ''
                        }
                        }}}/>
                    <ProductItemGrid
                        title={'Level up your beauty routine'}
                        cta={'See all deals'}
                        productItemArray={beautyRoutineLevelUp}
                        extraClass={{wrapper: {
                        ratio: {
                            height: 'h-[110px]',
                            width: ''
                        }
                        }}}/>
                    <ProductItemGrid
                        title={'Most loved watches'}
                        cta={'See all deals'}
                        productItemArray={mostLovedWatches}
                        extraClass={{wrapper: {
                        ratio: {
                            height: 'h-[124px]',
                            width: ''
                        }
                        }}}/>
                </div>
                <PanelCarousel title={'International Top Sellers for you'} images={internationalTopSellersImages}/>
            </div>
        </div>
    )
}