import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageDoctor from "../../assets/doctor.png";

export default function MedicalTreatments() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="w-full mx-auto py-24 px-12 bg-white">
            <div className="mb-6" data-aos="fade-up">
                <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-700">
                    <span className="font-bold">SOLENDO,</span> is a versatile diode laser with power up to 30W, it's capable of performing over 7 different treatments.
                    <span className="text-gray-700"> The system is used in leading cosmetic research, aiming to deliver the same results as surgical lifting procedures but without the downsides of traditional surgery, such as longer recovery time, high surgical risks and ofcourse higher costs.</span>
                </p>
            </div>

            <div className="flex justify-center my-10">
                <div
                    className="bg-pink-500 text-white font-medium text-2xl md:text-3xl px-8 py-2 rounded-lg shadow-md"
                    data-aos="zoom-in"
                >
                    plastic surgery
                </div>
            </div>
            <div className="mb-8">
                <p className="font-bold text-xl md:text-2xl mb-4" data-aos="fade-up">
                    SOLENDO, provides comprehensive facial and body rejuvenation.
                </p>
                <div className="border border-pink-300 rounded-lg p-4 bg-pink-50 mb-6" data-aos="fade-up">
                    <h2 className="font-bold mb-2">Clinical Advantages of Skin Tightening</h2>
                    <ul className="space-y-1">
                        {[
                            "Precision in Targeting",
                            "Correct mild sagging on the face, neck, arms",
                            "Diminish under eye bags without surgery",
                            "Enhance facial contouring",
                            "Achieve natural results",
                            "Sustained Outcome",
                            "Easy to Perform",
                            "Suitable For All Skin Types"
                        ].map((item, index) => (
                            <li
                                key={index}
                                className="flex items-start"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <span className="text-pink-600 text-lg mr-2">✓</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mb-8">
                <div className="flex justify-around items-center mb-4">
                    <div
                        className="bg-purple-600 text-white text-2xl md:text-3xl font-medium px-8 py-2 rounded-lg shadow-md"
                        data-aos="fade-left"
                    >
                        Endolase
                    </div>
                    <div
                        className="w-1/6 h-1/6"
                        data-aos="fade-right"
                    >
                        <img
                            src={ImageDoctor}
                            alt="Doctor performing procedure"
                            className="rounded-lg shadow-md object-cover w-full h-full"
                        />
                    </div>
                </div>

                <div className="my-10" data-aos="fade-up">
                    <h1 className="font-bold text-center md:text-2xl text-lg mb-4">What is Endolase?</h1>

                    <p className="text-lg md:text-xl mb-4">
                        Endolase is the most cutting-edge, non-surgical facial treatment available today. This procedure provides remarkable skin tightening, fat reduction, and facial contouring, a minimally invasive treatment that uses a small optical fiber to target and tighten sagging skin and reduce fat deposits.
                    </p>

                    <p className="text-lg md:text-xl">
                        This innovative procedure employs laser technology delivered through micro-optical fibers thinner than a hair (200-600 microns). The procedure is performed under local anesthesia. The laser fiber is inserted subcutaneously into the target tissue where the fat deposits are treated evenly with a slow and fan-shaped delivery of laser energy.
                    </p>
                </div>
            </div>
        </div>
    );
}