import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import EndoImage from '../../assets/endo.webp';

export default function EndoHero() {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-in-out' });
    }, []);

    return (
        <div className='EndoHero'>
            <div className="relative h-screen flex flex-col items-center justify-between w-full min-h-screen bg-black text-white overflow-hidden">
                <div
                    className="absolute top-10 left-10 z-10"
                    data-aos="fade-right"
                    data-aos-delay="100"
                >
                    <h1 className="text-6xl font-light tracking-wider">SOLO</h1>
                </div>

                <div className="flex items-center justify-center">
                    <div
                        className="w-full h-[450px] opacity-70"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <img
                            src={EndoImage}
                            alt="SOLOENDO"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center w-full">
                    <div
                        className="flex flex-col items-center mt-auto mb-20"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <h2 className="md:text-7xl text-3xl font-bold tracking-widest mb-6">SOLOENDO</h2>
                        <div className="flex flex-col items-center space-y-2 text-center">
                            <p className="text-2xl text-blue-200" data-aos="fade-up" data-aos-delay="400">
                                Non-invasive lifting
                            </p>
                            <p className="text-2xl text-white" data-aos="fade-up" data-aos-delay="500">
                                Dual wavelength
                            </p>
                            <p className="text-xl text-white" data-aos="fade-up" data-aos-delay="600">
                                1470nm + 980nm
                            </p>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-5 w-full text-center">
                    <a
                        href="https://www.soloaesthetic.com"
                        alt="www.soloaesthetic.com"
                        className="text-lg hover:text-blue-200 transition-colors"
                        data-aos="fade-up"
                        data-aos-delay="700"
                    >
                        www.soloaesthetic.com
                    </a>
                </div>
            </div>
        </div>
    );
}