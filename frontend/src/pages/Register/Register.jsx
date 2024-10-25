import amazonLogo from '../../assets/images/amazon1.png';

export default function Register(){
    return (
        <div className='flex flex-col items-center content-center min-h-screen pt-4 pb-6 bg-white'>
            <img src={amazonLogo} alt="" className='w-32 mb-5'/>
            <form className='border border-gray-300 p-4 rounded-lg w-[350px] mb-6'>
                <h2 className='text-2xl font-semibold mb-3'>Create Account</h2>
                <div className='mb-4'>
                    <label htmlFor="name" className='text-sm font-semibold block mb-1'>Your Name</label>
                    <input type="text" name="name" id="name" placeholder='First and last name' className='border border-gray-500 rounded-[4px] w-full px-2 py-1 text-sm focus:outline-none focus:ring-4 focus:ring-[#cee8ff] focus:ring-opacity-50'/>
                </div>
                <div className='mb-4'>
                    <label htmlFor="mobile-no-or-email" className='text-sm font-semibold block mb-1'>Mobile number or email</label>
                    <input type="text" name="mobile-no-or-email" id="mobile-no-or-email" className='border border-gray-400 w-full rounded-[4px] px-2 py-1 text-sm focus:outline-none focus:ring-4 focus:ring-[#cee8ff] focus:ring-opacity-50'/>
                </div>
                <div className='mb-4'>
                    <label htmlFor="password" className='text-sm font-semibold block'>Password</label>
                    <input type="text" name="password" id="password" placeholder='At least 6 characters' className='border border-gray-400 w-full rounded-[4px] px-2 py-1 text-sm focus:outline-none focus:ring-4 focus:ring-[#cee8ff] focus:ring-opacity-50'/>
                </div>
                <div className='mb-4'>
                    <label htmlFor="password-confirm block" className='text-sm font-semibold'>Re-enter password</label>
                    <input type="text" name="password-confirm" id="password-confirm" className='border border-gray-400 w-full rounded-[4px] px-2 py-1 text-sm focus:outline-none focus:ring-4 focus:ring-[#cee8ff] focus:ring-opacity-50'/>
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