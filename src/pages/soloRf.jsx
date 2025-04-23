import React from "react";
import AboutSolo from "../components/AboutSolo";
import Works from "../components/Works";
import SoloProduct from "../components/SoloProduct";
import TreatmentIndications from "../components/TreatmentIndications";
import RFMicroneedling from "../components/RFMicroneedling";
import SoloRF from "../components/SoloRF";

export default function SoloRf() {
  return (
    <div className="SoloRf">
      <AboutSolo />
      <SoloProduct />
      <SoloRF />
      <TreatmentIndications />
      <RFMicroneedling />
      <Works />
    </div>
  );
}
