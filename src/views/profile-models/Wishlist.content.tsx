import { BiPackage } from "react-icons/bi";

export const WishlistContent = () => {
     return (
          <div className="bg-white rounded-lg border border-gray-200">
               <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900">My Wishlist</h2>
                    <p className="text-gray-500 mt-1">12 items saved for later</p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                         <div key={item} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                              <div className="bg-gray-100 h-48 flex items-center justify-center">
                                   <BiPackage className="text-gray-400" size={48} />
                              </div>
                              <div className="p-4">
                                   <p className="font-semibold text-gray-900">Product Name {item}</p>
                                   <div className="flex items-center gap-1 mt-2">
                                        {/* <Star size={16} className="text-yellow-400 fill-current" /> */}
                                        <span className="text-sm text-gray-600">4.5 (120)</span>
                                   </div>
                                   <p className="font-bold text-gray-900 mt-2">$99.99</p>
                                   <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                        Add to Cart
                                   </button>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
};