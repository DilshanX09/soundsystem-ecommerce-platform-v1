import React, { type JSX } from 'react';
import Logo from '../assets/images/White-Logo.jpg';

const FooterComponent: React.FC = (): JSX.Element => {
    return (
        <footer className="bg-[#111111] text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-14">

                    <div className="space-y-4 space-x-4 lg:col-span-6">
                        <img src={Logo} className='h-10 rounded-md' />
                        <h3 className="text-lg font-inter-semi-bold">About Our Store</h3>
                        <p className="text-sm text-neutral-400 font-inter-regular max-w-sm">
                            Welcome to our store. where we pride ourselves on providing exceptional products and unparalleled
                            customer service our store is a haven for those who appreciate quality, style, and innovation.
                        </p>

                        <div className="mt-10">
                            <h4 className="text-lg font-inter-medium mb-2">Store information</h4>
                            <p className="text-sm font-inter-regular text-neutral-400">Sound Crafters</p>
                            <p className="text-sm font-inter-regular text-neutral-400">NO 87/16 Colombo Street, Avissawella</p>
                            <p className="text-sm font-inter-regular text-neutral-400">Call us : +94 71 897 1234</p>
                            <p className="text-sm font-inter-regular text-neutral-400">Email us : soundcrafters@compny.com</p>
                        </div>
                    </div>

            
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-inter-semi-bold mb-3">Products</h3>
                        <ul className="space-y-2 text-sm font-inter-regular text-neutral-300">
                            <li><a className="hover:text-white text-neutral-400" href="#">Price drop</a></li>
                            <li><a className="hover:text-white text-neutral-400" href="#">New products</a></li>
                            <li><a className="hover:text-white text-neutral-400" href="#">Sitemap</a></li>
                            <li><a className="hover:text-white text-neutral-400" href="#">Stores</a></li>
                            <li><a className="hover:text-white text-neutral-400" href="#">Accessories</a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-inter-semi-bold mb-3">Our company</h3>
                        <ul className="space-y-2 text-sm font-inter-regular text-neutral-300">
                            <li><a className="hover:text-white text-neutral-400" href="#">Delivery</a></li>
                            <li><a className="hover:text-white text-neutral-400" href="#">Legal Notice</a></li>
                            <li><a className="hover:text-white text-neutral-400" href="#">Terms &amp; conditions</a></li>
                            <li><a className="hover:text-white text-neutral-400" href="#">Secure payment</a></li>
                            <li><a className="hover:text-white text-neutral-400" href="#">Contact us</a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-inter-semi-bold mb-3">Your account</h3>
                        <ul className="space-y-2 text-sm font-inter-regular text-neutral-300">
                            <li><a className="hover:text-white text-neutral-400" href="#">Order tracking</a></li>
                            <li><a className="hover:text-white text-neutral-400" href="#">Sign in</a></li>
                            <li><a className="hover:text-white text-neutral-400" href="#">Create account</a></li>
                            <li><a className="hover:text-white text-neutral-400" href="#">Discount</a></li>
                            <li><a className="hover:text-white text-neutral-400" href="#">Wishlist</a></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-neutral-800 font-inter-regular mt-8 pt-6 text-sm text-neutral-400 flex flex-col md:flex-row md:justify-between md:items-center">
                    <p className="mb-3 md:mb-0">© {new Date().getFullYear()} Sound Crafters. All rights reserved.</p>
                    <nav className="flex space-x-4">
                        <a className="hover:text-white" href="#">Privacy</a>
                        <a className="hover:text-white" href="#">Terms</a>
                        <a className="hover:text-white" href="#">Help</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
