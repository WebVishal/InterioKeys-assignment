import { MapPin, Heart, Send } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

interface PropertyCardProps {
    title: string;
    location: string;
    specs: string;
    images: string[];
}

const Property = ({ title, location, specs, images }: PropertyCardProps) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
            <div className="relative">
                <Swiper
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                    }} 
                    className="w-full h-64"
                    loop={true}

                >
                    {images.map((image: string, index: number) => (
                        <SwiperSlide key={index}>
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='absolute top-4 right-4 space-x-3 z-10'>
                    <button className="bg-white p-2 rounded-full">
                        <Send className="text-gray-400 hover:text-red-500" size={20} />
                    </button>
                    <button className="bg-white p-2 rounded-full">
                        <Heart className="text-gray-400 hover:text-red-500" size={20} />
                    </button>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <div className="flex items-center gap-2 text-gray-500 mb-2">
                    <MapPin size={16} />
                    <span className="text-sm">{location}</span>
                </div>
                <p className="text-sm text-gray-600">{specs}</p>
            </div>
        </div>
    );
};

export default Property;