import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MedicalDevice() {
    const specs = [
        { label: "Wavelength", value: "980nm + 1470nm" },
        { label: "POWER", value: "1-15 W FOR 980nm/1470nm" },
        { label: "FREQUENCY", value: "1-50000 HZ" },
        { label: "PULSE DURATION/DELAY", value: "10ms-9.9s" },
        { label: "WORKING MODES", value: "CW/ PULSED" },
        { label: "AIMING BEAM", value: "650nm" },
        { label: "VOLTAGE", value: "100-240V, 50/60 Hz" },
        { label: "DISPLAY", value: "8 INCH TOUCH SCREEN" }
    ];

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='MedicalDevice mx-5 my-7'>
            <div className="w-full overflow-hidden border-t border-b">
                {specs.map((spec, index) => (
                    <div
                        key={index}
                        className={`flex flex-row border-b ${index === specs.length - 1 ? 'border-b-0' : ''}`}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <div className="w-1/2 py-3 px-4 font-bold bg-gray-50 border-r">
                            {spec.label}
                        </div>
                        <div className="w-1/2 py-3 px-4 text-right font-bold">
                            {spec.value}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}