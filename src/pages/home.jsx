import React from 'react'
import Slider from '../components/Slider'
import Contact from '../components/Contact'
import AboutSolo from '../components/AboutSolo'
import Works from '../components/Works'
import SoloProduct from '../components/SoloProduct'
import TreatmentIndications from '../components/TreatmentIndications'
import RFMicroneedling from '../components/RFMicroneedling'
import SoloRF from '../components/SoloRF'
import TreatmentOverview from '../components/TreatmentOverview'

export default function Home() {
    return (
        <>
            <div className="home">
                <Slider />
                <AboutSolo />
                <SoloProduct />
                <SoloRF />
                {/* <TreatmentOverview /> */}
                <TreatmentIndications />
                <RFMicroneedling />
                <Works />
                <Contact />
            </div>
        </>
    )
}
