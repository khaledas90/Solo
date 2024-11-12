import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { FaMagic, FaUserCheck, FaBullseye, FaTv } from 'react-icons/fa';

const AboutSolo = () => {
    useEffect(() => {
        // Initialize AOS
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="py-16 px-8 bg-white text-center">
            <h2 className="text-5xl font-bold mb-7 text-[#e2b770]" data-aos="fade-up">
                About Solo
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                SOLO combines precisely controlled Bi-polar RF and minimally invasive micro-needles for
                non-surgical face lifting, wrinkle reduction, and scar treatment through dermal coagulation.
            </p>

            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2 mx-3 my-6">
                {/* Efficient Treatment */}
                <div
                    className="flex flex-col items-center text-center"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <FaMagic className="text-[#e2b770] text-5xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Efficient Treatment</h3>
                    <p className="text-gray-600 w-11/12">
                        The synergy of Bi-polar RF and micro-needles reduces treatment and recovery times, offering a faster and less painful solution compared to fractional laser treatments.
                    </p>
                </div>

                {/* Universal Skin Compatibility */}
                <div
                    className="flex flex-col items-center text-center"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <FaUserCheck className="text-[#e2b770] text-5xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Universal Skin Compatibility</h3>
                    <p className="text-gray-600 w-11/12">
                        Suitable for all skin types, including darker skin tones, with minimal risk of burns or post-inflammatory hyperpigmentation.
                    </p>
                </div>

                {/* Controlled RF Depth */}
                <div
                    className="flex flex-col items-center text-center"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <FaBullseye className="text-[#e2b770] text-5xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Controlled RF Depth</h3>
                    <p className="text-gray-600 w-11/12">
                        Adjustable RF energy penetration from 0.5 to 3.5mm for precise and safe dermal coagulation, targeting specific areas effectively.
                    </p>
                </div>

                {/* User-Friendly Interface */}
                <div
                    className="flex flex-col items-center text-center"
                    data-aos="fade-up"
                    data-aos-delay="500"
                >
                    <FaTv className="text-[#e2b770] text-5xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">User-Friendly Interface</h3>
                    <p className="text-gray-600 w-11/12">
                        Equipped with a 15” full-color touch interface, SOLO offers convenient operation with multiple inspection and cleaning modes.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSolo;
