import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerFeedbackCardComponent = () => {
     const settings = {
          dots: false,
          infinite: true,
          speed: 2000,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1500,
          responsive: [
               {
                    breakpoint: 1024,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 1,
                         infinite: true,
                         dots: false
                    }
               },
               {
                    breakpoint: 600,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1
                    }
               }
          ]
     };

     return (
          <div className="w-full py-10 font-inter-regular container mx-auto mt-5">
               <h1 className="text-lg font-inter-medium uppercase pl-3 md:pl-3">What Our Clients Say</h1>
               <Slider {...settings} className="my-5 w-full mx-0">
                    <div className="px-2">
                         <div className="border border-[#e4e4e4] px-6 py-5 rounded-xl h-full">
                              <h1 className="font-inter-medium text-lg">“Impressive quality, durable and reliable”</h1>
                              <p className="text-sm pt-2 text-gray-600">lorem Ipsum many variations of passages of there are available but the have in some form by injected humour or randomised words blievable.</p>
                              <div className="flex items-center gap-3 mt-5">
                                   <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Profile" className="w-13 h-13 rounded-full" />
                                   <div>
                                        <p className="font-inter-medium text-[14px]">John Doe</p>
                                        <p className="text-sm text-gray-500">*****dilsh@gmail.com</p>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="px-2">
                         <div className="border border-[#e4e4e4] px-6 py-5 rounded-xl h-full">
                              <h1 className="font-inter-medium text-lg">“Impressive quality, durable and reliable”</h1>
                              <p className="text-sm pt-2 text-gray-600">lorem Ipsum many variations of passages of there are available but the have in some form by injected humour or randomised words blievable.</p>
                              <div className="flex items-center gap-3 mt-5">
                                   <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="Profile" className="w-13 h-13 rounded-full" />
                                   <div>
                                        <p className="font-inter-medium text-[14px]">Jane Smith</p>
                                        <p className="text-sm text-gray-500">*****smith@gmail.com</p>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="px-2">
                         <div className="border border-[#e4e4e4] px-6 py-5 rounded-xl h-full">
                              <h1 className="font-inter-medium text-lg">“Impressive quality, durable and reliable”</h1>
                              <p className="text-sm pt-2 text-gray-600">lorem Ipsum many variations of passages of there are available but the have in some form by injected humour or randomised words blievable.</p>
                              <div className="flex items-center gap-3 mt-5">
                                   <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="Profile" className="w-13 h-13 rounded-full" />
                                   <div>
                                        <p className="font-inter-medium text-[14px]">Emily Jones</p>
                                        <p className="text-sm text-gray-500">*****jones@gmail.com</p>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="px-2">
                         <div className="border border-[#e4e4e4] px-6 py-5 rounded-xl h-full">
                              <h1 className="font-inter-medium text-lg">“Impressive quality, durable and reliable”</h1>
                              <p className="text-sm pt-2 text-gray-600">lorem Ipsum many variations of passages of there are available but the have in some form by injected humour or randomised words blievable.</p>
                              <div className="flex items-center gap-3 mt-5">
                                   <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="Profile" className="w-13 h-13 rounded-full" />
                                   <div>
                                        <p className="font-inter-medium text-[14px]">Michael Brown</p>
                                        <p className="text-sm text-gray-500">*****brown@gmail.com</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </Slider>
          </div>
     );
}

export default CustomerFeedbackCardComponent;
