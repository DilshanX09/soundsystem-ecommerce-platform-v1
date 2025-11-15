import { FiSearch } from 'react-icons/fi';
import Logo from '../assets/images/Text-Logo.svg';
import { CiBookmark } from 'react-icons/ci';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import React, { useEffect, useState } from 'react';
import MiniProductCardComponent from './MiniProductCard.component';
import CartModel from '../models/Cart.model';
import DropdownComponent from './html-tag-component/Dropdown.component';
import type { Product } from '../types/Product.type';
import HeaderNavigationLinksComponent from './HeaderNavigationLinks.component';
import UserInformationDropdownComponent from './html-tag-component/UserInformationDropdown.component';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const sampleProducts: Product[] = [
     { id: 1, title: 'Yamaha DM7 Digital Mixing Console', category: 'Mixers, Consoles', price: 'Rs. 450,000.00' },
     { id: 2, title: 'Behringer X32 Compact Mixer', category: 'Mixers, Consoles', price: 'Rs. 220,000.00' },
     { id: 3, title: 'Shure SM7B Microphone', category: 'Microphones', price: 'Rs. 75,000.00' },
     { id: 4, title: 'JBL Studio Monitor Speakers', category: 'Speakers', price: 'Rs. 120,000.00' },
     { id: 5, title: 'Audio-Technica ATH-M50x Headphones', category: 'Headphones', price: 'Rs. 35,000.00' },
     { id: 6, title: 'Focusrite Scarlett 2i2 Interface', category: 'Audio Interfaces', price: 'Rs. 55,000.00' },
     { id: 6, title: 'Focusrite Scarlett 2i2 Interface', category: 'Audio Interfaces', price: 'Rs. 55,000.00' },
     { id: 6, title: 'Focusrite Scarlett 2i2 Interface', category: 'Audio Interfaces', price: 'Rs. 55,000.00' },
     { id: 6, title: 'Focusrite Scarlett 2i2 Interface', category: 'Audio Interfaces', price: 'Rs. 55,000.00' },
     { id: 6, title: 'Focusrite Scarlett 2i2 Interface', category: 'Audio Interfaces', price: 'Rs. 55,000.00' },
];

const HeaderComponent = () => {

     const { user } = useUser();
     const [isOpen, setIsOpen] = useState<boolean>(false);
     const [query, setQuery] = useState<string>('')
     const panelRef = React.useRef<HTMLDivElement>(null);
     const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);

     const navigate = useNavigate();

     useEffect(() => {
          const onKey = (e: KeyboardEvent) => {
               if (e.key === 'Escape') {
                    setIsOpen(false);
               }
          };
          document.addEventListener('keydown', onKey);
          return () => document.removeEventListener('keydown', onKey);
     }, []);


     const filtered = query
          ? sampleProducts.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()))
          : sampleProducts;


     const onSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          setIsOpen(true);
     };

     const SearchInputComponent = () => {
          return (
               <div className={`flex-1 lg:max-w-xl w-full`}>
                    <form onSubmit={onSubmit} className="flex items-center w-full py-1.5 bg-[#FAFAFA] border border-[#f6f6f6] rounded-lg overflow-hidden">
                         <div className="relative hidden md:block">
                              <select className="pl-4 outline-none pr-4 text-sm font-inter-regular bg-transparent text-neutral-700">
                                   <option>All Categories</option>
                                   <option>Headphones</option>
                                   <option>Speakers</option>
                                   <option>Microphones</option>
                              </select>
                         </div>
                         <div className="w-px h-6 bg-neutral-300 mx-3"></div>
                         <input value={query} onChange={(e) => setQuery(e.target.value)} onFocus={() => setIsOpen(true)} className="flex-grow font-inter-regular pr-2 py-2.5 text-sm bg-transparent border-none outline-none text-neutral-900 placeholder-neutral-500" placeholder="Search product here..." type="search" aria-label="Search products" />
                         <button onClick={() => setIsOpen(true)} className="p-2.5 text-neutral-500 hover:text-primary transition-colors" type="submit">
                              <FiSearch className='text-xl mr-2' />
                         </button>
                    </form>
               </div>
          );
     }

     return (
          <header>

               <div className="bg-[#212121] text-white">
                    <div className="container mx-auto px-4 lg:px-8 text-xs py-4">
                         <div className="flex justify-between items-center">
                              <p className="font-inter-medium text-[13px]">Tell a friends about Sound Crafters &amp; get 30% off your next order</p>
                              <nav className="md:flex text-[13px] hidden font-inter-medium items-center md:space-x-4">
                                   <a href="#">Track Order</a>
                                   <a href="#">Help Center</a>
                                   <a href="#">English</a>
                                   <a href="#">LKR</a>
                              </nav>
                         </div>
                    </div>
               </div>

               <div className='container lg:hidden py-4 px-4 mx-auto'>
                    <div className='flex justify-between items-center mb-3'>
                         <img className="h-10" src={Logo} alt="#Sound-Crafters-Logo" />

                         <DropdownComponent list={[
                              { id: 1, value: 'Log in' },
                              { id: 2, value: 'Create new account' }
                         ]} />

                    </div>

                    <SearchInputComponent />
               </div>

               <div className="container hidden lg:block mx-auto px-4 sm:px-6 lg:px-8 py-6">

                    <div className="flex justify-between items-center">

                         <div className="flex-shrink-0">
                              <img className="h-11" src={Logo} alt="#Sound-Crafters-Logo" />
                         </div>

                         <SearchInputComponent />

                         <div className='xl:hidden'>
                              <DropdownComponent list={[
                                   { id: 1, value: 'Log in' },
                                   { id: 2, value: 'Create new account' }
                              ]} />
                         </div>

                         <div className="items-center hidden xl:flex xl:space-x-6">

                              {user && <UserInformationDropdownComponent />}

                              {!user &&
                                   <button
                                        onClick={() => navigate('/users/authenticate')}
                                        className='bg-[#FAFAFA] px-4 py-2 cursor-pointer rounded-md font-inter-medium text-[14px]'
                                   >
                                        LOG IN
                                   </button>
                              }

                              <div className="w-px h-8 bg-neutral-300"></div>

                              <a className="relative text-neutral-600" href="#">
                                   <CiBookmark className='text-[25px]' />
                                   <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[10px] font-inter-medium bg-[#181818] w-5 h-5 rounded-full flex items-center justify-center">2</span>
                              </a>

                              <div className="flex items-center space-x-5 text-neutral-600 cursor-pointer" onClick={() => setCartIsOpen(true)}>
                                   <div className="relative">
                                        <LiaShoppingBagSolid className='text-[25px]' />
                                        <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[10px] font-inter-medium bg-[#181818] w-5 h-5 rounded-full flex items-center justify-center">2</span>
                                   </div>

                                   <div className="font-inter-medium" style={{ lineHeight: '18px' }}>
                                        <span className="text-black">My Cart</span>
                                        <div className="text-[14px] text-neutral-500">Rs. 5600.00</div>
                                   </div>
                              </div>

                         </div>

                    </div>
               </div>

               <HeaderNavigationLinksComponent />

               <CartModel cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />

               {isOpen && (
                    <MiniProductCardComponent filtered={filtered} setIsOpen={setIsOpen} panelRef={panelRef} query={query} setQuery={setQuery} onSubmit={onSubmit} />
               )}

          </header>
     );
}

export default HeaderComponent;