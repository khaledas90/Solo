import React, { useEffect } from "react";
import ImgRFMicroneedling from "../assets/RFMicroneedling .jpeg";
import BenefitsImg from "../assets/BenefitsImg.png";
import IdealImg from "../assets/IdealImg.png";
import AOS from "aos";
import "aos/dist/aos.css";

const RFMicroneedling = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a default animation duration
    }, []);

    return (
        <div className="flex flex-col py-14 items-center p-4 md:p-8 bg-[#a48757] text-white">

            <div className="firstWork border-2 border-[#e2b770] px-4 py-5 mb-8" data-aos="fade-up">
                <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-10 text-center">
                    How RF-Microneedling Works?
                </h2>
                <div className="w-full mb-8">
                    <img
                        src={ImgRFMicroneedling}
                        alt="RF Microneedling Process"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center border-r-[3px] pr-4 md:pr-6 border-[#e2b770]" data-aos="fade-up">
                        <h3 className="text-lg font-semibold">Micro-needle cartridge is placed on the skin surface</h3>
                    </div>
                    <div className="text-center border-r-[3px] pr-4 md:pr-6 border-[#e2b770]" data-aos="fade-up">
                        <h3 className="text-lg font-semibold">Micro-needles penetrate inside of the skin</h3>
                    </div>
                    <div className="text-center border-r-[3px] pr-4 md:pr-6 border-[#e2b770]" data-aos="fade-up">
                        <h3 className="text-lg font-semibold">Bipolar RF energy is directly applied to the target areas</h3>
                    </div>
                    <div className="text-center lg:border-none border-r-[3px] pr-4 md:pr-6 border-[#e2b770]" data-aos="fade-up">
                        <h3 className="text-lg font-semibold">Collagen regeneration & new elastic production process begins</h3>
                    </div>
                </div>
            </div>

            <div className="secondWork border-2 my-2 border-[#e2b770] px-4 py-5" data-aos="fade-up">
                <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
                    Benefits of Micro-needle Fractional RF
                </h2>
                <div className="w-full flex justify-center mb-8">
                    <img
                        src={BenefitsImg}
                        alt="Benefits of RF Microneedling"
                        className="w-3/4 md:w-1/2 h-auto rounded-lg"
                    />
                </div>
            </div>

            <div className="thirdWork border-2 my-2 border-[#e2b770] px-4 py-5" data-aos="fade-up">
                <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
                    Ideal Distance for Uniform Thermolysis
                </h2>
                <div className="w-full flex justify-center mb-8">
                    <img
                        src={IdealImg}
                        alt="Ideal Distance for Thermolysis"
                        className="w-3/4 md:w-1/2 h-auto rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default RFMicroneedling;
