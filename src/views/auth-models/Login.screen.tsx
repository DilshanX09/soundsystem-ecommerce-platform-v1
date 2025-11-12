import { useState } from "react";
import AuthSideBgImage from '../../assets/images/Auth-Side-Image.png';
import Logo from '../../assets/images/Dark-Logo.jpg';
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const LoginScreen = ({ changeView }: { changeView(view: 'login' | 'register'): void }) => {

     const [email, setEmail] = useState<string>("");
     const [password, setPassword] = useState<string>("");
     const [staySignedIn, setStaySignedIn] = useState<boolean>(false);
     const [togglePasswordVisible, setTogglePasswordVisible] = useState<boolean>(false);

     const handleLogin = (): void => {
          alert(`Login with:\nEmail: ${email}\nPassword: ${password}\nStay signed in: ${staySignedIn}`);
     };

     return (
          <div className="flex flex-col items-center justify-center md:flex-row h-screen bg-white">

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
                    <div className="w-full max-w-md">

                         <div className="mb-4">
                              <img src={Logo} className="h-16 rounded-md" />
                         </div>

                         <h2 className="text-2xl font-inter-bold text-black mb-1">
                              Welcome Back to Sound Crafters
                         </h2>

                         <p className="text-gray-500 mb-8 font-inter-regular text-base md:text-md">
                              Continue your audio journey. Track orders, manage wishlists, and unlock member-exclusive pricing.
                         </p>

                         <div className="space-y-3 mb-6">

                              <input
                                   type="email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   placeholder="Email address"
                                   className="w-full py-3  border-b border-[#e4e4e4] placeholder:text-gray-500 outline-none font-inter-regular"
                              />

                              <div className="relative">
                                   <input
                                        type={togglePasswordVisible ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        className="w-full py-3 border-b border-[#e4e4e4] outline-none placeholder:text-gray-500 font-inter-regular"
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
                              onClick={handleLogin}
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

