import PropTypes from 'prop-types';

import { downIcon } from '../assets/images/images';
import StarRating from './StarRating';

export default function ProductResultBox({
    image,
    description,
    stock,
    priceMain,
    priceSub
}){
    return (
        <div className="product-card w-[250px] border rounded-md flex flex-col">
            <div className="img-container h-[250px] flex items-center justify-center">
                <img src={image} />
            </div>
            <div className="product-content border-t py-0.5 px-2 h-[325px] w-full">
                <a href="" className="text-xs text-blue-900 underline">+9 other colors/patterns</a>
                <h1 className="max-w-[95%] font-medium mt-2">{description}</h1>
                <div className="flex gap-1 items-center mt-2">
                    <StarRating />
                    <img src={downIcon} alt="" className="h-3"/>
                    <h4 className="text-sm text-slate-500">{stock}</h4>
                </div>
                <h4 className="text-sm text-slate-600">50+ bought in past month</h4>
                <div className="mt-3 flex gap-1 items-center">
                    <div className='flex items-top font-medium text-lg'>
                        <span className='block text-sm leading-[1.4] me-[1px]'>$</span>
                        <span className='block text-[24px] leading-[1]'>{priceMain}</span>
                        <span className='block text-xs me-0.5 font-normal'>{priceSub}</span>
                    </div>
                    <div className="text-slate-600 text-sm">(${priceMain + "." + priceSub}/Count)</div>
                </div>
                <div className="text-sm mt-1.5">Delivery <span className="font-semibold">Wed, Nov 27</span></div>
                <div className="text-xs mt-1">Ships to Nigeria</div>
                <button className="bg-[#FFD814] py-2 px-3 rounded-full text-xs font-medium mt-2">Add to Cart</button>
            </div>
        </div>
    )
}

ProductResultBox.propTypes = {
    image: PropTypes.string,
    description: PropTypes.string,
    stock: PropTypes.number,
    priceMain: PropTypes.number,
    priceSub: PropTypes.number
}