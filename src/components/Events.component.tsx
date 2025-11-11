import EventImage01 from '../assets/events-images/event-static-image-01.jpg';
import EventImage02 from '../assets/events-images/event-static-image-02.jpg';
import EventImage03 from '../assets/events-images/event-static-image-03.jpg';

const EventComponent = () => {
     return (
          <div className="relative w-full font-inter-regular container mx-auto mt-5">
               <h1 className="text-lg font-inter-medium uppercase">Latest Events</h1>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 my-5 ">
                    <div className="card">
                         <img src={EventImage01} className='mb-3 rounded-lg opacity-90' />
                         <h5 className="card-title text-xl font-inter-medium">Festival Audio Masterclass</h5>
                         <p className="card-text font-inter-light pt-2">Learn how to get pro-level festival sound outdoors. Tips on speaker placement and power. Buy gear used in the demo!</p>
                         <a href="#" className="text-[13px] underline text-gray-500">Learn More</a>
                    </div>
                    <div className="card">
                         <img src={EventImage02} className='mb-3 rounded-lg opacity-90' />
                         <h5 className="card-title text-xl font-inter-medium">DIY Home Studio Setup Live</h5>
                         <p className="card-text font-inter-light pt-2">Watch a live producer demonstrate essential mixer techniques and mic choices. Exclusive bundle deals only for attendees.</p>
                         <a href="#" className="text-[13px] underline text-gray-500">Learn More</a>
                    </div>
                    <div className="card">
                         <img src={EventImage03} className='mb-3 rounded-lg opacity-90' />
                         <h5 className="card-title text-xl font-inter-medium">New Turntable Mixer Showcase</h5>
                         <p className="card-text font-inter-light pt-2">Hands-on demo of the latest DJ mixer with vinyl scratch techniques. Get a special pre-order discount on all new models.</p>
                         <a href="#" className="text-[13px] underline text-gray-500">Learn More</a>
                    </div>
               </div>
          </div>
     );
}
export default EventComponent;