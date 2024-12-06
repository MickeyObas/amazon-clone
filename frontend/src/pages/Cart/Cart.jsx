import { useEffect, useState } from "react"
import { fetchWithAuth, getMoneyParts } from "../../utils";
import { pillow2, minus, plus, primeIcon } from "../../assets/images/images"
import CartItem from "../../components/CartItem";

export default function Cart(){
    
    const [cart, setCart] = useState({
        items: [],
        total_quantity: 0,
        total_price: 0
    });

    useEffect(() => {
        const fetchCart = async () => {
            const response = await fetchWithAuth(`http://localhost:8000/api/cart/`);
            if(!response.ok){
                console.log("Whoops, something went wrong.");
            }else{
                const data = await response.json();
                console.log(data);
                setCart(data);
            }
        };

        fetchCart();

    }, []);

    const updateCart = async (itemId, newQuantity) => {
        const response = await fetchWithAuth(`http://localhost:8000/api/cart/update/${itemId}/`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ quantity: newQuantity }),
        });

        if(!response.ok){
            console.error("Something went wrong.");
        }else{
            const data = await response.json();
            console.log(data);
            setCart((prevCart) => {
                const updatedCart = {
                    ...prevCart,
                    items: prevCart.items.map((item) => item === itemId ? { ...item, quantity: newQuantity } : item),
                    total_quantity: data.total_quantity,
                    total_price: data.total_price
                }
                return updatedCart;
            })
        }
      };

    // const handleRemoveFromCart = async (itemId) => {
    //    const response = await fetchWithAuth(`http://localhost:8000/api/cart/delete/${itemId}`, {
    //     method: 'DELETE'
    //    });
    //    if (!response.ok){
    //     console.log("Something went wrong in removing item from cart");
    //    } else{
    //     const data = await response.json();
    //     setCart((prevCart) => {
    //         const updatedCart = {
    //             ...prevCart,
    //             items: prevCart.items.filter((item) => item.id !== itemId),
    //             total_price: data.total_price,
    //             total_quantity: data.total_quantity
    //         }
    //         console.log("After delete: ", updatedCart);
    //         return updatedCart;
    //     });
    //    }
    // }

    const handleRemoveFromCart = async (itemId) => {
        const response = await fetchWithAuth(`http://localhost:8000/api/cart/delete/${itemId}`, {
            method: 'DELETE'
        });
    
        if (!response.ok) {
            console.log("Something went wrong in removing item from cart");
        } else {
            const data = await response.json();
    
            // Properly update cart state
            setCart((prevCart) => {
                const updatedItems = prevCart.items.map(item => item.id === itemId ? {...item, isRemoved: true} : item);
    
                return {
                    ...prevCart, 
                    items: updatedItems,
                    total_quantity: data.total_quantity,  
                    total_price: data.total_price,
                };
            });
        }
    };
    

    if(!cart || cart.length === 0) return <h1>Loading...</h1>

    return (
        <div className="cart-container bg-gray-200 p-3">
            <div className="cart-inner-container flex justify-between">
                <div className="main w-[75%] bg-white p-5 flex flex-col">
                    <h1 className="text-3xl font-medium">Shopping Cart</h1>
                    <a className="text-blue-700 text-[13px] mt-1.5 block">Deselect all items</a>
                    <span className="self-end block text-[13px]">Price</span>
                    <hr className="mt-2"/>
                    {/* Cart Items */}
                    {cart.items && cart.items.length > 0 ? (
                        cart.items.map((item, idx) => (
                            <CartItem 
                                key={idx}
                                item={item}
                                updateCart={updateCart}
                                handleRemoveFromCart={handleRemoveFromCart}    
                            />
                        ))
                    ) : (
                        <div className="h-full flex items-center justify-center">
                            <h1 className="text-xs pt-1 text-red-600">There are no items in your cart, yet...</h1>
                        </div>
                    )}

                </div>
                <div className="side w-[24%] flex flex-col gap-2">
                    <div className="bg-white p-5 pb-10">
                        <h1 className="text-lg font-medium">Subtotal ({cart.total_quantity} items): <span className="font-semibold">${cart.total_price}</span></h1>
                        <label className="text-[13px] flex items-center mt-1 ms-2 font-medium">
                            <input type="checkbox" name="" id="" className="scale-125 me-2"/>
                            This order contains a gift
                        </label>
                        <button 
                            className="bg-[#FFD815] rounded-full text-xs px-4 py-2 w-full mt-3 font-medium"
                            >
                        Proceed to checkout</button>
                    </div>
                    <div className="bg-white p-5 pb-10">
                        <div className="flex">
                            <img src={primeIcon} alt="" className="h-10"/>
                            <div>
                                <p className="font-medium leading-5 text-[13px]">Free fast delivery. No order minimum. Exclusive savings. Start your 30-day free trial of Prime.</p>
                                <button className="border border-black rounded-full text-[13px] px-2.5 py-1 mt-3">Join Prime</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}