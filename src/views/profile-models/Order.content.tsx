export const OrdersContent = () => {
     const orders = [
          { id: 'ORD-1003', date: 'Nov 13, 2024', items: 2, total: '$129.99', status: 'Delivered' },
          { id: 'ORD-1002', date: 'Nov 10, 2024', items: 1, total: '$79.99', status: 'In Transit' },
          { id: 'ORD-1001', date: 'Nov 5, 2024', items: 3, total: '$249.99', status: 'Processing' },
     ];

     return (
          <div className="bg-white rounded-lg border border-gray-200">
               <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900">My Orders</h2>
                    <p className="text-gray-500 mt-1">Track and manage your orders</p>
               </div>
               <div className="p-6 space-y-4">
                    {orders.map((order) => (
                         <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                              <div className="flex items-start justify-between mb-3">
                                   <div>
                                        <p className="font-semibold text-gray-900">{order.id}</p>
                                        <p className="text-sm text-gray-500 mt-1">{order.date} • {order.items} items</p>
                                   </div>
                                   <span className={`px-3 py-1 rounded-full text-xs font-medium ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                                             order.status === 'In Transit' ? 'bg-blue-100 text-blue-700' :
                                                  'bg-yellow-100 text-yellow-700'
                                        }`}>
                                        {order.status}
                                   </span>
                              </div>
                              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                   <p className="font-semibold text-gray-900">Total: {order.total}</p>
                                   <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                                        View Details
                                   </button>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
};