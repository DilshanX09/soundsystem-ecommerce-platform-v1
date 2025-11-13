import OTPInput from 'react-otp-input';
import Logo from '../assets/images/Dark-Logo.jpg';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

interface LocationState {
     email: string;
}

const AccountVerificationView = () => {

     const [code, setCode] = useState("");
     const handleChange = (code: string) => setCode(code);

     const location = useLocation();
     const { email } = (location.state as LocationState) || {};

     return (
          <div className="flex items-center justify-center pt-28">

               <div className='w-[500px]'>
                    <div className="mb-4">
                         <img src={Logo} className="h-16 rounded-md" />
                    </div>

                    <h2 className="text-2xl font-inter-bold text-black mb-1">
                         Account Verification
                    </h2>

                    <p className="text-gray-500 mb-8 font-inter-regular text-base md:text-md">
                         Please verify your account to unlock member benefits, track your orders, and discover premium audio equipment tailored for you.
                    </p>

                    <p className="text-gray-500 mb-8 font-inter-regular text-base md:text-md">
                         We've sent a verification code to: <span className='font-inter-medium text-black underline'>{email}</span>
                    </p>

                    <OTPInput
                         value={code}
                         onChange={handleChange}
                         numInputs={6}
                         renderInput={(props) => <input {...props} />}
                         renderSeparator={<span></span>}
                         shouldAutoFocus={true}
                         inputStyle={{
                              border: "1px solid #e4e4e4",
                              fontFamily: 'inter-regular',
                              width: "54px",
                              height: "54px",
                              fontSize: "23px",
                              color: "#000",
                              borderRadius: '8px',
                              fontWeight: "400",
                              caretColor: "blue",
                              fontSizeAdjust: "20px",
                              marginRight: "10px",
                              outline: 'none'
                         }}
                    />

                    <button
                         className="px-8 mt-5 bg-[#181818] text-white font-inter-medium text-[14px] py-3 rounded-[7px] hover:bg-[#2a2a2a] transition-colors mb-6"
                    >
                         SUBMIT
                    </button>

                    <p className='font-inter-regular'>
                         ** Your verification code is valid for 10 minutes. Not received code? Check your spam folder.
                    </p>

                    <p className='font-inter-regular mt-2 cursor-pointer text-blue-600 hover:underline'>
                         Didn't receive it? Request a new code
                    </p>

               </div>
          </div>
     );
}
export default AccountVerificationView;