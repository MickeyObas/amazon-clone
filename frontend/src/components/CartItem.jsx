import { useState } from "react"
import PropTypes from 'prop-types';
import { getMoneyParts } from "../utils";
import { minus, plus } from "../assets/images/images";
import Cart from "../pages/Cart/Cart";

export default function CartItem({item, updateCart}){

    const [quantity, setQuantity] = useState(item.quantity);

    const handleIncrement = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        updateCart(item.id, newQuantity);
    }

    const handleDecrement = () => {
        if(quantity > 1){
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            updateCart(item.id, newQuantity);
        }
    }

    return (
        <div className="cartItem">
            <div className="flex p-5 items-center justify-center">
                <input type="checkbox" name="" id=""/>
                <div className="w-32 h-44 ms-10">
                    <img src={item.product.picture} alt="" className="w-full h-full"/>
                </div>
                <div className="w-[55%] ms-14 flex flex-col">
                    <h1 className="cart-product-title font-medium">{item.product.title}</h1>
                    <p className="text-green-600 text-xs mt-3">In Stock</p>
                    <div className="flex flex-col gap-1 mt-1">
                        <div className="font-semibold text-xs">Color:<span className="font-normal"> White</span></div>
                        <div className="font-semibold text-xs">Size:<span className="font-normal"> Medium</span></div>
                    </div>
                    <div className="flex">
                        <div className="flex items-center border-[3.5px] border-[#FFD814] rounded-full w-28 px-2 py-1 justify-between mt-3">
                            <img 
                                src={minus}
                                className="w-3.5 h-3.5 cursor-pointer"
                                onClick={handleDecrement}
                                />
                            <span className="text-[13px] font-semibold">{quantity}</span>
                            <img 
                                src={plus}
                                className="w-3 h-3 cursor-pointer"
                                onClick={handleIncrement}    
                            />
                        </div>
                    </div>
                </div>
                <div className='flex items-top font-semibold text-lg ms-auto me-1'>
                    <span className='block text-sm leading-[1.4] me-[1px]'>$</span>
                    <span className='block text-[18px] leading-[1]'>{getMoneyParts(item.product.price)['integerPart']}</span>
                    <span className='block text-xs me-0.5 font-normal'>{getMoneyParts(item.product.price)['decimalPart']}</span>
                </div>
            </div>
            <hr className="mb-2"/>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.any,
    updateCart: PropTypes.any
}