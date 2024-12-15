import { useContext, useEffect, useRef, useState } from "react";
import { useCart } from "../../context/CartContext"
import { close, creditCard, pluss } from "../../assets/images/images";
import {
    CountrySelect,
} from 'react-country-state-city';
import "react-country-state-city/dist/react-country-state-city.css";
import states from '../../data/states.json';
import { AuthContext } from "../../context/AuthContext";
import { fetchWithAuth } from '../../utils';
import { json, useNavigate } from "react-router-dom";


export default function Checkout(){
    const navigate = useNavigate();
    const [step, setStep] = useState(
        JSON.parse(localStorage.getItem('checkoutStep')) || 1
    );
    const currentDate = new Date(Date.now());

    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

    const { cart } = useCart();
    const { user } = useContext(AuthContext);
    
    const addressModalOverlayRef = useRef(null);
    const addressModalRef = useRef(null);

    const paymentOverflayRef = useRef(null);
    const paymentModalRef = useRef(null);

    const handleAddAddressClick = () => {
        setIsAddressModalOpen(true);
    }

    const handleAddPaymentClick = () => {
        setIsPaymentModalOpen(true);
    }

    const closeAddressModal = () => {
        setIsAddressModalOpen(false);
    }

    const closePaymentModal = () => {
        setIsPaymentModalOpen(false);
    }

    useEffect(() => {

        const handleClickOutside = (e) => {
            if (addressModalOverlayRef.current && !addressModalRef.current.contains(e.target)) {
              closeAddressModal();
            }
          };

        if(isAddressModalOpen){
            document.documentElement.style.overflow = 'hidden';
            // document.addEventListener('mousedown', handleClickOutside);
            if(addressModalOverlayRef.current){
                addressModalOverlayRef.current.scrollTop = 0;
            }
        } else{
            document.documentElement.style.overflow = 'auto';
        }

        return () => {
            document.documentElement.style.overflow = 'auto';
            // document.removeEventListener('mousedown', handleClickOutside)
        }

    }, [isAddressModalOpen]);

    // Address Form Build
    const [country, setCountry] = useState({}); // Send country.name
    const [countryStates, setCountryStates] = useState([]);
    const [phoneCode, setPhoneCode] = useState('');
    const [name, setName] = useState(``);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [streetAddressOrPoBox, setStreetAddressOrPoBox] = useState('');
    const [buildingAddress, setBuildingAddress] = useState(''); // Combine both and send full address
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [isDefaultAddress, setIsDefaultAddress] = useState(false);

    useEffect(() => {
        setName(`${user?.first_name} ${user?.last_name && user.last_name}`);
    }, [user])

    const [error, setError] = useState({
        country: '',
        name: '',
        phoneNumber: '',
        streetAddressOrPoBox: '',
        buildingAddress: '',
        city: '',
        state: '',
        zipCode: '',
    })


    const handleCountryChange = (e) => {
        setCountry(e);
        setPhoneCode(e.phone_code);

        const countryStatesCollection = states.find((state) => state.id === e.id);
        setCountryStates(countryStatesCollection.states);
    }

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleStreetOrPoBoxChange = (e) => {
        setStreetAddressOrPoBox(e.target.value);
    }

    const handleBuildingAddressChange = (e) => {
        setBuildingAddress(e.target.value);
    }

    const handleCityChange = (e) => {
        setCity(e.target.value);
    }

    const handleZipCodeChange = (e) => {
        setZipCode(e.target.value);
    }

    const handleStateChange = (e) => {
        setState(e.target.value);
    }

    const handleIsDefaultAdressChange = (e) => {
        setIsDefaultAddress(e.target.checked);
    }

    const validateAddressForm = () => {
        let isValid = true;
        if(!country.name){
            setError((prev) => (
                {...prev, country: 'Country name must be provided'}
            ));
            isValid = false;
        }else{
            setError((prev) => (
                {...prev, country:''}
            ))
        }

        if(!phoneNumber){
            setError((prev) => (
                {...prev, phoneNumber: 'Please enter a phone number so we can call if there are any issues with delivery.'}
            ))
        }else{
            setError((prev) => (
                {...prev, phoneNumber:''}
            ))
        }

        if(!city){
            setError((prev) => (
                {...prev, city: 'City name must be provided'}
            ));
            isValid = false;
        }else{
            setError((prev) => (
                {...prev, city:''}
            ))
        }

        if(!state){
            setError((prev) => (
                {...prev, state: 'State name must be provided'}
            ));
            isValid = false;
        }else{
            setError((prev) => (
                {...prev, state:''}
            ))
        }

        if(!streetAddressOrPoBox){
            setError((prev) => (
                {...prev, streetAddressOrPoBox: 'Street Address or P.O. Box must be provided'}
            ));
            isValid = false;
        }else{
            setError((prev) => (
                {...prev, streetAddressOrPoBox:''}
            ))
        };

        if(!buildingAddress){
            setError((prev) => (
                {...prev, buildingAddress: 'Building address must be provided'}
            ));
            isValid = false;
        }else{
            setError((prev) => (
                {...prev, buildingAddress:''}
            ))
        };

        if(!zipCode){
            setError((prev) => (
                {...prev, zipCode: 'Building address must be provided'}
            ));
            isValid = false;
        }else{
            setError((prev) => (
                {...prev, zipCode:''}
            ))
        };

        return isValid;

    }

    const handleUseAddressClick = async (e) => {
        e.preventDefault();

        const formValid = validateAddressForm();

        if(!formValid){
            console.log("Error: ", error);
            return;
        }

        const addressInfo = {
            action: 'order-create',
            userId: user?.id,
            streetAddress: streetAddressOrPoBox,
            buildingAddress: buildingAddress,
            city: city,
            state: state,
            zipCode: zipCode,
            country: country.name || '',
            phone: "+" + phoneCode + phoneNumber,
            isDefault: isDefaultAddress,
            deliveryInstructions: '',
        };

        try {
            const response = await fetchWithAuth('http://localhost:8000/api/addresses/add', {
                method: 'POST',
                body: JSON.stringify(addressInfo)
            })

            if(!response.ok){
                const data = await response.json();
                alert(data.message);
            } else{
                const data = await response.json();
                console.log(data);
                setAddress(data);
                //localStorage.setItem('address', JSON.stringify(data));
                //setIsAddressSelected(true);
                setIsAddressModalOpen(false);
                setStep(2);
                localStorage.setItem('checkoutStep', JSON.stringify(2));
            }

        } catch (err) {
            console.log(err);
        }
    }

    const [isAddressSelected, setIsAddressSelected] = useState(false);
    // const [address, setAddress] = useState(
    //     JSON.parse(localStorage.getItem('address')) || {}
    // );
    const [address, setAddress] = useState({});

    // Payment Card Form Build
    const [cardNumber, setCardNumber] = useState('');
    const [cardAccountName, setCardAccountName] = useState('');
    const [expMonth, setExpMonth] = useState('01');
    const [expYear, setExpYear] = useState(currentDate.getFullYear());
    const [cvv, setCvv] = useState('');

    const handleCardNumberChange = (e) => {
        setCardNumber(e.target.value);
    }

    const handleCardAccountNameChange = (e) => {
        setCardAccountName(e.target.value);
    }

    const handleExpMonthChange = (e) => {
        setExpMonth(e.target.value);
    }

    const handleExpYearChange = (e) => {
        setExpYear(e.target.value);
    }

    const handleCvvChange = (e) => {
        setCvv(e.target.value);
    }

    let constructedDate = `${expYear}-${expMonth}-01`;

    const addPaymentCard = async () => {
        const paymentCardDetails = {
            number: cardNumber,
            name: cardAccountName,
            expDate: constructedDate,
            cvv: cvv
        }

        try {
            const response = await fetchWithAuth('http://localhost:8000/api/payments/add-card', {
                method: 'POST',
                body: JSON.stringify(paymentCardDetails)
            });
            if(!response.ok){
                const data = await response.json();
                alert(data.message);
            }else{
                const data = await response.json();
                setPaymentCards((prev) => [...prev, data]);
                setIsPaymentModalOpen(false);
            }
        } catch (err) {
            console.log(err);
        }

    }

    const date = new Date();

    // Data initialized upon page mount
    const [paymentCards, setPaymentCards] = useState([]);
    // User's addresses
    const [addresses, setAdresses] = useState([]);
    // User's current pending order
    const [order, setOrder] = useState({});
    // User's payment cards

    
    useEffect(() => {
        const getAddresses = async () => {
            const response = await fetchWithAuth('http://localhost:8000/api/addresses/');
            if(!response.ok){
                console.error("Whoops");
            }else{
                const data = await response.json();
                setAdresses(data);
            }
        };

        getAddresses();

    }, []);

    useEffect(() => {
        const getPaymentCards = async () => {
            const response = await fetchWithAuth('http://localhost:8000/api/payments/get-payment-cards');

            if(!response.ok){
                console.error('Whoops');
            }else{
                const data = await response.json();
                setPaymentCards(data);
            }

        };

        getPaymentCards()

    }, [])

    useEffect(() => {
        const getCurrentOrder = async () => {
            const response = await fetchWithAuth('http://localhost:8000/api/orders/get-pending-order');

            if(!response.ok){
                console.error('Whoops');
            }else{
                const data = await response.json();
                setOrder(data);
            };
        };

        getCurrentOrder();

    }, [])

    useEffect(() => {
        const getCurrentOrderAddress = async () => {
            try {
                const response = await fetchWithAuth('http://localhost:8000/api/addresses/get-order-address');
                if(!response.ok){
                    console.error("Whoops");
                }else{
                    const data = await response.json();
                    setAddress(data);
                }
            }catch(err){
                console.log(err);
            }
        };

        if(!Object.keys(address).length === 0){
           return;
        }else{
            getCurrentOrderAddress();
        }
    }, [])

    // const [isCardSelected, setIsCardSelected] = useState(false);
    const [selectedCardId, setSelectedCardId] = useState(
        JSON.parse(localStorage.getItem('cardId')) || null
    );

    const handlePaymentCardClick = (e, cardId) => {
        // const card = paymentCards.find((card) => card.id === cardId)
        // setIsCardSelected(true);
        console.log(cardId);
        setSelectedCardId(cardId);
        localStorage.setItem('cardId', JSON.stringify(cardId));
        setStep(3);
        localStorage.setItem('checkoutStep', JSON.stringify(3));
    }

    let selectedCard = paymentCards.find((card) => card.id === selectedCardId) || null;

    // Stripe-ish
    const handlePayButtonClick = async () => {
        if(!order){
            console.log("Order not in existence or recognition yet")
            return;
        }
        // Create OrderItems from Cart
        const response = await fetchWithAuth('http://localhost:8000/api/orders/generate-order-items', {
            method: 'POST',
            body: JSON.stringify({
                cart: cart
            })
        })

        if(!response.ok){
            console.log("Whoops, something went wrong");
        }else{
            const data = await response.json();
            console.log(data);
            navigate('/stripe-checkout');
        }
        
    };

    return (
        <div>
        {/* Address Modal */}
            <div 
                className={`address-modal-overlay ${isAddressModalOpen ? 'block' : 'hidden'}`}
                ref={addressModalOverlayRef}
                >
                <div 
                     className="address-modal-content rounded-lg shadow-lg"
                     ref={addressModalRef}
                    >
                    <div className="address-modal-inner flex flex-col">
                        <div className="flex justify-between items-center p-5 bg-gray-100 border border-b-slate-300 rounded-t-md overflow-hidden">
                            <h1>Add an address</h1>
                            <img 
                                src={close} 
                                alt="" 
                                className="h-3 w-3 cursor-pointer"
                                onClick={closeAddressModal}
                                />
                        </div>
                        <form action="" className="px-9 py-6 flex flex-col gap-4 bg-white rounded-b-md">
                            <h1 className="font-bold text-2xl">Enter a new shipping address</h1>
                            <div>
                                <div className="flex justify-between text-[13px] p-5 bg-blue-50 border border-blue-300 rounded-md items-center">
                                    <h1 className="ms-6 font-semibold">Save time. Autofill your current location.</h1>
                                    <button className="border-slate-600 border px-2 py-1 rounded-full bg-white">Autofill</button>
                                </div>
                            </div>
                            <div className="flex flex-col text-sm">
                                <label className="font-semibold block mb-1">Country/Region</label>
                                <CountrySelect
                                    containerClassName="text-sm country-select"
                                    inputClassName="country-select-input px-2 py-0.5"
                                    onChange={handleCountryChange}
                                />
                                {error.country && (
                                    <p className="text-red-700 text-xs mt-1.5">{error.country}</p>
                                )}
                            </div>
                            <div className="flex flex-col text-sm">
                                <label className="font-semibold block mb-1">Full name (First and Last name)</label>
                                <input 
                                    type="text"
                                    className="border border-slate-400 rounded-md py-1 px-2"
                                    value={name}
                                    onChange={handleNameChange}
                                    />
                            </div>
                            <div className="flex flex-col text-sm">
                                <label className="font-semibold block mb-1">Phone number</label>
                                <div className="flex items-center">
                                    <div 
                                        className="text-sm border border-slate-400 border-e-none rounded-s-md py-1 px-2 bg-blue-50"
                                        >+{phoneCode ? phoneCode : 'Code'}</div>
                                    <input 
                                        type="text" 
                                        className="border border-slate-400 rounded-md rounded-s-none py-1 px-2 border-s-0 w-full"
                                        value={phoneNumber}
                                        onChange={handlePhoneNumberChange}
                                        />
                                </div>
                                <p className="text-xs mt-1">May be used to assist delivery</p>
                                {error.phoneNumber && (
                                    <p className="text-red-700 text-xs mt-1.5">{error.phoneNumber}</p>
                                )}
                            </div>
                            <div className="flex flex-col text-sm">
                                <label className="font-semibold block mb-1">Address</label>
                                <div className="flex flex-col mb-3">
                                    <input 
                                        type="text"
                                        className="border border-slate-400 rounded-md py-1 px-2 placeholder:text-slate-500" placeholder="Street Address or P.O. Box"
                                        value={streetAddressOrPoBox}
                                        onChange={handleStreetOrPoBoxChange}
                                        />
                                        {error.streetAddressOrPoBox && (
                                        <p className="text-red-700 text-xs mt-1.5">{error.streetAddressOrPoBox}</p>
                                    )}
                                    </div>
                                <div className="flex flex-col mb-3">
                                    <input 
                                        type="text"
                                        className="border border-slate-400 rounded-md py-1 px-2 placeholder:text-slate-500" placeholder="Apt, suite, unit, building, floor, etc."
                                        value={buildingAddress}
                                        onChange={handleBuildingAddressChange}
                                        />
                                    {error.buildingAddress && (
                                    <p className="text-red-700 text-xs mt-1.5">{error.buildingAddress}</p>
                                    )}
                                </div>
                               
                            </div>
                            <div className="flex text-sm justify-between">
                                <div className="flex flex-col w-[40%]">
                                    <label className="font-semibold block mb-1">City</label>
                                    <input type="text" className="border border-slate-400 rounded-md py-1 px-2" value={city} onChange={handleCityChange}/>
                                    {error.city && (
                                    <p className="text-red-700 text-xs mt-1.5">{error.city}</p>
                                )}
                                </div>
                                <div className="flex flex-col w-[29%]">
                                    <label className="font-semibold block mb-1">State</label>
                                    <select 
                                        name="" id="" 
                                        className="border border-slate-400 py-1 px-2 rounded-md block"
                                        value={state}
                                        onChange={handleStateChange}
                                        >
                                        <option>-</option>
                                        {countryStates.length > 0 && countryStates.map((state, idx) => (
                                            <option key={idx} value={state.name}>{state.name}</option>
                                        ))}
                                    </select>
                                    {error.state && (
                                    <p className="text-red-700 text-xs mt-1.5">{error.state}</p>
                                )}
                                </div>
                                <div className="flex flex-col w-[29%]">
                                    <label className="font-semibold block mb-1">ZIP Code</label>
                                    <input 
                                        type="text" 
                                        className="border border-slate-400 rounded-md py-1 px-2"
                                        value={zipCode}
                                        onChange={handleZipCodeChange}
                                        />
                                        {error.zipCode && (
                                        <p className="text-red-700 text-xs mt-1.5">{error.zipCode}</p>
                                )}
                                </div>
                            </div>
                            <label className="text-sm flex items-center">
                                <input 
                                    type="checkbox" 
                                    name="" 
                                    id="" 
                                    className="me-1"
                                    value={isDefaultAddress}
                                    onChange={handleIsDefaultAdressChange}
                                />
                                Make this my default address
                            </label>
                            <p className="text-sm font-semibold">Delivery instructions (optional)</p>
                            <button 
                                className="bg-[#FFD815] py-1.5 px-2.5 w-auto self-start text-[13px] rounded-full mt-6"
                                onClick={handleUseAddressClick}
                                >Use this address</button>
                        </form>
                    </div>
                </div>
            </div>
        
        {/* Payment Modal */}
        {isPaymentModalOpen && (
            <div className="payment-modal-overlay flex items-center justify-center">
                <div className="payment-modal-container flex flex-col text-[13px] rounded-lg">
                    <div className="border border-b-slate-300 p-3 flex justify-between items-center bg-slate-100 rounded-t-lg">
                        <h1 className="font-semibold">Add a Credit/Debit card</h1>
                        <img src={close} alt="" className="h-2.5 cursor-pointer" onClick={closePaymentModal}/>
                    </div>
                    <div className="flex bg-white">
                        <div className="flex flex-col w-[60%] gap-y-2.5 px-6 pt-3 pb-5 border border-e ">
                            <div className="flex items-center justify-between w-[87%]">
                                <label className="me-1.5 font-semibold ">Card number</label>
                                <input 
                                    type="text" className="border border-slate-400 py-0.5 rounded-sm px-1.5"
                                    value={cardNumber}
                                    onChange={handleCardNumberChange}
                                    />
                            </div>
                            <div className="flex items-center justify-between w-[87%]">
                                <label className="me-1.5 font-semibold">Name on card</label>
                                <input 
                                    type="text" className="border border-slate-400 py-0.5 rounded-sm px-1.5"
                                    value={cardAccountName}
                                    onChange={handleCardAccountNameChange}
                                    />
                            </div>
                            <div className="flex items-center justify-between w-[87%]">
                                <label className="me-1.5 font-semibold min-w-[1/2]">Expiration date</label>
                                <div className="flex w-[47.5%]">
                                    <select className="border border-slate-400 py-0.5 rounded-sm px-1.5 me-1"
                                    onChange={handleExpMonthChange}
                                    value={expMonth}
                                    >
                                        {[1,2,3,4,5,6,7,8,9,10,11,12].map((num) => (
                                            <option 
                                                key={num} 
                                                value={num < 10 ? "0" + num : num}>{num < 10 ? "0" + num : num}</option>
                                        ))}
                                    </select>
                                    <select className="border border-slate-400 py-0.5 rounded-sm px-1.5"
                                    value={expYear}
                                    onChange={handleExpYearChange}
                                    >
                                        {Array(40).fill(date.getFullYear()).map((year, idx) => (
                                            <option key={idx} value={(year+idx).toString()}>{year + idx}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="flex items-center justify-between w-[87%]">
                                <label className="me-1.5 font-semibold leading-4">Secrity code (CVV/CVC)</label>
                                <input 
                                    type="text" 
                                    className="border border-slate-400 py-0.5 rounded-sm px-1.5"
                                    value={cvv}
                                    onChange={handleCvvChange}
                                    />
                            </div>
                        </div>
                        <div className="w-[40%] text-[13px] pt-3 px-3.5">
                            <p>Amazon accepts all major credit and debit cards:</p>
                            <div className="grid grid-cols-4 gap-x-0 gap-y-0 w-4/5">
                                <img src={creditCard} alt="" className="h-12"/>
                                <img src={creditCard} alt="" className="h-12"/>
                                <img src={creditCard} alt="" className="h-12"/>
                                <img src={creditCard} alt="" className="h-12"/>
                                <img src={creditCard} alt="" className="h-12"/>
                                <img src={creditCard} alt="" className="h-12"/>
                            </div>
                        </div>
                    </div>
                    <div className="border border-t-slate-300 py-3 px-4 flex items-center bg-slate-100 rounded-b-lg text-[12px] justify-between">
                        <div className="w-[75%]">To avoid interruptions to to your service, your added card may be used as backup if another payment method method fails. You can change this setting in Your Payments anytime.</div>
                        <button 
                            className="border border-black bg-white px-2 py-1.5 rounded-full font-medium"
                            onClick={closePaymentModal}
                            >Cancel</button>
                        <button 
                            className="bg-[#FFD815] px-2 py-1.5 rounded-full font-medium"
                            onClick={addPaymentCard}
                            >Add your card</button>
                    </div>
                </div>
            </div>
        )}

        {/* Checkout Page */}
            <div className="checkout-container bg-slate-100">
                <div className="checkout-content flex justify-between py-3 px-24">
                    <div className="w-[73%] flex flex-col gap-5">
                        <div className="bg-white p-5 pb-10">
                            {Object.keys(address).length === 0 ? (
                            <div className="flex flex-col gap-3">
                                <h1 className="text-lg font-bold">Add delivery or pickup address</h1>
                                <button 
                                    className="bg-[#FFD815] rounded-full text-[13px] p-1.5 px-3.5 w-[30%]"
                                    onClick={handleAddAddressClick}
                                    >Add a new delivery address
                                </button>
                                <button className="span rounded-full text-[13px] p-1.5 px-3.5 border border-black w-[30%]">Find a pickup location nearby</button>
                                {addresses.length > 0 && (
                                    <div className="mt-3">
                                        <h1 className="text-[13px] text-slate-400">Use an already existing address?</h1>
                                        <div className="flex flex-col">
                                            {addresses.map((address, idx) => (
                                                <div key={idx} className="flex text-[13px] text-blue-700">
                                                    <p className="cursor-pointer">{`${address.building_address}, ${address.street_address}, ${address.state} ${address.zip_code}`}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            ) : (
                                <div className="flex justify-between text-[13px]">
                                    <h1 className="text-lg font-bold">Shipping Address</h1>
                                    <div className="flex flex-col">
                                        <p>{address.user_name}</p>
                                        <p>{address.building_address}</p>
                                        <p>{`${address.street_address}, ${address.state} ${address.zip_code}`}</p>
                                    </div>
                                    <a className="text-blue-600 cursor-pointer">Change</a>
                                </div>
                            )}
                        </div>
                        {/* Payment Tab */}
                        {/* <div className="bg-white p-5 flex flex-col gap-3">
                            <div className="flex justify-between">
                                <h1 className="text-lg font-bold">Payment Method</h1>
                                {selectedCard && (
                                    <p className="text-[13px]">Debit Card - {selectedCard?.name_on_card} - {selectedCard?.number.slice(0,4)} **** **** ****</p>
                                )}
                            </div>
                            {step === 2 && (
                                <div className="border border-slate-300 p-4">
                                <h1 className="font-semibold text-lg">Your credit and debit cards</h1>
                                <hr className="mt-2 border bg-slate-300"/>
                                <div className="flex flex-col my-2 gap-y-1.5">
                                    {paymentCards.length > 0 && paymentCards.map((card, idx) => (
                                        <p key={idx} className={`${card.id === selectedCardId ? 'font-bold' : ''} cursor-pointer text-[13px] text-blue-600`}
                                        onClick={(e) => handlePaymentCardClick(e, card.id)}
                                        >{`${card.name_on_card} - ${card.number.slice(0,4)} **** **** ****`} {card.type}</p>
                                    ))}
                                </div>
                                <div className="flex items-center text-[13px]">
                                    <img src={pluss} alt="" className="h-4 cursor-pointer" onClick={handleAddPaymentClick}/>
                                    <img src={creditCard} alt="" className="h-8 ms-1.5"/>
                                    <a 
                                        className="text-blue-600 ms-4 me-2 cursor-pointer"
                                        onClick={handleAddPaymentClick}
                                        >Add a credit or debit card -</a>
                                    <p className="text-xs text-slate-400"> Amazon accepts all major credit cards</p>
                                </div>
                            </div>
                            )}
                        </div> */}
                        <div className="bg-white p-5 flex flex-col gap-3">
                            <h1 className="text-lg font-bold">Review items and shipping</h1>
                            {step === 2 && (
                                <div className="flex flex-col px-5">
                                {cart && cart.items.map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center text-[13px] py-1.5">
                                        <h3>x<span className="font-medium ms-0.5 text-sm">{item.quantity}</span></h3>
                                        <div className="w-1/5 flex justify-center">
                                            <img src={item.product.picture} alt="" className="h-28"/>
                                        </div>
                                        <h2 className="font-medium checkout-product-title w-[48%]">{item.product.title}</h2>
                                        <h2 className="font-medium">${item.product.price}</h2>
                                    </div>
                                ))}
                                <button
                                className="bg-[#FFD815] text-[13px] py-1 px-10 my-3 rounded-full self-start ms-auto me-auto"
                                onClick={handlePayButtonClick}
                                >Pay</button>
                            </div>
                            )}
                        </div>
                        <div className="bg-white p-5 flex flex-col gap-3 text-xs">
                            <p>Why has sales tax been applied? See <span className="text-blue-700">blah, blah, and blah.</span></p>
                            <p>Need help? <span className="text-blue-700">Get help.</span></p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, expedita ut! Iure natus alias corporis voluptatum. Nobis iusto sit, neque nemo voluptate at? Delectus sint illo perspiciatis tenetur at dolorem id. Incidunt quia quidem quisquam nulla assumenda ad nostrum. Qui!</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime dolor laborum reiciendis atque, eligendi eaque? See <span className="text-blue-700">blah, blah, and blah.</span></p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus similique, laboriosam vero odit ducimus explicabo voluptas reprehenderit dolore porro culpa. Sunt animi voluptatem dignissimos natus? See <span className="text-blue-700">Amazon's Return Policy.</span></p>
                        </div>
                    </div>
                    <div className="w-[25%]">
                        <div className="bg-white flex flex-col p-5">
                            <button className="bg-[#FFD815] rounded-full text-[13px] p-1.5 px-3.5 mb-3">Deliver to this address</button>
                            <hr className="mt-2 mb-4"/>
                            <div className="flex flex-col gap-1 text-xs">
                                <div className="flex justify-between">
                                    <div>Items ({cart?.total_quantity}):</div>
                                    <div>--</div>
                                </div>
                                <div className="flex justify-between">
                                    <div>Shipping and handling:</div>
                                    <div>--</div>
                                </div>
                                <div className="flex justify-between">
                                    <div>Estimated tax to be collected:</div>
                                    <div>--</div>
                                </div>
                            </div>
                            <div className="flex justify-between mt-1.5 font-bold">
                                <h1>Order total:</h1>
                                <h1>${cart?.total_price}</h1>
                            </div>
                        </div>      
                    </div>
                </div>
            </div>
        </div>
    )
}