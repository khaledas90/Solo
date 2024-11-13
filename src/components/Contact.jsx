import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaCopy, FaWhatsapp, FaLinkedin, FaFacebook, FaTwitter, FaEnvelope, FaShareAlt, FaTiktok, FaInstagram } from 'react-icons/fa';
export default function Contact() {
    return (
        <>
            <div className="Contact">
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
                        <button className="bg-[#25D366] text-white p-2 rounded hover:bg-[#1DA955]">
                            <FaWhatsapp />
                        </button>
                        <button className="bg-[#69C9D0] text-white p-2 rounded hover:bg-[#0084f4]">
                            <FaTiktok />
                        </button>
                        <a href="https://www.instagram.com/sol_oaesthetic/profilecard/?igsh=MWc3cWtvenZwMWtxYg%3D%3D" target="_blank" className="bg-[#E4405F] text-white p-2 rounded hover:bg-[#C13584]">
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com/share/14Zz84zPnW/?mibextid=LQQJ4d" target="_blank" className="bg-[#1877F2] text-white p-2 rounded hover:bg-[#145DBF]">
                            <FaFacebook />
                        </a>
                        <button className="bg-[#1DA1F2] text-white p-2 rounded hover:bg-[#0D95E8]">
                            <FaTwitter />
                        </button>
                        <button className="bg-[#EA4335] text-white p-2 rounded hover:bg-[#C62828]">
                            <FaEnvelope />
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}
