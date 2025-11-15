import { BsGift } from 'react-icons/bs';
import React from 'react';
import type { Product } from '../types/Product.type';
import { FaArrowRightLong } from 'react-icons/fa6';
import { HiOutlineBars3BottomRight } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';
import { Navigate, useNavigate } from 'react-router-dom';

const HeaderNavigationLinksComponent = () => {

     const navigate = useNavigate();
     const navScrollRef = React.useRef<HTMLDivElement | null>(null);
     const isDown = React.useRef<boolean>(false);
     const startX = React.useRef<number>(0);
     const scrollLeft = React.useRef<number>(0);
     const [dragging, setDragging] = React.useState<boolean>(false);
     const isDraggingRef = React.useRef<boolean>(false);

     const menuRef = React.useRef<HTMLDivElement | null>(null);
     const menuButtonRef = React.useRef<HTMLButtonElement | null>(null);
     const productsMenuRef = React.useRef<HTMLDivElement | null>(null);
     const productsButtonRef = React.useRef<HTMLAnchorElement | null>(null);
     const [openMenu, setOpenMenu] = React.useState<string | null>(null);

     const categoriesData = [
          {
               name: 'Mixers & Consoles',
               subs: ['Digital Mixers', 'Analog Mixers', 'Stage Mixers', 'Accessories']
          },
          { name: 'Headphones', subs: ['Studio Headphones', 'Wireless', 'In-ear', 'Accessories'] },
          { name: 'Speakers', subs: ['Studio Monitors', 'PA Speakers', 'Subwoofers'] },
          { name: 'Microphones', subs: ['Dynamic', 'Condenser', 'USB', 'Wireless'] },
     ];

     const sampleProducts: Product[] = [
          { id: 1, title: 'Yamaha DM7 Digital Mixing Console', category: 'Mixers, Consoles', price: 'Rs. 450,000.00' },
          { id: 2, title: 'Behringer X32 Compact Mixer', category: 'Mixers, Consoles', price: 'Rs. 220,000.00' },
          { id: 3, title: 'Shure SM7B Microphone', category: 'Microphones', price: 'Rs. 75,000.00' },
          { id: 4, title: 'JBL Studio Monitor Speakers', category: 'Speakers', price: 'Rs. 120,000.00' },
          { id: 5, title: 'Audio-Technica ATH-M50x Headphones', category: 'Headphones', price: 'Rs. 35,000.00' },
          { id: 6, title: 'Focusrite Scarlett 2i2 Interface', category: 'Audio Interfaces', price: 'Rs. 55,000.00' },
          { id: 7, title: 'Native Instruments Komplete Audio 6', category: 'Audio Interfaces', price: 'Rs. 65,000.00' },
          { id: 8, title: 'AKG K371 Studio Headphones', category: 'Headphones', price: 'Rs. 28,000.00' },
          { id: 9, title: 'Sennheiser e835 Microphone', category: 'Microphones', price: 'Rs. 14,000.00' },
          { id: 10, title: 'KRK Rokit 5 Studio Monitor', category: 'Speakers', price: 'Rs. 48,000.00' },
     ];

     const onMouseDownNav = (e: React.MouseEvent) => {
          if (!navScrollRef.current) return;
          isDown.current = true;
          isDraggingRef.current = false;
          startX.current = e.pageX - (navScrollRef.current.offsetLeft || 0);
          scrollLeft.current = navScrollRef.current.scrollLeft;
     };

     const onMouseMoveNav = (e: React.MouseEvent) => {
          if (!isDown.current || !navScrollRef.current) return;
          e.preventDefault();
          const x = e.pageX - (navScrollRef.current.offsetLeft || 0);
          const dx = x - startX.current;

          if (!isDraggingRef.current && Math.abs(dx) > 6) {
               isDraggingRef.current = true;
               setDragging(true);
               navScrollRef.current.classList.add('cursor-grabbing');
          }
          if (isDraggingRef.current) {
               const walk = dx * 1;
               navScrollRef.current.scrollLeft = scrollLeft.current - walk;
          }
     };

     const onMouseUpNav = () => {
          isDown.current = false;
          setDragging(false);
          if (navScrollRef.current) navScrollRef.current.classList.remove('cursor-grabbing');
          // leave isDraggingRef true for a tick to allow click suppression, then reset
          setTimeout(() => { isDraggingRef.current = false; }, 0);
     };

     const onTouchStartNav = (e: React.TouchEvent) => {
          if (!navScrollRef.current) return;
          isDown.current = true;
          setDragging(true);
          startX.current = e.touches[0].pageX - (navScrollRef.current.offsetLeft || 0);
          scrollLeft.current = navScrollRef.current.scrollLeft;
     };

     const onTouchMoveNav = (e: React.TouchEvent) => {
          if (!isDown.current || !navScrollRef.current) return;
          const x = e.touches[0].pageX - (navScrollRef.current.offsetLeft || 0);
          const walk = (x - startX.current) * 1;
          navScrollRef.current.scrollLeft = scrollLeft.current - walk;
     };

     const onTouchEndNav = () => {
          isDown.current = false;
          setDragging(false);
     };

     React.useEffect(() => {
          const onDocClick = (e: MouseEvent) => {
               const target = e.target as Node;
               if (!openMenu) return;
               if (menuRef.current && menuRef.current.contains(target)) return;
               if (menuButtonRef.current && menuButtonRef.current.contains(target)) return;
               if (productsMenuRef.current && productsMenuRef.current.contains(target)) return;
               if (productsButtonRef.current && productsButtonRef.current.contains(target)) return;
               setOpenMenu(null);
          };
          document.addEventListener('mousedown', onDocClick);
          return () => document.removeEventListener('mousedown', onDocClick);
     }, [openMenu]);

     return (
          <>
               <div className="md:block border-t border-neutral-100 border-b dark:border-neutral-700">
                    <div
                         ref={navScrollRef}
                         onMouseDown={onMouseDownNav}
                         onMouseMove={onMouseMoveNav}
                         onMouseUp={onMouseUpNav}
                         onMouseLeave={onMouseUpNav}
                         onTouchStart={onTouchStartNav}
                         onTouchMove={onTouchMoveNav}
                         onTouchEnd={onTouchEndNav}
                         className={`container no-scrollbar overflow-x-auto mx-auto px-4 sm:px-6 lg:px-8 py-4 ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                    >
                         <div className="flex justify-between items-center text-sm font-inter-medium">
                              <div className="flex items-center space-x-8">
                                   <button className="flex items-center space-x-2 transition-colors">
                                        <HiOutlineBars3BottomRight className='text-2xl mt-1 cursor-pointer' />

                                        <select className='text-[14px] outline-none pr-5 font-inter-regular'>

                                             <option className="text-left">SHOP BY CATEGORY</option>

                                             {categoriesData.map((c, index) => (
                                                  <option key={index} className="text-left">{c.name}</option>
                                             ))}

                                        </select>

                                   </button>
                                   <div className="w-px h-5 bg-neutral-300 dark:bg-neutral-600"></div>
                                   <nav className="flex items-center cursor-pointer space-x-8 relative">

                                        <p onClick={() => navigate('/')}>HOME</p>
                                        <a href="#">SHOP</a>
                                        <div className="relative">
                                             <button ref={menuButtonRef} onClick={(e) => { if (isDraggingRef.current) { e.preventDefault(); return; } e.preventDefault(); setOpenMenu(openMenu === 'categories' ? null : 'categories'); }} className="inline-flex items-center cursor-pointer">
                                                  CATEGORIES
                                             </button>
                                             <div
                                                  ref={menuRef}
                                                  className={`fixed w-full h-screen top-0 border-b border-[#e4e4e4] bg-white lg:border-none lg:mx-0 left-0 z-50 transition-all duration-200 ease-out ${openMenu === 'categories' ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                                                  <div className="md:grid cursor-pointer mt-10 lg:grid-cols-5 md:gap-6 md:p-6 md:bg-white">

                                                       <IoClose className='text-2xl absolute right-5 top-5'
                                                            onClick={(e) => { if (isDraggingRef.current) { e.preventDefault(); return; } e.preventDefault(); setOpenMenu(openMenu === 'categories' ? null : 'categories'); }}
                                                       />

                                                       <div className='mt-4 md:mt-0 ml-4 md:ml-0'>
                                                            <h4 className="text-lg font-inter-bold mb-6 uppercase">Shop by category</h4>
                                                            <ul className="text-sm text-neutral-700 space-y-2">
                                                                 {categoriesData.map((c) => (
                                                                      <li key={c.name}>
                                                                           <a
                                                                                href="#"
                                                                                className="block font-inter-regular hover:text-primary"
                                                                           >
                                                                                {c.name}
                                                                           </a>
                                                                      </li>
                                                                 ))}
                                                            </ul>
                                                       </div>

                                                       <div className='mt-4 md:mt-0 ml-4 md:ml-0'>
                                                            <h4 className="text-lg font-inter-bold mb-6 uppercase">Featured Collections</h4>
                                                            <ul className="text-sm font-inter-regular text-neutral-700 space-y-2">
                                                                 <li><a href="#" className="block hover:text-primary">Studio Essentials</a></li>
                                                                 <li><a href="#" className="block hover:text-primary">Live Sound</a></li>
                                                                 <li><a href="#" className="block hover:text-primary">Podcasting</a></li>
                                                                 <li><a href="#" className="block hover:text-primary">Home Recording</a></li>
                                                            </ul>
                                                       </div>

                                                       <div className='mt-4 md:mt-0 ml-4 md:ml-0 pb-4'>
                                                            <h4 className="text-sm font-inter-medium mb-3 uppercase">Top Brands</h4>
                                                            <div className="flex flex-wrap font-inter-regular gap-2 mb-3">
                                                                 <a href="#" className="px-3 py-2 bg-neutral-100 rounded">Yamaha</a>
                                                                 <a href="#" className="px-3 py-2 bg-neutral-100 rounded">Behringer</a>
                                                                 <a href="#" className="px-3 py-2 bg-neutral-100 rounded">Shure</a>
                                                                 <a href="#" className="px-3 py-2 bg-neutral-100 rounded">JBL</a>
                                                                 <a href="#" className="px-3 py-2 bg-neutral-100 rounded">Sennheiser</a>
                                                            </div>
                                                       </div>

                                                  </div>
                                             </div>
                                        </div>

                                        <div className="relative">
                                             <a ref={productsButtonRef} href="#" onClick={(e) => { if (isDraggingRef.current) { e.preventDefault(); return; } e.preventDefault(); setOpenMenu(openMenu === 'products' ? null : 'products'); }} className="inline-flex items-center cursor-pointer">
                                                  PRODUCTS
                                             </a>
                                             <div ref={productsMenuRef} className={`fixed cursor-pointer m-0 left-0 top-0 w-full border-b border-[#e4e4e4] h-screen bg-white p-6 z-50 transition-all duration-200 ease-out ${openMenu === 'products' ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>

                                                  <IoClose className='text-2xl absolute right-5 top-5'
                                                       onClick={(e) => { if (isDraggingRef.current) { e.preventDefault(); return; } e.preventDefault(); setOpenMenu(openMenu === 'products' ? null : 'products'); }}
                                                  />

                                                  <h4 className="text-xl uppercase font-inter-bold mb-6">Latest products</h4>

                                                  <div className='flex items-center gap-16 overflow-x-auto' onMouseLeave={() => { }}>

                                                       <div className="lg:hidden space-y-3">
                                                            {sampleProducts.slice(0, 4).reverse().map(p => (
                                                                 <a key={p.id} href="#" className="flex items-center gap-3">
                                                                      <div className="w-24 rounded-md h-24 bg-neutral-100 flex items-center justify-center text-xs text-neutral-500">img</div>
                                                                      <div className="text-sm">
                                                                           <div className="text-neutral-900">{p.title}</div>
                                                                           <div className="text-neutral-500 font-inter-regular">{p.category}</div>
                                                                           <div className="text-[14px] mt-2 text-neutral-800 font-inter-regular">{p.price}</div>
                                                                      </div>
                                                                 </a>
                                                            ))}
                                                       </div>

                                                       {Array.from({ length: 4 }).map((_, index) => {
                                                            return (
                                                                 <div className="hidden lg:block space-y-3" key={index}>
                                                                      {sampleProducts.slice(0, 4).reverse().map(p => (
                                                                           <a key={p.id} href="#" className="flex items-center gap-3">
                                                                                <div className="w-24 rounded-md h-24 bg-neutral-100 flex items-center justify-center text-xs text-neutral-500">img</div>
                                                                                <div className="text-sm">
                                                                                     <div className="text-neutral-900">{p.title}</div>
                                                                                     <div className="text-neutral-500 font-inter-regular">{p.category}</div>
                                                                                     <div className="text-[14px] mt-2 text-neutral-800 font-inter-regular">{p.price}</div>
                                                                                </div>
                                                                           </a>
                                                                      ))}
                                                                 </div>
                                                            );

                                                       })}

                                                  </div>

                                                  <p className='font-inter-medium mt-4 underline inline-flex gap-3 items-center'>Continue Shopping <FaArrowRightLong /></p>

                                             </div>
                                        </div>

                                        <a href="#">DEALS</a>

                                   </nav>
                              </div>
                              <a className="items-center md:hidden font-inter-medium space-x-2 hidden lg:flex" href="#">
                                   <BsGift className='text-xl' />
                                   <span>Weekly Deal</span>
                              </a>
                         </div>
                    </div>
               </div>
          </>
     );
}

export default HeaderNavigationLinksComponent;