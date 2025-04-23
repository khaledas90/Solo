"use client"; // Ensure this is a client component since AOS uses browser APIs
import { Icon } from "@iconify/react";
import soloRfImage from "../assets/solo-rf.jpeg";
import soloEndoImage from "../assets/solo-endo.jpeg";
import soloIFaceImage from "../assets/solo-iFace.jpeg";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";

const product = [
    {
        id: 1,
        title: "RF Microneedling",
        disc: "The best non-surgical laser assisted lifting.",
        image: soloRfImage,
        link: "/solo-rf",
    },
    {
        id: 2,
        title: "EndoLift",
        disc: "The best non-surgical laser assisted lifting.",
        image: soloEndoImage,
        link: "/solo-rf",
    },
    {
        id: 3,
        title: "iFace",
        disc: "The best non-surgical laser assisted lifting.",
        image: soloIFaceImage,
        link: "/solo-rf",
    },
];

export default function Products() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-out",
        });
    }, []);

    return (
        <div className="flex flex-col md:flex-row gap-8 p-8 bg-gray-50">
            {product.map((item, index) => (
                <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-lg p-12 flex flex-col items-center justify-center flex-1"
                    data-aos="fade-up"
                    data-aos-delay={index * 200}
                >
                    <div className="w-full flex items-center justify-center">
                        <div className="w-60 h-60 my-3 z-0">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>

                    <p className="text-center text-xl font-medium mb-12">{item.disc}</p>

                    <a
                        href={item.link}
                        className="flex items-center text-gray-500 hover:text-teal-700 transition-colors"
                    >
                        Read more   <Icon icon="ep:right" className="mx-2" width="30" height="30" />
                    </a>
                </div>
            ))}
        </div>
    );
}