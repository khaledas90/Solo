import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaCopy, FaWhatsapp, FaLinkedin, FaFacebook, FaTwitter, FaEnvelope, FaShareAlt, FaTiktok } from 'react-icons/fa';
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

                        <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
                            <FaWhatsapp />
                        </button>
                        <button className="bg-blue-500 text-white p-2 rounded hover:bg-green-600">
                            <FaTiktok />
                        </button>
                        <button className="bg-blue-800 text-white p-2 rounded hover:bg-blue-900">
                            <FaLinkedin />
                        </button>
                        <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                            <FaFacebook />
                        </button>
                        <button className="bg-blue-400 text-white p-2 rounded hover:bg-blue-500">
                            <FaTwitter />
                        </button>
                        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                            <FaEnvelope />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
