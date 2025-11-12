import { useState } from "react";
import AuthSideBgImage from '../../assets/images/Auth-Side-Image.png';
import Logo from '../../assets/images/Dark-Logo.jpg';
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const RegisterScreen = ({ changeView }: { changeView: (view: 'login' | 'register') => void }) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [togglePasswordVisible, setTogglePasswordVisible] = useState<boolean>(false);
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const handleRegister = () => {
        alert(`Register with:\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPassword: ${password}\nAgree to terms: ${agreeToTerms}`);
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
                        Create your new account
                    </h2>

                    <p className="text-gray-500 mb-8 font-inter-regular text-base md:text-md">
                        Create your account now. Unlock member benefits, track your orders, and discover premium audio equipment tailored for you.
                    </p>

                    <div className="space-y-5 mb-6">
                        <div className="flex space-x-4">
                            <input
                                type="email"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="First mame"
                                className="w-1/2 py-3  border-b border-[#e4e4e4] placeholder:text-gray-500 outline-none font-inter-regular"
                            />
                            <input
                                type="email"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Last mame"
                                className="w-1/2 py-3  border-b border-[#e4e4e4] placeholder:text-gray-500 outline-none font-inter-regular"
                            />
                        </div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email address"
                            className="w-full py-3  border-b border-[#e4e4e4] placeholder:text-gray-500 outline-none font-inter-regular"
                        />
                        <div className="flex space-x-4">
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
                            <div className="relative">
                                <input
                                    type={togglePasswordVisible ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm Password"
                                    className="w-full py-3 border-b border-[#e4e4e4] outline-none placeholder:text-gray-500 font-inter-regular"
                                />
                                {togglePasswordVisible ? (
                                    <VscEye className="absolute right-2 top-4 text-xl cursor-pointer" onClick={() => setTogglePasswordVisible(!togglePasswordVisible)} />
                                ) : (
                                    <VscEyeClosed className="absolute right-2 top-3.5 text-xl cursor-pointer" onClick={() => setTogglePasswordVisible(!togglePasswordVisible)} />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-6 text-sm md:text-base">
                        <p className="mr-3 text-gray-500 font-inter-regular">
                            By creating an account, I agree to the <a href="#" className="underline text-black">Terms of Service</a> and <a href="#" className="underline text-black">Privacy Policy</a>
                        </p>
                        <div
                            className={`w-16 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors ${agreeToTerms ? 'bg-[#181818]' : 'bg-gray-300'}`}
                            onClick={() => setAgreeToTerms(!agreeToTerms)}
                        >
                            <div
                                className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${agreeToTerms ? 'translate-x-5' : ''}`}
                            />
                        </div>
                    </div>

                    <button
                        onClick={handleRegister}
                        className="w-full bg-[#181818] text-white font-inter-medium text-[15px] text-lg py-4 rounded-[7px] hover:bg-[#2a2a2a] transition-colors mb-6"
                    >
                        CREATE NEW ACCOUNT
                    </button>

                    <p className="flex items-center gap-2 text-base font-inter-regular">
                        <span className="text-[#6a6a6a]">Already have an account? </span>
                        <p onClick={() => changeView('login')} className="text-black font-medium underline cursor-pointer">
                            Log in
                        </p>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RegisterScreen;
