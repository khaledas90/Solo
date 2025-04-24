import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageOne from "../../assets/one.png";
import ImageTwo from "../../assets/two.png";
import ImageThree from "../../assets/three.png";
import ImageFour from "../../assets/four.png";
import ImageFive from "../../assets/five.png";

export default function MedicalSpecialties() {
    const specialties = [{
        title: "ENT",
        image: ImageOne,
        description: " It combines benefits of 1470nm and 980 nm, providing optimal tissue interaction for cutting, coagulation and vaporization. It offers an advanced solution for the treatment of various ENT conditions, delivering superior precision and control during procedures including, but not limited to, cryptolysis, stapedectomy, uvulopalatoplasty, turbinectomy, and dacryocystorhinostomy."
    }, {
        title: "Vascular surgery",
        image: ImageTwo,
        description: "The dual wavelengths of 1470 nm and 980 nm provide precise control and optimal absorption in both water and hemoglobin, ensuring effective and safe treatment with minimal thermal damage to surrounding tissues. In vascular surgery, it is highly effective for procedures including, but not limited to, Endovenous Laser Therapy (EVLT), sclerosis vein treatment, and vascular percutaneous interventions."
    }, {
        title: "GYNECOLOGY",
        image: ImageThree,
        description: "The dual wavelengths provide optimal absorption, ensuring minimal damage to surrounding tissue while delivering high efficiency. Its compact and portable design allow for easy integration into podiatry practice, improving patient outcomes and recovery times."
    }, {
        title: "PODIATRY",
        image: ImageFour,
        description: "The dual wavelengths provide optimal absorption, ensuring minimal damage to surrounding tissue while delivering high efficiency.Its compact and portable design allow for easy integration into podiatry practice, improving patient outcomes and recovery times"
    }, {
        title: "GENERAL SURGERY",
        image: ImageFive,
        description: "SOLOENDO is also suitable for general surgery applications,  offering effective solutions for various treatments, including but  not limited to haemorrhoids, proctology, pilonidal cysts, and  laparoscopic surgery."
    }];
    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="mx-auto p-4 bg-gradient-to-r from-gray-200 to-white">
            {specialties.map((item, index) => (
                <div key={item.title}>
                    <div
                        className="flex flex-col items-center md:flex-row justify-around my-10 mb-8 gap-4"
                    >
                        <div className="shrink-0" data-aos="zoom-in" data-aos-delay={index * 100}>
                            <div className="bg-pink-500 text-gray-800 font-bold py-4 px-8 rounded-full">
                                <h1 className="text-xl">{item.title}</h1>
                            </div>
                        </div>
                        <div
                            className="w-full md:w-1/4"
                            data-aos="fade-right"
                            data-aos-delay={index * 100 + 100}
                        >
                            <img
                                src={item.image}
                                alt="Surgery procedure"
                                className="rounded shadow-md w-full h-auto"
                            />
                        </div>
                    </div>
                    <div
                        className="mb-8 text-center mx-auto max-w-2xl"
                        data-aos="fade-up"
                        data-aos-delay={index * 100 + 200}
                    >
                        <p className="text-gray-700 text-lg font-medium">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}