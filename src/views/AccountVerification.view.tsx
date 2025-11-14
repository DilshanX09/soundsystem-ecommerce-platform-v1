import OTPInput from 'react-otp-input';
import Logo from '../assets/images/Dark-Logo.jpg';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import apiService from '../services/apiService';
import LoadingView from './Loading.view';

interface LocationState {
     email: string;
}

const AccountVerificationView = () => {

     const [code, setCode] = useState<string>("");
     const handleChange = (code: string) => setCode(code);
     const [responseMessage, setResponseMessage] = useState<string | null>(null);
     const [isError, setIsError] = useState<boolean>(false);

     const [isLoading, setIsLoading] = useState<boolean>(false);

     const location = useLocation();
     const { email } = (location.state as LocationState) || {};

     const navigator = useNavigate();

     const verificationProcessHandle = async () => {

          setIsLoading(true);

          if (code.length !== 6) {
               setResponseMessage("Please enter a valid 6-digit code.");
               setIsError(true);
               setIsLoading(false);
               return;
          }

          setIsError(false);

          await apiService.post('/users-verification/verify-account', {
               email: email,
               verificationCode: code
          })
               .then(response => {
                    if (response.data.status) {
                         setIsLoading(false);
                         setResponseMessage(response.data.message);
                         setIsError(false);
                         navigator('/users/authenticate');
                         return;
                    } else {
                         setIsLoading(false);
                         setResponseMessage(response.data.message);
                         setIsError(true);
                         return;
                    }
               })
               .catch(() => {
                    setIsLoading(false);
                    setResponseMessage("An error occurred while processing your request. Please try again later.");
                    setIsError(true);

               });
     }

     return (
          <div className="flex items-center justify-center pt-28">

               {isLoading && <LoadingView />}

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

                    <p className="text-gray-500 mb-6 font-inter-regular text-base md:text-md">
                         We've sent a verification code to: <span className='font-inter-medium text-black underline'>{email}</span>
                    </p>

                    <div className="flex flex-col">
                         {responseMessage && <p className="text-[14px] font-inter-regular mb-3 text-red-500">{responseMessage}</p>}
                    </div>

                    <OTPInput
                         value={code}
                         onChange={handleChange}
                         numInputs={6}
                         renderInput={(props) => <input {...props} />}
                         renderSeparator={<span></span>}
                         shouldAutoFocus={true}
                         inputStyle={{
                              border: isError ? "0.50px solid oklch(63.7% 0.237 25.331)" : "0.50px solid #e4e4e4",
                              fontFamily: 'inter-regular',
                              width: "54px",
                              height: "54px",
                              fontSize: "23px",
                              color: "#000000",
                              borderRadius: '5px',
                              fontWeight: "400",
                              caretColor: "black",
                              fontSizeAdjust: "20px",
                              marginRight: "10px",
                              outline: 'none'
                         }}
                    />

                    <button
                         onClick={verificationProcessHandle}
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