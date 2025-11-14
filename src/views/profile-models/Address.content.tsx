export const AddressesContent = () => {
     return (
          <div className="space-y-6">
               <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Saved Addresses</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div className="border-2 border-blue-500 rounded-lg p-4 bg-blue-50">
                              <div className="flex items-start justify-between mb-2">
                                   <span className="px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded">Default</span>
                                   <button className="text-gray-500 hover:text-gray-700">Edit</button>
                              </div>
                              <p className="font-semibold text-gray-900 mt-3">Home</p>
                              <p className="text-gray-600 text-sm mt-2">123 Main Street, Apt 4B<br />New York, NY 10001<br />United States</p>
                              <p className="text-gray-600 text-sm mt-2">Phone: +1 (555) 123-4567</p>
                         </div>

                         <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                              <div className="flex items-start justify-between mb-2">
                                   <span className="text-gray-500 text-xs">Secondary</span>
                                   <button className="text-gray-500 hover:text-gray-700">Edit</button>
                              </div>
                              <p className="font-semibold text-gray-900 mt-3">Office</p>
                              <p className="text-gray-600 text-sm mt-2">456 Business Ave, Floor 12<br />New York, NY 10002<br />United States</p>
                              <p className="text-gray-600 text-sm mt-2">Phone: +1 (555) 987-6543</p>
                         </div>

                         <button className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-500 hover:bg-blue-50 transition-colors flex flex-col items-center justify-center gap-2 text-gray-600 hover:text-blue-600">
                              <div className="w-12 h-12 border-2 border-current rounded-full flex items-center justify-center text-2xl">+</div>
                              <span className="font-medium">Add New Address</span>
                         </button>
                    </div>
               </div>
          </div>
     );
};