import React from "react";
import AboutSolo from "../components/soloRf/AboutSolo";
import Works from "../components/soloRf/Works";
import SoloProduct from "../components/soloRf/SoloProduct";
import TreatmentIndications from "../components/soloRf/TreatmentIndications";
import RFMicroneedling from "../components/soloRf/RFMicroneedling";
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
