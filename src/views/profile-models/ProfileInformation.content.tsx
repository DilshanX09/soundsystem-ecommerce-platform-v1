import type { UserContext } from "../../types/User.type";

interface ProfileContentProps {
     user: UserContext | null,
     cities: { id: number, name: string }[] | undefined,
     provinces: { id: number, name: string }[] | undefined
}

export const ProfileContent = ({ user, cities, provinces }: ProfileContentProps) => {

     return (
          <div className="bg-white rounded-lg border border-gray-200">

               <div className="px-10 py-5 border-b border-gray-200">
                    <h2 className="text-xl font-inter-medium text-gray-900">Profile Information</h2>
                    <p className="text-gray-500 font-inter-regular">Complete details about your account and profile</p>
               </div>

               <div className="p-10 space-y-6 font-inter-regular">

                    <div className="flex items-center gap-5">
                         <div className="flex items-center gap-6">
                              <img src='https://randomuser.me/api/portraits/men/1.jpg' className='w-[100px] h-[100px] rounded-full' />
                         </div>
                         <button className="mt-4 px-4 py-2.5 bg-gray-800 text-white text-[14px] rounded-md hover:bg-gray-900 transition-colors">Change Profile Picture</button>
                    </div>

                    <div>
                         <h3 className="text-lg font-inter-medium text-gray-900 mb-4">Personal Information</h3>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                   <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                   <input className="py-2 border-b border-[#e4e4e4] w-full text-gray-900 outline-none" defaultValue={user?.firstName} />
                              </div>

                              <div>
                                   <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                   <input className="py-2 border-b border-[#e4e4e4] w-full text-gray-900 outline-none" defaultValue={user?.lastName} />
                              </div>
                         </div>
                    </div>

                    <div>
                         <h3 className="text-lg font-inter-medium text-gray-900 mb-4">Contact Information</h3>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                   <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                   <input className="py-2 border-b border-[#e4e4e4] w-full text-gray-900 outline-none" defaultValue={user?.email} />
                              </div>

                              <div>
                                   <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                   <input className="py-2 border-b border-[#e4e4e4] w-full text-gray-900 outline-none" defaultValue={user?.mobile} />
                              </div>
                         </div>
                    </div>

                    <div>
                         <h3 className="text-lg font-inter-medium text-gray-900 mb-4">Address Information</h3>


                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                   <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                                   <input className="py-2 border-b border-[#e4e4e4] w-full text-gray-900 outline-none" defaultValue={user?.addressLineOne} />
                              </div>

                              <div>
                                   <label className="block text-sm font-medium text-gray-700 mb-2">Province</label>
                                   <select className="w-full border-b border-gray-300 py-2 text-gray-900 outline-none">
                                        <option>Province</option>
                                        {provinces && provinces.map((province) => (
                                             <option key={province.id} value={province.id} selected={user?.provinceId === province.id}>{province.name}</option>
                                        ))}
                                   </select>
                              </div>

                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">

                              <div>
                                   <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                                   <select className="w-full border-b border-gray-300 py-2 text-gray-900 outline-none">
                                        <option>City</option>
                                        {cities && cities.map((city) => (
                                             <option key={city.id} value={city.id} selected={user?.cityId === city.id}>{city.name}</option>
                                        ))}
                                   </select>
                              </div>

                              <div>
                                   <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                                   <input className="py-2 border-b border-[#e4e4e4] w-full text-gray-900 outline-none" defaultValue={user?.postalCode} />
                              </div>

                         </div>

                    </div>

                    <div className="pt-6 border-t border-gray-200">
                         <div className="flex justify-between items-center">
                              <div>
                                   <h3 className="text-lg font-inter-medium text-gray-900">Password & Security</h3>
                                   <p className="text-[14px] text-gray-500 font-inter-regular">Manage your password and security settings</p>
                              </div>
                              <button className="px-4 py-2.5 bg-gray-800 text-white text-[14px] rounded-md hover:bg-gray-900 transition-colors">Reset Password</button>
                         </div>
                    </div>
               </div>
          </div >
     );
};