import React from 'react';
import beforeImage from '../../assets/beforeImg.png';
import afterImage from '../../assets/afterImg.png';
import deviceImage from '../../assets/05.png';

export default function TreatmentIndications() {
    return (
        <div id="indications" className="text-gray-800 py-16 px-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-10">
                <div className="relative overflow-hidden">
                    <img
                        src={beforeImage}
                        alt="Before Treatment"
                        className="w-[480px] h-[300px] rounded-lg shadow-lg object-cover"
                    />

                </div>
                <div className="relative overflow-hidden">
                    <img
                        src={afterImage}
                        alt="After Treatment"
                        className="w-[480px] h-[300px] rounded-lg shadow-lg object-cover"
                    />
                </div>
            </div>

            <div className="w-full flex items-center justify-center mb-10">
                <h2 className="text-xl font-bold text-gray-700 uppercase bg-[#e2b770] p-6 rounded-lg w-[90%] px-4">
                    Indications
                </h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
                <div className="flex flex-col items-center text-center">
                    <div className="flex flex-col md:flex-row justify-between gap-7 text-left mt-5">
                        <div className="mx-2">
                            <h3 className="font-bold text-2xl mb-2">Face Treatment</h3>
                            <ul className="space-y-2 text-gray-600 text-lg">
                                <li><span className="font-bold text-[#e2b770]">■</span> Non-surgical Face Lifting</li>
                                <li><span className="font-bold text-[#e2b770]">■</span> Wrinkle Reduction</li>
                                <li><span className="font-bold text-[#e2b770]">■</span> Skin Tightening</li>
                                <li><span className="font-bold text-[#e2b770]">■</span> Skin Rejuvenation (Whitening)</li>
                                <li><span className="font-bold text-[#e2b770]">■</span> Pore Reduction</li>
                                <li><span className="font-bold text-[#e2b770]">■</span> Acne Scars</li>
                            </ul>
                        </div>

                        <div className="mx-2">
                            <h3 className="font-bold text-2xl mb-2">Body Treatment</h3>
                            <ul className="space-y-2 text-gray-600 text-lg">
                                <li><span className="font-bold text-[#e2b770]">■</span> Scars</li>
                                <li><span className="font-bold text-[#e2b770]">■</span> Stretch Marks</li>
                                <li><span className="font-bold text-[#e2b770]">■</span> Keratosis Pilaris</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8 lg:mt-0 relative">
                    <img src={deviceImage} alt="SOLO RF Device" className="w-40 md:w-64 lg:w-[500px]" />
                </div>
            </div>
        </div>
    );
}
