import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SoloMedicalImage from "../../assets/SoloMedicalImage.jpg";

export default function SoloMedical() {
  const medicalApplications = [
    "GENERAL SURGERY",
    "ENT",
    "ORAL SURGERY",
    "OTOLARYNGOLOGY",
    "Dermatology",
    "PODIATRY",
    "UROLOGY",
    "GYNECOLOGY",
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative min-h-full w-full overflow-hidden bg-purple-900">
      <div className="absolute w-full inset-0 z-0">
        <div className="relative h-full w-full">
          <img
            src={SoloMedicalImage}
            alt="Close-up of eye"
            className="object-fill opacity-60 w-full mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-purple-800/50 mix-blend-multiply"></div>
        </div>
      </div>
      <div className="relative z-10 flex min-h-screen flex-col p-8">
        <div className="mb-16 mt-8" data-aos="fade-right">
          <h1 className="text-6xl font-light tracking-wider text-white">
            SOLO
          </h1>
        </div>

        <div className="mt-8 max-w-lg">
          <h2 className="mb-12 text-3xl font-bold text-[#dba854]" data-aos="fade-up">
            MORE THAN 10 APPLICATIONS
          </h2>
          <div className="space-y-4">
            {medicalApplications.map((application, index) => (
              <div
                key={index}
                className="text-xl md:text-2xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="font-bold text-white">
                  {application}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}