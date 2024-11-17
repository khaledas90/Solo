import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import BeautyImgOne from "../assets/BeautyImgOne.jpeg";
import BeautyImgTwo from "../assets/BeautyImgTwo.png";

const SoloRF = () => {
    useEffect(() => {
        // Initialize AOS
        AOS.init({ duration: 1000 }); // You can set the duration as per your preference
    }, []);

    return (
        <div id="cases" className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 gap-6 px-4 py-10">
            {/* Left Section: Text */}
            <div
                className="flex flex-col items-start text-gray-800"
                data-aos="fade-up"
            >
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
                        SOLO <span className="text-sm align-super">RF</span>
                    </h1>
                    <p className="text-lg text-yellow-700 mt-2">Beauty, from the inside out.</p>
                </div>

                <div className="max-w-lg space-y-6">
                    <div data-aos="fade-up" data-aos-delay="100">
                        <h2 className="text-xl font-semibold text-yellow-700">Less pain and fast recovery</h2>
                        <p className="text-sm text-gray-600">
                            Precisely controlled RF energy is delivered only to the target areas by adjusting from
                            0.5 to 3.5mm depth selectively with advanced penetration mechanism for dermal coagulation.
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="200">
                        <h2 className="text-xl font-semibold text-yellow-700">Optimal and uniform thermolysis</h2>
                        <p className="text-sm text-gray-600">
                            Ideal distance among needles allows applying uniform bipolar RF energy in the target areas
                            to coagulate evenly without any risk of energy interference caused by overlapping of RF
                            energy in the close distance.
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="300">
                        <h2 className="text-xl font-semibold text-yellow-700">Precise and safe treatment</h2>
                        <p className="text-sm text-gray-600">
                            Light variation function depending on each operation step allows practitioners to
                            track overall treatment procedure during treatment for patient safety as well as better
                            result.
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="400">
                        <h2 className="text-xl font-semibold text-yellow-700">Fast and convenient operation</h2>
                        <p className="text-sm text-gray-600">
                            15” full color touch interface and various modes for inspection and cleaning are user
                            friendly and easy to operate.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <div
                    className="w-full"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <img
                        src={BeautyImgOne}
                        alt="Beauty Treatment"
                        className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                </div>
                <div
                    className="w-full"
                    data-aos="fade-right"
                    data-aos-delay="200"
                >
                    <img
                        src={BeautyImgTwo}
                        alt="Beauty Treatment"
                        className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default SoloRF;
