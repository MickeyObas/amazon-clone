import { useState } from 'react';

import background1 from '../assets/images/background1.jpg';
import background2 from '../assets/images/background2.jpg';
import background3 from '../assets/images/background3.jpg';

const images = [
    background1,
    background2,
    background3
]


export default function ImageCarousel({children}){
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentIndex((prevIndex) => prevIndex == 0 ? images.length - 1 : prevIndex - 1)
    }

    return (
        <div className="relative w-full h-screen">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500"
          />
          <button
            onClick={prevImage}
            className="absolute left-0 top-[20%] transform -translate-y-1/2 text-white p-3 rounded-full text-4xl"
          >
            &#10094; {/* Left Arrow */}
          </button>
          <button
            onClick={nextImage}
            className="absolute right-0 top-[20%] transform -translate-y-1/2 text-white p-3 rounded-full text-4xl"
          >
            &#10095; {/* Right Arrow */}
          </button>
          <div className='w-full'>
            {children}
          </div>
        </div>
      );
}
