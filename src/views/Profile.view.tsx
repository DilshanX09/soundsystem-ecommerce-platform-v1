import React from "react";
import { useNavigate } from "react-router-dom";

import { BiBell, BiCreditCard, BiHeart, BiHelpCircle, BiMapPin, BiShield, BiShoppingBag, BiUser } from "react-icons/bi";

import FooterComponent from "../components/Footer.component";
import HeaderComponent from "../components/Header.component";
import BreadcrumbsComponent from "../components/Breadcrumbs.component";

import { ProfileContent } from "./profile-models/ProfileInformation.content";
import { OrdersContent } from "./profile-models/Order.content";
import { AddressesContent } from "./profile-models/Address.content";
import { WishlistContent } from "./profile-models/Wishlist.content";
import { PaymentContent } from "./profile-models/Payment.content";

import LoadingView from "./Loading.view";
import apiService from "../services/apiService";
import { useUser } from "../context/UserContext";

const navigationItems: { id: string, label: string, icon: React.ElementType, badge?: string }[] = [
     { id: 'dashboard', label: 'Dashboard', icon: BiUser },
     { id: 'orders', label: 'My Orders', icon: BiShoppingBag, badge: '3' },
     { id: 'addresses', label: 'Addresses', icon: BiMapPin },
     { id: 'wishlist', label: 'Wishlist', icon: BiHeart, badge: '12' },
     { id: 'payment', label: 'Payment Methods', icon: BiCreditCard },
     { id: 'notifications', label: 'Notifications', icon: BiBell },
     { id: 'security', label: 'Security', icon: BiShield },
     { id: 'support', label: 'Help & Support', icon: BiHelpCircle },
];

const ProfileView = () => {

     const { user } = useUser();
     const navigate = useNavigate();

     const [activeSection, setActiveSection] = React.useState<string>('dashboard');
     const [response, setResponseMessage] = React.useState<string>("");
     const [provinces, setProvinces] = React.useState<[{ id: number, name: string }]>();
     const [cities, setCities] = React.useState<[{ id: number, name: string }]>();
     const [isLoading, setIsLoading] = React.useState<boolean>(false);
     const [isError, setIsError] = React.useState<boolean>(false);

     const checkAuthorization = React.useCallback(() => {
          if (!user) {
               navigate('/users/authenticate');
               return false;
          }
          return true;
     }, [user, navigate]);

     React.useEffect(() => {
          const fetchData = async () => {
               if (checkAuthorization()) {
                    setIsLoading(true);
                    try {
                         const [citiesResponse, provincesResponse] = await Promise.all([
                              apiService.get('/data/cities'),
                              apiService.get('/data/provinces')
                         ]);

                         if (citiesResponse.data.cities) {
                              setCities(citiesResponse.data.cities);
                         }

                         if (provincesResponse.data.provinces) {
                              setProvinces(provincesResponse.data.provinces);
                         }

                    } catch {
                         setIsError(true);
                         setResponseMessage("An error occurred while fetching data. Please try again later.");
                    } finally {
                         setIsLoading(false);
                         setIsError(false);
                    }
               }
          };

          fetchData();

     }, [checkAuthorization]);

     const renderContent = () => {
          switch (activeSection) {
               case 'dashboard':
                    return <ProfileContent user={user} cities={cities} provinces={provinces} />;
               case 'orders':
                    return <OrdersContent />;
               case 'addresses':
                    return <AddressesContent />;
               case 'wishlist':
                    return <WishlistContent />;
               case 'payment':
                    return <PaymentContent />;
               default:
                    return <ProfileContent user={user} cities={cities} provinces={provinces} />;
          }
     };

     return (
          <>
               <HeaderComponent />

               {isLoading && <LoadingView />}

               <div className="min-h-screen">

                    <header className="container mx-auto px-4 lg:px-8 py-4">
                         <div className="mx-auto flex items-center justify-between">
                              <h1 className="text-2xl font-inter-bold text-gray-900">My Account</h1>
                              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                                   <BreadcrumbsComponent list={[{ label: 'My Account' }]} />
                              </button>
                         </div>
                    </header>

                    {isError && <p className="container mx-auto lg:px-8 py-2 font-inter-regular text-red-500">** {response}</p>}

                    <div className="container mx-auto px-4 lg:px-8 py-4">
                         <div className="flex gap-6">

                              <aside className="w-60 hidden lg:block flex-shrink-0">

                                   <div>
                                        <div className="flex items-center gap-3 pb-4 mb-4 border-b border-gray-200">
                                             <div className='font-inter-regular flex items-center gap-2'>

                                                  <img src='https://randomuser.me/api/portraits/men/1.jpg' className='w-11 h-11 rounded-full' />
                                                  <div style={{ lineHeight: '19px' }}>
                                                       <h4 className='text-start text-[14px]'>Chamod Dilshan</h4>
                                                       <p className='text-[13px] text-gray-500'>chamoddilshan@gmail.com</p>
                                                  </div>

                                             </div>
                                        </div>

                                        <nav className="space-y-1">
                                             {navigationItems.map((item) => {
                                                  const Icon = item.icon;
                                                  const isActive = activeSection === item.id;
                                                  return (
                                                       <button
                                                            key={item.id}
                                                            onClick={() => setActiveSection(item.id)}
                                                            className={`w-full flex items-center cursor-pointer gap-3 px-3 py-3 rounded-lg transition-colors ${isActive
                                                                 ? 'bg-gray-50 text-black'
                                                                 : 'text-gray-500 hover:bg-gray-50'
                                                                 }`}
                                                       >
                                                            <Icon size={20} />
                                                            <span className="flex-1 text-left text-[14px] font-inter-medium">{item.label}</span>
                                                            {item.badge && (
                                                                 <span className="bg-[#181818] text-white text-xs font-inter-regular inline-block px-2 py-0.5  rounded-full">
                                                                      {item.badge}
                                                                 </span>
                                                            )}
                                                       </button>
                                                  );
                                             })}
                                        </nav>
                                   </div>
                              </aside>

                              <main className="flex-1">
                                   {renderContent()}
                              </main>

                              <div className="space-y-2">
                                   <div className="w-60 hidden lg:block">
                                        <div className="border border-[#e4e4e4] p-3 rounded-md">
                                             <h1 className="font-inter-medium">Hello world</h1>
                                             <p className="font-inter-regular text-[13px] text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam architecto iusto rem veritatis nesciunt, nemo nobis fugiat aliquid ipsam facilis excepturi, placeat nostrum aperiam unde.</p>
                                             <button className="bg-[#181818] text-white font-inter-regular w-full mt-2 py-2 rounded-md text-[13px]">EXPLORE</button>
                                        </div>
                                   </div>

                                   <div className="w-60 hidden lg:block">
                                        <div className="border border-[#e4e4e4] p-3 rounded-md">
                                             <h1 className="font-inter-medium">Hello world</h1>
                                             <p className="font-inter-regular text-[13px] text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam architecto iusto rem veritatis nesciunt, nemo nobis fugiat aliquid ipsam facilis excepturi, placeat nostrum aperiam unde.</p>
                                             <button className="bg-[#181818] text-white font-inter-regular w-full mt-2 py-2 rounded-md text-[13px]">EXPLORE</button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <FooterComponent />
          </>
     );
}

export default ProfileView;