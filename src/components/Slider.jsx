import React, { useEffect } from 'react';
import imgOne from '../assets/hero-1.png';
import imgTwo from '../assets/hero-2.png';
import imgThree from '../assets/hero-3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper'; // Updated import
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Slider() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="relative h-screen overflow-hidden">
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="mySwiper h-full"
            >
                {[imgOne, imgTwo, imgThree].map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-full w-full" data-aos="fade-up">
                            <img src={img} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-center">
                                <div className="px-6">
                                    <h1 className="lg:text-7xl md:text-5xl sm:text-3xl text-2xl text-[#e2b770]  mb-10 font-bold ">THE SOLO</h1>
                                    <p className="lg:text-2xl text-xl ">
                                        Begin your ultimate experience, create the competition.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}