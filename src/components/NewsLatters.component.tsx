const NewsLattersComponent = () => {
     return (
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center mb-20 mt-10 rounded-2xl p-4 lg:p-0">
               <div className="mb-4 md:mb-0 text-center md:text-left">
                    <h2 className="text-2xl font-inter-bold mb-2">Subscribe to our Newsletter</h2>
                    <p className="text-gray-600 font-inter-regular">Subscribe to our latest newsletter to get news about special discounts & upcoming sales</p>
               </div>
               <div>
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-end">
                         <input type="email" placeholder="jhone@example.com" className="border-b border-[#181818] font-inter-regular outline-none  w-full md:w-[350px] h-[50px]" />
                         <button className="bg-[#181818] text-[13px] text-white font-inter-medium uppercase rounded-md px-4 py-2 h-[50px]">Subscribe</button>
                    </div>
                    <div className="mt-3">
                         <input type="checkbox" id="subscribeCheckbox" className="mr-2" />
                         <label htmlFor="subscribeCheckbox" className="font-inter-regular text-sm">I agree to receive newsletters and promotional offers.</label>
                    </div>
               </div>
          </div>
     );
}
export default NewsLattersComponent;