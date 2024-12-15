import { useNavigate } from "react-router-dom";
import { AmazonLogo, AmazonLogoBlack } from "../assets/images/images";
import { useCart } from "../context/CartContext";
import { fetchWithAuth } from "../utils";
import { useEffect } from "react";


export default function StripeComplete(){
    const { cart } = useCart();
    const navigate = useNavigate();
    const currentDate = new Date(Date.now());

    const handleContinueButtonClick = async () => {
        const response = await fetchWithAuth('http://localhost:8000/api/cart/clear-cart', {
            method: 'POST'
        });
        if(!response.ok){
            console.log("Whoops");
            return;
        }else{
            const data = await response.json();
            localStorage.removeItem('cart');
            localStorage.removeItem('checkoutStep');
            navigate('/');
        }
        
    }

    useEffect(() => {
        const setOrderSuccess = async () => {
            const response = await fetchWithAuth('http://localhost:8000/api/orders/order-status-change', {
                method: 'PATCH',
                body: JSON.stringify({
                    type: 'to-processing'
                })
            })
        };

        setOrderSuccess();

    }, [])

    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            {/* Success Icon */}
            <div className="bg-green-100 rounded-full py-5 px-3 flex items-center justify-center">
                <img src={AmazonLogoBlack} alt="" className="h-8 mt-2.5"/>
            </div>

            {/* Message */}
            <h1 className="mt-6 text-3xl font-semibold text-gray-800">
                Payment Successful!
            </h1>
            <p className="mt-2 text-lg text-gray-600">
                Thank you for your purchase. Your transaction was completed successfully.
            </p>

            {/* Order Summary */}
            <div className="mt-8 bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-medium text-gray-800 border-b pb-3">
                    Order Summary
                </h2>
                <div className="mt-4 flex justify-between text-gray-600">
                    <span>Order ID:</span>
                    <span>#123456789</span>
                </div>
                <div className="mt-2 flex justify-between text-gray-600">
                    <span>Date:</span>
                    <span>{currentDate.toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                    })}</span>
                </div>
                <div className="mt-2 flex justify-between text-gray-600">
                    <span>Total Amount:</span>
                    <span>${cart.total_price}</span>
                </div>
            </div>

            {/* Buttons */}
            <div className="mt-6">
                <button
                    className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 focus:outline-none"
                    onClick={handleContinueButtonClick}
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    );
}