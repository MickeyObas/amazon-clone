import { useState, useEffect, useRef} from 'react';

import amazonLogo from '../../assets/images/amazon1.png';
import exclamationMark from '../../assets/images/exclamation3.png';
import checkMark from '../../assets/images/check.png';

export default function Register(){

    const nameInputRef = useRef(null);
    const emailorNumberInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const confirmPasswordInputRef = useRef(null);

    const validationMessages = {
        name: 'Enter at least 1 character',
        mobileNumberOrEmail: 'Enter your email or mobile phone number',
        password: 'Enter at least 6 characters',
        password2: 'Type your password again'
    }

    const regexPatterns = {
        email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        phone: /^[0-9]{11,15}$/
    }

    const [name, setName] = useState('');
    const [mobileNumberOrEmail, setMobileNumberOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [isFocused, setIsFocused] = useState({
        name: false,
        mobileOrEmail: false,
        password: false,
        password2: false
    });

    const [nameValid, setNameValid] = useState(null);
    const [mobileNumberOrEmailValid, setMobileNumberOrEmailValid] = useState(null);
    const [passwordValid, setPasswordValid] = useState(null);
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(null);

    const validateName = (value) => value.trim().length > 0;
    const validateMobileNumberOrEmail = (value) => regexPatterns.email.test(value) || regexPatterns.phone.test(value);
    const validatePassword = (value) => value.length >= 6;
    const validateConfirmPassword = (value) => value === password;

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        setNameValid(validateName(value));
    }

    const handleMobileNumberOrEmailChange = (e) => {
        const value = e.target.value;
        setMobileNumberOrEmail(value);
        setMobileNumberOrEmailValid(validateMobileNumberOrEmail(value));
    }

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordValid(validatePassword(value));
    }

    const handlePassword2Change = (e) => {
        const value = e.target.value;
        setPassword2(value);
        setConfirmPasswordValid(validateConfirmPassword(value));
    }

    const handleFocus = (field) => {
        setIsFocused((prev) => ({...prev, [field]: true}));
    }

    const handleBlur = (field) => {
        setIsFocused((prev) => ({...prev, [field]: false}));
    }

    const handleKeyDown = (e, nextRef) => {
        if(e.key == 'Enter'){
            e.preventDefault();
            console.log("Enter clicked")
            nextRef.current.focus();
        }
    }

    useEffect(() => {
        nameInputRef.current.focus();
    }, []);

    return (
        <div className='flex flex-col items-center content-center min-h-screen pt-4 pb-6 bg-white'>
            <img src={amazonLogo} alt="" className='w-32 mb-5'/>
            <form className='border border-gray-300 p-4 rounded-lg w-[350px] mb-6'>
                <h2 className='text-2xl font-semibold mb-3'>Create Account</h2>
                <div className='mb-3'>
                    <label htmlFor="name" className='text-sm font-semibold block mb-1'>Your Name</label>
                    <input 
                        type="text" 
                        name="name"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        placeholder='First and last name'
                        className={`border border-gray-500 focus:ring-4 rounded-[4px] w-full px-2 py-1 text-sm focus:outline-none focus:ring-[#cee8ff] focus:ring-opacity-50 ${(!nameValid && isFocused.name) &&'border-red-500 border-[2px] focus:ring-0 focus:outline-none'} `}
                        ref={nameInputRef}
                        onFocus={() => handleFocus('name')}
                        onBlur={() => nameValid ? handleBlur('name') : null}
                        onKeyDown={(e) => handleKeyDown(e, emailorNumberInputRef)}
                        />
                    {isFocused.name && (
                        <div className='text-xs mt-1 flex items-center'>
                            <img src={nameValid ? checkMark : exclamationMark} className='w-[12px] h-[12px] me-1'/>
                            <div className={`ml-0 ${nameValid ? 'text-green-700' : 'text-red-600'} `}>{validationMessages.name}</div>
                        </div>
                    )}   
                </div>
                <div className='mb-3'>
                    <label htmlFor="mobile-no-or-email" className='text-sm font-semibold block mb-1'>Mobile number or email</label>
                    <input 
                        type="text" 
                        name="mobile-no-or-email" 
                        id="mobile-no-or-email"
                        value={mobileNumberOrEmail}
                        onChange={handleMobileNumberOrEmailChange} 
                        className={`border border-gray-500 focus:ring-4 rounded-[4px] w-full px-2 py-1 text-sm focus:outline-none focus:ring-[#cee8ff] focus:ring-opacity-50 ${(!mobileNumberOrEmailValid && isFocused.mobileOrEmail) &&'border-red-500 border-[2px] focus:ring-0 focus:outline-none'} `}
                        ref={emailorNumberInputRef}
                        onFocus={() => handleFocus('mobileOrEmail')}
                        onBlur={() => mobileNumberOrEmailValid ?  handleBlur('mobileOrEmail') : null}
                        onKeyDown={(e) => handleKeyDown(e, passwordInputRef)}
                        />
                    {isFocused.mobileOrEmail && (
                        <div className='text-xs mt-1 flex items-center'>
                            <img src={mobileNumberOrEmailValid ? checkMark : exclamationMark} className='w-[12px] h-[12px] me-1'/>
                            <div className={`ml-0 ${mobileNumberOrEmailValid ? 'text-green-700' : 'text-red-600'} `}>{validationMessages.mobileNumberOrEmail}</div>
                        </div>
                    )}   
                </div>
                <div className='mb-3'>
                    <label htmlFor="password" className='text-sm font-semibold block'>Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder='At least 6 characters' 
                        className={`border border-gray-500 focus:ring-4 rounded-[4px] w-full px-2 py-1 text-sm focus:outline-none focus:ring-[#cee8ff] focus:ring-opacity-50 ${(!passwordValid && isFocused.password) &&'border-red-500 border-[2px] focus:ring-0 focus:outline-none'} `}
                        ref={passwordInputRef}
                        onFocus={() => handleFocus('password')}
                        onBlur={() => passwordValid ? handleBlur('password') : null}
                        onKeyDown={(e) => handleKeyDown(e, confirmPasswordInputRef)}
                        />
                    {isFocused.password && (
                        <div className='text-xs mt-1 flex items-center'>
                            <img src={passwordValid ? checkMark : exclamationMark} className='w-[12px] h-[12px] me-1'/>
                            <div className={`ml-0 ${passwordValid ? 'text-green-700' : 'text-red-600'} `}>{validationMessages.password}</div>
                        </div>
                    )}
                </div>
                <div className='mb-3'>
                    <label htmlFor="password-confirm" className='text-sm font-semibold'>Re-enter password</label>
                    <input 
                        type="password" 
                        name="password-confirm" 
                        id="password-confirm" 
                        value={password2}
                        onChange={handlePassword2Change}
                        className={`border border-gray-500 focus:ring-4 rounded-[4px] w-full px-2 py-1 text-sm focus:outline-none focus:ring-[#cee8ff] focus:ring-opacity-50 ${(!confirmPasswordValid && isFocused.password2) &&'border-red-500 border-[2px] focus:ring-0 focus:outline-none'} `}
                        ref={confirmPasswordInputRef}
                        onFocus={() => handleFocus('password2')}
                        onBlur={() => confirmPasswordValid ? handleBlur('password2') : null}
                    />
                    {isFocused.password2 && (
                        <div className='text-xs mt-1 flex items-center'>
                            <img src={confirmPasswordValid ? checkMark : exclamationMark} className='w-[12px] h-[12px] me-1'/>
                            <div className={`ml-0 ${confirmPasswordValid ? 'text-green-700' : 'text-red-600'} `}>{validationMessages.password2}</div>
                        </div>
                    )}
                </div>
                <button className='border rounded-md text-center w-full font-semibold text-sm bg-[#FFD814] py-1 mb-5 hover:bg-[#e6c314]'>Continue</button>
                <p className='text-[13px]'>By creating an account, you agree to Amazon's <a href='' className='text-blue-800 underline'>Conditions of Use</a> and <a href='' className='text-blue-800 underline'>Privacy Notice</a>.</p>
                <hr className='block mt-4 mb-4 h-0.5 border-t-[#e7e7e7]' />
                <p className='text-sm font-semibold'>Buying for work?</p>
                <a className='text-sm text-blue-800 block mb-3'>Create a free business account</a>
                <div className='fancy-line'></div>
                <p className='text-sm font-normal mt-7'>Already have an account? <a href='' className='text-blue-800'>Sign in</a></p>
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
}