import React, { useState, useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

const TreatmentOverview = () => {
    const radius = 70; // Reduced radius of the circle
    const circumference = 2 * Math.PI * radius; // Calculate the circumference

    // Percentage values for each treatment
    const [percentages] = useState({
        bodyTreatment: 90,
        scarTreatment: 80,
        skinRenewal: 85,
        stretchMarksTreatment: 95,
    });

    // Calculate strokeDashoffset for each percentage
    const calculateStrokeDashoffset = (percent) => {
        return circumference - (percent / 100) * circumference;
    };

    useEffect(() => {
        AOS.init({ duration: 1200 }); // Initialize AOS animations
    }, []);

    return (
        <div className="bg-black text-white p-8">

            <p className="text-lg mb-8 max-w-5xl py-10 mx-auto text-center">
                We use the latest treatment technologies to provide customized solutions to suit different skin needs.
                Our advanced device is capable of treating a variety of skin problems such as scars, stretch marks, skin rejuvenation,
                and pore reduction, while providing the utmost safety and comfort during the treatment. We guarantee you excellent results
                and utmost care with every treatment session.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-8 text-center mb-12">

                    <div data-aos="fade-up">
                        <div className="flex items-center justify-center relative">
                            <svg className="transform -rotate-90 w-48 h-48">
                                <circle
                                    cx="85"
                                    cy="85"
                                    r={radius}
                                    stroke="currentColor"
                                    strokeWidth="20"
                                    fill="transparent"
                                    className="text-gray-700"
                                />
                                <circle
                                    cx="85"
                                    cy="85"
                                    r={radius}
                                    stroke="currentColor"
                                    strokeWidth="20"
                                    fill="transparent"
                                    strokeDasharray={circumference}
                                    strokeDashoffset={calculateStrokeDashoffset(percentages.bodyTreatment)}
                                    className="text-[#e2b770]"
                                />
                            </svg>
                            <span className="absolute text-4xl">{`${percentages.bodyTreatment}%`}</span>
                        </div>
                        <p className="mt-4 text-yellow-500">Body treatment</p>
                    </div>

                    <div data-aos="fade-up">
                        <div className="flex items-center justify-center relative">
                            <svg className="transform -rotate-90 w-48 h-48">
                                <circle
                                    cx="85"
                                    cy="85"
                                    r={radius}
                                    stroke="currentColor"
                                    strokeWidth="20"
                                    fill="transparent"
                                    className="text-gray-700"
                                />
                                <circle
                                    cx="85"
                                    cy="85"
                                    r={radius}
                                    stroke="currentColor"
                                    strokeWidth="20"
                                    fill="transparent"
                                    strokeDasharray={circumference}
                                    strokeDashoffset={calculateStrokeDashoffset(percentages.scarTreatment)}
                                    className="text-[#e2b770]"
                                />
                            </svg>
                            <span className="absolute text-4xl">{`${percentages.scarTreatment}%`}</span>
                        </div>
                        <p className="mt-4 text-yellow-500">Scar treatment</p>
                    </div>

                    <div data-aos="fade-up">
                        <div className="flex items-center justify-center relative">
                            <svg className="transform -rotate-90 w-48 h-48">
                                <circle
                                    cx="85"
                                    cy="85"
                                    r={radius}
                                    stroke="currentColor"
                                    strokeWidth="20"
                                    fill="transparent"
                                    className="text-gray-700"
                                />
                                <circle
                                    cx="85"
                                    cy="85"
                                    r={radius}
                                    stroke="currentColor"
                                    strokeWidth="20"
                                    fill="transparent"
                                    strokeDasharray={circumference}
                                    strokeDashoffset={calculateStrokeDashoffset(percentages.skinRenewal)}
                                    className="text-[#e2b770]"
                                />
                            </svg>
                            <span className="absolute text-4xl">{`${percentages.skinRenewal}%`}</span>
                        </div>
                        <p className="mt-4 text-yellow-500">Skin renewal</p>
                    </div>

                    <div data-aos="fade-up">
                        <div className="flex items-center justify-center relative">
                            <svg className="transform -rotate-90 w-48 h-48">
                                <circle
                                    cx="85"
                                    cy="85"
                                    r={radius}
                                    stroke="currentColor"
                                    strokeWidth="20"
                                    fill="transparent"
                                    className="text-gray-700"
                                />
                                <circle
                                    cx="85"
                                    cy="85"
                                    r={radius}
                                    stroke="currentColor"
                                    strokeWidth="20"
                                    fill="transparent"
                                    strokeDasharray={circumference}
                                    strokeDashoffset={calculateStrokeDashoffset(percentages.stretchMarksTreatment)}
                                    className="text-[#e2b770]"
                                />
                            </svg>
                            <span className="absolute text-4xl">{`${percentages.stretchMarksTreatment}%`}</span>
                        </div>
                        <p className="mt-4 text-yellow-500">Stretch marks treatment</p>
                    </div>
                </div>

                {/* Treatment Details */}
                <div className="max-w-lg mx-auto">
                    <h2 className="text-3xl font-semibold mb-8">Treatments tailored to different skin types</h2>

                    <div className="mb-8">
                        <div className="flex items-start space-x-4">
                            <span className="text-yellow-500 text-2xl">🌿</span>
                            <div>
                                <h3 className="font-semibold">Providing advanced skin treatments</h3>
                                <p className="text-gray-400">that help improve the appearance and revitalize the skin.</p>
                            </div>
                        </div>
                        <hr className="my-4 border-gray-600" />
                    </div>

                    <div className="mb-8">
                        <div className="flex items-start space-x-4">
                            <span className="text-yellow-500 text-2xl">📋</span>
                            <div>
                                <h3 className="font-semibold">Effective procedures</h3>
                                <p className="text-gray-400">to monitor skin improvement to ensure safe results.</p>
                            </div>
                        </div>
                        <hr className="my-4 border-gray-600" />
                    </div>

                    <div className="mb-8">
                        <div className="flex items-start space-x-4">
                            <span className="text-yellow-500 text-2xl">🌱</span>
                            <div>
                                <h3 className="font-semibold">Innovative treatment techniques</h3>
                                <p className="text-gray-400">that help reduce wrinkles and stretch marks and enhance skin elasticity.</p>
                            </div>
                        </div>
                        <hr className="my-4 border-gray-600" />
                    </div>

                    <div>
                        <div className="flex items-start space-x-4">
                            <span className="text-yellow-500 text-2xl">⚙️</span>
                            <div>
                                <h3 className="font-semibold">Precise and easy-to-use solutions</h3>
                                <p className="text-gray-400">for specialized treatment, ensuring comfort and ease of operation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TreatmentOverview;
