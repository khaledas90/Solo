import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaClock, FaUser, FaRegSmile, FaRegThumbsUp, FaTimesCircle } from 'react-icons/fa';
import { MdMoreTime } from "react-icons/md";
import deviceImage from '../../assets/device.png';

export default function SoloProduct() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="flex flex-col items-center text-white py-16 px-8 relative bg-gray-900 overflow-hidden">

            <div className="absolute inset-0 bg-gradient-radial from-gray-500 to-transparent opacity-50 rounded-full"></div>

            <h1 className="text-lg md:text-2xl lg:text-3xl font-medium text-gray-300 mb-2 text-center z-10" data-aos="fade-up">
                Welcome To The Next Generation Of
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-center z-10" data-aos="fade-up">
                RF MICRONEEDLING
            </h2>
            <p className="text-md md:text-lg lg:text-2xl font-light text-[#e2b770] italic text-center mb-8 z-10" data-aos="fade-up">
                No more Beauty Secrets, We all use Solo
            </p>

            <div className="relative w-full max-w-4xl flex items-center justify-center mb-8 z-10" data-aos="zoom-in">
                <div className="absolute left-0 top-1/4 flex flex-col items-center px-3 space-y-8 transform -translate-x-8 md:-translate-x-12 lg:-translate-x-16">
                    <div className="flex flex-col items-center text-center" data-aos="fade-right">
                        <FaUser className="text-[#e2b770] text-2xl md:text-3xl lg:text-4xl mb-2" />
                        <h3 className="font-semibold text-xs md:text-sm lg:text-base">Minimally Invasive</h3>
                    </div>
                    <div className="flex flex-col items-center text-center" data-aos="fade-right">
                        <FaClock className="text-[#e2b770] text-2xl md:text-3xl lg:text-4xl mb-2" />
                        <h3 className="font-semibold text-xs md:text-sm lg:text-base">Short Treatment</h3>
                    </div>
                    <div className="flex flex-col items-center text-center" data-aos="fade-right">
                        <MdMoreTime className="text-[#e2b770] text-2xl md:text-3xl lg:text-4xl mb-2" />
                        <h3 className="font-semibold text-xs md:text-sm lg:text-base">Minimal Downtime</h3>
                    </div>
                </div>

                <img src={deviceImage} alt="SOLO RF Device" className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg z-10" data-aos="zoom-in" />

                <div className="absolute right-0 top-1/4 flex flex-col items-center px-3 space-y-8 transform translate-x-8 md:translate-x-12 lg:translate-x-16">
                    <div className="flex flex-col items-center text-center" data-aos="fade-left">
                        <FaRegSmile className="text-[#e2b770] text-2xl md:text-3xl lg:text-4xl mb-2" />
                        <h3 className="font-semibold text-xs md:text-sm lg:text-base">Very Comfortable</h3>
                    </div>
                    <div className="flex flex-col items-center text-center" data-aos="fade-left">
                        <FaTimesCircle className="text-[#e2b770] text-2xl md:text-3xl lg:text-4xl mb-2" />
                        <h3 className="font-semibold text-xs md:text-sm lg:text-base">No Side Effect</h3>
                    </div>
                    <div className="flex flex-col items-center text-center" data-aos="fade-left">
                        <FaRegThumbsUp className="text-[#e2b770] text-2xl md:text-3xl lg:text-4xl mb-2" />
                        <h3 className="font-semibold text-xs md:text-sm lg:text-base">Promising Result</h3>
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-300 my-5 text-sm md:text-[15px] lg:text-lg z-10" data-aos="fade-up">
                <ul className="grid grid-cols-1 md:grid-cols-2  text-center lg:grid-cols-2 gap-3 space-x-4">
                    <li>TREAT MULTIPLE INDICATIONS</li>
                    <li>ALL SKIN TYPES</li>
                    <li>ANTI & PREAGING TREATMENTS FOR FACE & BODY</li>
                    <li>MULTI TREATMENT DELIVERY</li>
                </ul>
            </div>
        </div>
    );
}
