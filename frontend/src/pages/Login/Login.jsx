import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import amazonLogo from '../../assets/images/amazon1.png';
import exclamationMark from '../../assets/images/exclamation3.png';

export default function Login(){

    const [currentStep, setCurrentStep] = useState(1);
    const [phoneOrEmail, setPhoneOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handlePhoneOrEmailSubmit = (submittedPhoneOrEmail) => {
        setPhoneOrEmail(submittedPhoneOrEmail);
        setCurrentStep(2);
    }

    const handleSignIn = async (submittedPhoneOrEmail, submittedPassword) => {
        setPassword(submittedPassword);
        try {
            const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'phoneOrEmail': submittedPhoneOrEmail,
                    'password': submittedPassword
                })
            })

            if(response.ok){
                const data = await response.json();
                alert(`Congratulations ${data.user.first_name}, you are now signed in!`);
                navigate('/home');
            }
        }catch(err){
            console.log(err);
        }
    }

    return <>
        {currentStep === 1 && <StepOne onSubmit={handlePhoneOrEmailSubmit}/>}
        {currentStep === 2 && <StepTwo phoneOrEmail={phoneOrEmail} onSignIn={handleSignIn}/>}
    </>
}

function StepOne({onSubmit}){

    const [mobileNumberOrEmail, setMobileNumberOrEmail] = useState('');
    const [error, setError] = useState('');

    const handleContinueClick = (e) => {
        e.preventDefault();
        if(!mobileNumberOrEmail){
            setError('Enter your email or mobile phone number')
        }else{
            setError('');
            onSubmit(mobileNumberOrEmail);
        }
    }

    const handleMobileNumberOrEmailChange = (e)  => {
        e.target.value && setError('');
        setMobileNumberOrEmail(e.target.value);
    }

    return (
        <div className='flex flex-col items-center content-center min-h-screen pt-4 pb-8'>
            <img src={amazonLogo} className='w-32 mb-5'/>
            <form className='border border-gray-300 w-[350px] px-6 py-5 rounded-lg mb-5'>
                <h2 className='text-2xl font-semibold mb-3'>Sign in</h2>
                <label htmlFor="email-or-phone" className='text-sm font-semibold block mb-1'>Email or mobile phone number</label>
                <input 
                    type="text" 
                    id='email-or-phone'
                    value={mobileNumberOrEmail}
                    onChange={handleMobileNumberOrEmailChange}
                    className='border border-gray-500 rounded-[4px] w-full text-sm px-2 py-1 focus:outline-none focus:ring-[#cee8ff] focus:ring-opacity-50 focus:ring-4'
                />
                {error && (<div className='text-xs mt-1 flex items-center'>
                    <img src={exclamationMark} className='w-[12px] h-[12px] me-1'/>
                    <div className='text-red-600 font-medium'>{error}</div>
                </div>)}
                <button 
                className='text-center text-sm w-full bg-[#FFD814] hover:bg-[#e6c314] rounded-md py-1 mt-4 mb-4'
                onClick={handleContinueClick}
                >Continue</button>
                <p className='text-xs mb-5'>By continuing, you agree to Amazon's <a href="" className='text-blue-800 underline'>Conditions of Use </a>and <a href="" className='text-blue-800 underline'>Privacy Notice</a>.</p>
                <a href='' className='text-blue-800 text-[13px] mb-5 block'>Need help?</a>
                <hr className='mb-4'/>
                <p className='text-sm font-semibold mb-0.5'>Buying for work?</p>
                <a href="" className='text-blue-800 text-sm'>Shop on Amazon Business</a>
            </form>
            <div className='divider w-full text-xs max-w-[350px] text-gray-500 mb-3'>New to Amazon?</div>
            <button className='text-[13px] font-medium border border-gray-300 rounded-md w-[350px] py-[4.5px] mb-5 shadow-md hover:bg-slate-50'>Create your Amazon account</button>
            <div className='fancy-line w-full'></div>
                <div className='flex flex-col content-center items-center mt-7'>
                    <div className='flex gap-7'>
                        <a href="" className='text-[11px] text-blue-800'>Conditions of Use</a>
                        <a href="" className='text-[11px] text-blue-800'>Privacy Notice</a>
                        <a href="" className='text-[11px] text-blue-800'>Help</a>
                    </div>
                    <p className='text-[11px] mt-3'>&copy; 1996-2024, Amazon.com, Inc. or its affiliates</p>
                </div>
        </div>
    )
    
};

function StepTwo({phoneOrEmail, onSignIn}){

    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignInClick = (e) => {
        e.preventDefault();
        if(!password){
            setError('Enter your email password')
        }else{
            setError('');
            onSignIn(phoneOrEmail, password);
        }
    }

    const handlePasswordChange = (e)  => {
        e.target.value && setError('');
        setPassword(e.target.value);
    }

    return (
        <div className='flex flex-col items-center content-center min-h-screen pt-4 pb-8'>
            <img src={amazonLogo} className='w-32 mb-5'/>
            <form className='border border-gray-300 w-[350px] py-5 px-6 rounded-lg mb-5'>
                <h2 className='text-2xl font-semibold mb-3'>Sign in</h2>
                <div className='text-[13px] mb-3 block'>{phoneOrEmail} <a href="" className='text-blue-800'>Change</a></div>
                <label htmlFor="email-or-phone" className='text-sm font-semibold block mb-1'>Password</label>
                <input 
                    type="password" 
                    id='email-or-phone'
                    value={password}
                    onChange={handlePasswordChange}
                    className='border border-gray-500 rounded-[4px] w-full mb-6 text-sm px-2 py-1 focus:outline-none focus:ring-4 focus:ring-[#cee8ff] focus:ring-opacity-50'
                />
                 {error && (<div className='text-xs mt-1 flex items-center'>
                    <img src={exclamationMark} className='w-[12px] h-[12px] me-1'/>
                    <div className='text-red-600 font-medium'>{error}</div>
                </div>)}
                <button 
                className='text-center text-[13px] w-full bg-[#FFD814] hover:bg-[#e6c314] rounded-md py-1 mb-5 shadow-md'
                onClick={handleSignInClick}
                >Sign in</button>
            </form>
            <div className='fancy-line w-full'></div>
                <div className='flex flex-col content-center items-center mt-7'>
                    <div className='flex gap-7'>
                        <a href="" className='text-[11px] text-blue-800'>Conditions of Use</a>
                        <a href="" className='text-[11px] text-blue-800'>Privacy Notice</a>
                        <a href="" className='text-[11px] text-blue-800'>Help</a>
                    </div>
                    <p className='text-[11px] mt-3'>&copy; 1996-2024, Amazon.com, Inc. or its affiliates</p>
                </div>
        </div>
    )
};

StepOne.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

StepTwo.propTypes = {
    phoneOrEmail: PropTypes.string.isRequired,
    onSignIn: PropTypes.func.isRequired
}