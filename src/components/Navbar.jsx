import React, { useEffect, useState, useRef } from "react";
import logo from '../assets/Solo Logo Black.png';
import Hamburger from 'hamburger-react';

export default function Navbar() {
    const dropdownRef = useRef(null);
    const menuRef = useRef(null);
    const [isOpenDrob, setIsOpenDrob] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                setIsOpenDrob(false);
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
            setIsOpen(false);
        }
    };

    return (
        <header
            className={`relative 
                }`}
        >
            <nav className={`bg-white z-50 transition-all duration-300 ease-in-out  border-gray-200 shadow-lg pb-4 px-4 lg:px-6 py-2.5 ${isScrolled ? "fixed top-0 left-0 w-full bg-white shadow-lg" : ""}`}>
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div>
                        <a href="/" className="flex items-center">
                            <img src={logo} className="w-[70px]" alt="ATD Logo" />
                        </a>
                    </div>
                    <div className="flex items-center ml-auto">
                        <div className="flex items-center">
                            <Hamburger
                                toggled={isOpen}
                                toggle={setIsOpen}
                                aria-label={isOpen ? "Close menu" : "Open menu"}
                                className="text-[17px]"
                            />
                        </div>
                    </div>


                    <div ref={menuRef} className={`${isOpen ? "block" : "hidden"} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}>
                        <ul className="flex flex-col lg:flex-row gap-5 lg:gap-8 mt-4 font-medium lg:mt-0 transition-all duration-500 ease-in-out lg:ml-auto">
                            {[
                                { id: "home", label: "Home" },
                                { id: "about-solo", label: "About solo" },
                                { id: "indications", label: "Indications" },
                                { id: "cases", label: "Cases" },
                                { id: "contact", label: "Contact" },
                            ].map(({ id, label }) => (
                                <li className="py-1" key={id}>
                                    <button
                                        onClick={() => handleScrollToSection(id)}
                                        className={`relative block text-center py-2 pr-4 pl-3 text-gray-700 border-b font-semibold border-gray-100 hover:bg-[#000C1A] lg:hover:text-[#bb975e] hover:text-[#ffffff] lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-1`}
                                    >
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
