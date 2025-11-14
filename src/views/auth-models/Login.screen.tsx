import { useState } from "react";

import { z } from "zod";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userLoginSchema } from "../../validation/schema";
import { IoMdInformationCircleOutline } from "react-icons/io";

import AuthSideBgImage from '../../assets/images/Auth-Side-Image.png';
import Logo from '../../assets/images/Dark-Logo.jpg';
import apiService from "../../services/apiService";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import LoadingView from "../Loading.view";

const LoginScreen = ({ changeView }: { changeView(view: 'login' | 'register'): void }) => {

     const navigator = useNavigate();

     const [email, setEmail] = useState<string>("");
     const [password, setPassword] = useState<string>("");
     const [staySignedIn, setStaySignedIn] = useState<boolean>(false);
     const [togglePasswordVisible, setTogglePasswordVisible] = useState<boolean>(false);
     const [serverResponse, setServerResponse] = useState<string>("");
     const [isError, setIsError] = useState<boolean>(false);

     const [isLoading, setIsLoading] = useState<boolean>(false);

     const { setUser } = useUser();

     const handleLogin = async (data: z.infer<typeof userLoginSchema>): Promise<void> => {

          setIsLoading(true);

          await apiService.post('/users/login', {
               email: data.email,
               password: data.password,
               staySignedIn: staySignedIn
          })
               .then(response => {
                    if (response.data.status) {
                         setIsLoading(false);
                         setServerResponse(response.data.message);
                         setUser(JSON.parse(response.data.user));
                         navigator('/');
                         setIsError(false);
                         return;
                    } else {
                         setIsLoading(false);
                         setServerResponse(response.data.message);
                         setIsError(true);
                         if (response.data.isVerified != null && !response.data.isVerified) {
                              navigator('/users/account-verification', { state: { email: data.email } });
                              return;
                         }
                         return;
                    }
               })
               .catch(() => {
                    setIsLoading(false);
                    setIsError(true);
                    setServerResponse("An error occurred while processing your request. Please try again later.");
                    return;
               });
     };

     const { register, handleSubmit, formState: { errors } } = useForm({
          resolver: zodResolver(userLoginSchema)
     })

     const handleFormSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          handleSubmit((data) => { handleLogin(data); })(e);
     }

     return (
          <div className="flex flex-col items-center justify-center md:flex-row h-screen bg-white">

               {isLoading && <LoadingView />}

               <div className="relative hidden md:block md:w-[30%] w-full h-screen md:h-full bg-black">
                    <img
                         alt="Excellence in Every Sound"
                         className="absolute inset-0 object-cover w-full h-full opacity-50"
                         src={AuthSideBgImage}
                    />
                    <div className="absolute inset-0 flex flex-col px-5 pt-16">
                         <h1 className="text-4xl md:text-5xl font-inter-bold text-white">
                              Excellence in Every Sound
                         </h1>
                    </div>
               </div>

               <div className="w-full md:w-[70%] h-full flex items-center justify-center p-6 md:p-12">
                    <div className="w-full max-w-md" onSubmit={handleFormSubmit}>

                         <div className="mb-4">
                              <img src={Logo} className="h-16 rounded-md" />
                         </div>

                         <h2 className="text-2xl font-inter-bold text-black mb-1">
                              Welcome Back to Sound Crafters
                         </h2>

                         <p className="text-gray-500 mb-3 font-inter-regular text-base md:text-md">
                              Continue your audio journey. Track orders, manage wishlists, and unlock member-exclusive pricing.
                         </p>

                         <div className="flex flex-col">
                              {serverResponse && <p className={`text-[14px] font-inter-regular mb-3 ${isError ? 'text-red-500' : 'text-green-500'}`}>{serverResponse}</p>}
                              {errors.email && <p className="text-red-500 text-[13px] font-inter-regular inline-flex items-center gap-1 mb-1"><IoMdInformationCircleOutline /> {errors.email.message}</p>}
                              {errors.password && <p className="text-red-500 text-[13px] font-inter-regular inline-flex items-center gap-1 mb-1"><IoMdInformationCircleOutline /> {errors.password.message}</p>}
                         </div>

                         <div className="space-y-3 mb-6 mt-2">

                              <input
                                   {...register('email')}
                                   type="email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   placeholder="Email address"
                                   className={`w-full py-3 border-b border-[#e4e4e4] placeholder:text-gray-500  outline-none font-inter-regular`}
                              />

                              <div className="relative">
                                   <input
                                        {...register('password')}
                                        type={togglePasswordVisible ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        className={`w-full py-3 border-b border-[#e4e4e4] placeholder:text-gray-500 outline-none font-inter-regular`}
                                   />
                                   {togglePasswordVisible ? (
                                        <VscEye className="absolute right-2 top-4 text-xl cursor-pointer" onClick={() => setTogglePasswordVisible(!togglePasswordVisible)} />
                                   ) : (
                                        <VscEyeClosed className="absolute right-2 top-3.5 text-xl cursor-pointer" onClick={() => setTogglePasswordVisible(!togglePasswordVisible)} />
                                   )}
                              </div>

                         </div>

                         <div>
                              <a href="#" className="text-black font-inter-regular hover:underline mb-4 sm:mb-0">
                                   Forget Password?
                              </a>

                         </div>

                         <div className="flex items-center justify-between py-5">
                              <span className="mr-3 text-black font-inter-medium">Save login for this session</span>
                              <div
                                   className={`w-12 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors ${staySignedIn ? 'bg-[#181818]' : 'bg-gray-300'}`}
                                   onClick={() => setStaySignedIn(!staySignedIn)}
                              >
                                   <div
                                        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${staySignedIn ? 'translate-x-5' : ''}`}
                                   />
                              </div>
                         </div>

                         <button
                              onClick={handleFormSubmit}
                              className="w-full bg-[#181818] text-[15px] text-white font-inter-medium text-lg py-4 rounded-[7px] hover:bg-[#2a2a2a] transition-colors mb-6"
                         >
                              LOG IN
                         </button>

                         <div className="text-base flex items-center gap-2 font-inter-regular">
                              <span className="text-[#6a6a6a]">Don't have an account? </span>
                              <p onClick={() => changeView('register')} className="text-black font-medium underline cursor-pointer">
                                   Create new account
                              </p>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default LoginScreen;

