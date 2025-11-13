import { useState } from "react";
import { useNavigate } from "react-router-dom";


import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from "react-hook-form";

import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { IoMdInformationCircleOutline } from "react-icons/io";

import { userRegisterSchema } from "../../validation/schema";

import Logo from '../../assets/images/Dark-Logo.jpg';
import AuthSideBgImage from '../../assets/images/Auth-Side-Image.png';
import apiService from "../../services/apiService";

const RegisterScreen = ({ changeView }: { changeView: (view: 'login' | 'register') => void }) => {

    const navigator = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [togglePasswordVisible, setTogglePasswordVisible] = useState<boolean>(false);
    const [serverResponse, setServerResponse] = useState<string>("");
    const [isError, setIsError] = useState<boolean>(false);

    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: zodResolver(userRegisterSchema),
        mode: 'onTouched',
        defaultValues: {
            agreeToTerms: false
        }
    });

    const handleRegister = async (data: z.infer<typeof userRegisterSchema>) => {

        await apiService.post('/users/register', {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password
        })
            .then(response => {
                if (response.data.status) {
                    setServerResponse(response.data.message);
                    setIsError(false);
                    if (response.data.vcode) navigator('/users/account-verification', { state: { email: data.email } });
                    return;
                } else {
                    setServerResponse(response.data.message);
                    setIsError(true);
                    return;
                }
            }).catch(() => {
                setIsError(true);
                setServerResponse("An error occurred while processing your request. Please try again later.");
            });
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSubmit((data) => { handleRegister(data); })(e);
    };

    return (
        <div className="flex flex-col items-center justify-center md:flex-row h-screen bg-white" >

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
                        Create your new account
                    </h2>

                    <p className="text-gray-500 mb-5 font-inter-regular text-base md:text-md">
                        Create your account now. Unlock member benefits, track your orders, and discover premium audio equipment tailored for you.
                    </p>

                    <div className="flex flex-col">
                        {serverResponse && <p className={`text-[14px] font-inter-regular mb-3 ${isError ? 'text-red-500' : 'text-green-500'}`}>{serverResponse}</p>}
                        {errors.firstName && <p className="text-red-500 text-[13px] font-inter-regular inline-flex items-center gap-1"><IoMdInformationCircleOutline />{errors.firstName.message}</p>}
                        {errors.lastName && <p className="text-red-500 text-[13px] font-inter-regular inline-flex items-center gap-1"><IoMdInformationCircleOutline />{errors.lastName.message}</p>}
                        {errors.email && <p className="text-red-500 text-[13px] font-inter-regular inline-flex items-center gap-1"><IoMdInformationCircleOutline /> {errors.email.message}</p>}
                        {errors.password && <p className="text-red-500 text-[13px] font-inter-regular inline-flex items-center gap-1"><IoMdInformationCircleOutline />{errors.password.message}</p>}
                        {errors.confirmPassword && <p className="text-red-500 text-[13px] font-inter-regular inline-flex items-center gap-1"><IoMdInformationCircleOutline />{errors.confirmPassword.message}</p>}
                        {errors.agreeToTerms && <p className="text-red-500 text-[13px] font-inter-regular inline-flex items-center gap-1"><IoMdInformationCircleOutline />{errors.agreeToTerms.message}</p>}
                    </div>

                    <div className="space-y-5 mb-6 pt-5">
                        <div className="flex space-x-4">
                            <input
                                {...register('firstName')}
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="First name"
                                className="w-1/2 py-3  border-b border-[#e4e4e4] placeholder:text-gray-500 outline-none font-inter-regular"
                            />
                            <input
                                {...register('lastName')}
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Last mame"
                                className="w-1/2 py-3  border-b border-[#e4e4e4] placeholder:text-gray-500 outline-none font-inter-regular"
                            />
                        </div>
                        <input
                            {...register('email')}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email address"
                            className="w-full py-3 border-b border-[#e4e4e4] placeholder:text-gray-500 outline-none font-inter-regular"
                        />
                        <div className="flex space-x-4">
                            <div className="relative">
                                <input
                                    {...register('password')}
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
                                    {...register('confirmPassword')}
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

                    <div className="flex items-center justify-between gap-4 mb-6">
                        <span className="font-inter-regular text-gray-500">By creating an account, I agree to the
                            <span className="text-black underline"> Terms of Service</span> and <span className="text-black">Privacy Policy</span>
                        </span>
                        <Controller
                            name="agreeToTerms"
                            control={control}
                            render={({ field }) => (
                                <div
                                    className={`w-16 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors ${field.value ? 'bg-[#181818]' : 'bg-gray-300'
                                        }`}
                                    onClick={() => field.onChange(!field.value)}
                                >
                                    <div
                                        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${field.value ? 'translate-x-5' : ''}`}
                                    />
                                </div>
                            )}
                        />
                    </div>

                    <button
                        onClick={handleFormSubmit}
                        className="w-full bg-[#181818] text-white font-inter-medium text-[15px] text-lg py-4 rounded-[7px] hover:bg-[#2a2a2a] transition-colors mb-6"
                    >
                        CREATE NEW ACCOUNT
                    </button>

                    <div className="flex items-center gap-2 text-base font-inter-regular">
                        <span className="text-[#6a6a6a]">Already have an account? </span>
                        <p onClick={() => changeView('login')} className="text-black font-medium underline cursor-pointer">
                            Log in
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default RegisterScreen;
