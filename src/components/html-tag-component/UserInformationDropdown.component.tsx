import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { IoIosHelpCircleOutline, IoMdNotificationsOutline } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import { PiSignOut } from 'react-icons/pi';
import { RiUser4Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

import User from '../../assets/images/user.svg';

const UserInformationDropdownComponent = () => {

     const { user, setUser } = useUser();
     const navigate = useNavigate();

     return (
          <>
               <Menu as="div" className="relative">

                    <MenuButton className="flex w-full outline-none items-center cursor-pointer">

                         <div className='font-inter-regular'>
                              <img src={User} className='w-10 h-10 rounded-full' />
                         </div>

                    </MenuButton>

                    <MenuItems
                         transition
                         className="absolute font-inter-regular right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-black/10 rounded-xl bg-white p-2 border border-[#e4e4e4] outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                         <div className="py-1">
                              <MenuItem>
                                   <div className='bg-gray-100 mb-2 rounded-lg font-inter-regular p-2 flex items-center gap-2'>
                                        <img src={User} className='w-10 h-10 rounded-full' />
                                        <div style={{ lineHeight: '17px' }}>
                                             <h4>{user?.firstName} {user?.lastName}</h4>
                                             <p className='text-sm text-gray-500'>{user?.email}</p>
                                        </div>
                                   </div>
                              </MenuItem>
                         </div>

                         <div className="py-3">
                              <MenuItem>
                                   <a
                                        onClick={() => navigate('/users/profile')}
                                        className="px-4 py-2 text-[14px] rounded-lg text-black data-focus:bg-gray-100 data-focus:text-black data-focus:outline-hidden flex items-center gap-2"
                                   >
                                        <RiUser4Line />  <p>Account</p>
                                   </a>
                              </MenuItem>

                              <MenuItem>
                                   <a
                                        href="#"
                                        className="px-4 py-2 text-[14px] rounded-lg text-black data-focus:bg-gray-100 data-focus:text-black data-focus:outline-hidden flex items-center gap-2"
                                   >
                                        <IoSettingsOutline />  <p>Settings</p>
                                   </a>
                              </MenuItem>

                              <MenuItem>
                                   <a
                                        href="#"
                                        className="px-4 py-2 text-[14px] rounded-lg text-black data-focus:bg-gray-100 data-focus:text-black data-focus:outline-hidden flex items-center gap-2"
                                   >
                                        <MdOutlinePrivacyTip />  <p>Privacy</p>
                                   </a>
                              </MenuItem>

                              <MenuItem>
                                   <a
                                        href="#"
                                        className="px-4 py-2 text-[14px] rounded-lg text-black data-focus:bg-gray-100 data-focus:text-black data-focus:outline-hidden flex items-center gap-2"
                                   >
                                        <IoMdNotificationsOutline />  <p>Notifications</p>
                                   </a>
                              </MenuItem>

                              <MenuItem>
                                   <a
                                        href="#"
                                        className="px-4 py-2 text-[14px] rounded-lg text-black data-focus:bg-gray-100 data-focus:text-black data-focus:outline-hidden flex items-center gap-2"
                                   >
                                        <IoIosHelpCircleOutline />  <p>Help center</p>
                                   </a>
                              </MenuItem>

                         </div>
                         <div className="pt-2">
                              <MenuItem>
                                   <p
                                        onClick={() => {
                                             setUser(null);
                                             window.location.reload();
                                        }}
                                        className="px-4 py-2 text-[14px] cursor-pointer rounded-lg text-red-500 data-focus:bg-red-100 data-focus:text-red-500 data-focus:outline-hidden flex items-center gap-2"
                                   >
                                        <PiSignOut />  <p>Sign out</p>
                                   </p>
                              </MenuItem>
                         </div>
                    </MenuItems>
               </Menu>
          </>
     );
}
export default UserInformationDropdownComponent;