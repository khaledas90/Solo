
import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook, FaEnvelope, FaInstagram } from 'react-icons/fa';
export default function Contact() {
    return (
        <>
            <div id="contact" className="Contact">
                <div className="bg-black text-white py-16 px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">PUT YOURSELF IN TOUCH WITH US</h2>
                    <hr className="border-t border-yellow-600 w-1/4 mx-auto mb-4" />
                    <p className="text-lg mb-8">
                        Contact us in the easiest and fastest way for you. We&apos;ll respond as quickly as possible.
                    </p>
                    <div className="text-[#bb975e] text-lg font-semibold">
                        <h3 className="mb-2">OUR CONTACTS</h3>
                        <p className="text-white flex items-center justify-center">
                            <span className="material-icons mr-2"><MdOutlineEmail /></span>
                            <a href="mailto:contact@soloaesthetic.com" className="hover:underline">
                                contact@soloaesthetic.com
                            </a>
                        </p>
                    </div>
                    <div className="social py-8 flex justify-center space-x-2">

                        <a href="https://www.instagram.com/sol_oaesthetic/profilecard/?igsh=MWc3cWtvenZwMWtxYg%3D%3D" alt="instagram" className="bg-[#E4405F] text-white p-2 rounded hover:bg-[#C13584]">
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com/share/14Zz84zPnW/?mibextid=LQQJ4d" alt="facebook" className="bg-[#1877F2] text-white p-2 rounded hover:bg-[#145DBF]">
                            <FaFacebook />
                        </a>

                        <button onClick={() => navigator.clipboard.writeText('contact@soloaesthetic.com')} className="bg-[#EA4335] text-white p-2 rounded hover:bg-[#C62828]">
                            <FaEnvelope />
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}
