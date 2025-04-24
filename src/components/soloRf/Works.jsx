import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import imgOne from "../../assets/work-1.jpeg";
import imgTwo from "../../assets/work-2.jpeg";
import imgTree from "../../assets/work-3.jpeg";
import imgFour from "../../assets/work-4.jpeg";
import imgFive from "../../assets/work-5.jpeg";
import imgSix from "../../assets/work-6.jpeg";

export default function Works() {
    useEffect(() => {
        // Initialize AOS
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div id="cases" className="Works py-10 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                <div className="img-work" data-aos="fade-up" data-aos-delay="100">
                    <img className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out" src={imgOne} alt="Work 1" />
                </div>

                <div className="img-work" data-aos="fade-up" data-aos-delay="200">
                    <img className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out" src={imgTwo} alt="Work 2" />
                </div>

                <div className="img-work" data-aos="fade-up" data-aos-delay="300">
                    <img className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out" src={imgTree} alt="Work 3" />
                </div>

                <div className="img-work" data-aos="fade-up" data-aos-delay="400">
                    <img className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out" src={imgFour} alt="Work 4" />
                </div>

                <div className="img-work" data-aos="fade-up" data-aos-delay="500">
                    <img className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out" src={imgFive} alt="Work 5" />
                </div>

                <div className="img-work" data-aos="fade-up" data-aos-delay="600">
                    <img className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out" src={imgSix} alt="Work 6" />
                </div>
            </div>
        </div>
    );
}
