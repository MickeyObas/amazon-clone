import { useState, useEffect, useRef } from 'react';

import leftArrow from '../../assets/images/left-arrow.png';
import rightArrow from '../../assets/images/right-arrow.png';


export default function PanelCarousel({
    title,
    classList,
    images
}){

    const panelCarouselDivRef = useRef(null);
    const [isLeftButtonDim, setIsLeftButtonDim] = useState(true);
    const [isRightButtonDim, setIsRightButtonDim] = useState(false);

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

    return (
        <div className="row pt-[1px] pb-4 px-4 gap-4">
            <div className="bg-white w-full h-[290px] pt-5 px-4 flex flex-col relative">
                <h2 className="text-[23px] font-semibold leading-[1.2] mb-3"></h2>
                <div 
                    ref={panelCarouselDivRef}
                    className='inner-content flex gap-x-7 h-[220px] overflow-x-scroll pb-[7px]'>
                    <button 
                    className={`absolute top-[55%] bg-white h-[30%] w-12 -translate-y-2/4 flex justify-center items-center ${isLeftButtonDim && 'bg-opacity-60'} rounded-e-md`}
                    onClick={handleLeftButtonClick}
                    >
                        <img src={leftArrow} className={`w-5 ${isLeftButtonDim && 'bg-opacity-60'}`}/>
                    </button>
                    <button
                    className={`absolute top-[55%] bg-white h-[30%] w-12 -translate-y-2/4 flex justify-center items-center right-0 ${isRightButtonDim && 'bg-opacity-60'} rounded-s-md`}
                    onClick={handleRightButtonClick}
                    >
                        <img src={rightArrow} className={`w-5 ${isRightButtonDim && 'bg-opacity-60'}`}/>
                    </button>
                </div>
            </div>
        </div>
    )
}