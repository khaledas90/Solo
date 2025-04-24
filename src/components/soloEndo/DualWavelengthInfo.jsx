import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function DualWavelengthInfo() {
    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="w-full mx-auto py-12 px-12 bg-white relative">
            <div className="relative z-10">
                <h1
                    className="md:text-4xl text-2xl font-bold text-center mb-10 text-stone-800"
                    data-aos="fade-down"
                >
                    WHY DUAL WAVELENGTH?
                </h1>
                <div className="mb-8" data-aos="fade-out">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-stone-800">
                        980nm - Widely Utilized Wavelength
                    </h2>
                    <p className="text-stone-700 text-base leading-relaxed">
                        980nm diode laser is highly effective for lipolysis, with broad applicability and high absorption by hemoglobin, allowing for safe and effective removal of small volumes of fat with concurrent subdermal tissue contraction. Additional benefits include excellent patient tolerance, quick recovery time, and minimized bleeding, making it ideal for targeting various fat types.
                    </p>
                </div>
                <div className="mb-8" data-aos="fade-out">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-stone-800">
                        1470nm - Highly Specialized for Lipolysis
                    </h2>
                    <p className="text-stone-700 text-base leading-relaxed">
                        The laser with 1470nm is able to melt the fat efficiently due to its high absorption for fat and water, which is specifically designed to effectively target loose skin and results in skin retraction and collagen remodeling in treated area.
                    </p>
                </div>
                <div className="mb-6">
                    <h2
                        className="text-xl md:text-2xl font-bold mb-4 text-stone-800"
                        data-aos="fade-up"
                    >
                        Endolase can be effectively used on multiple areas:
                    </h2>
                    <ul className="list-disc pl-6 text-stone-700 space-y-2">
                        {[
                            "Face (lower third)",
                            "Jawline and neck",
                            "Under-eye area",
                            "Double chin",
                            "Small areas of body with skin laxity"
                        ].map((item, index) => (
                            <li
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}