import React from 'react'
import EndoHero from '../components/soloEndo/EndoHero'
import SoloMedical from '../components/soloEndo/SoloMedical'
import MedicalTreatments from '../components/soloEndo/MedicalTreatments'
import DualWavelengthInfo from '../components/soloEndo/DualWavelengthInfo'
import MedicalSpecialties from '../components/soloEndo/MedicalSpecialties'
import MedicalDevice from '../components/soloEndo/MedicalDevice'

export default function soloEndo() {
    return (
        <div className='soloEndo'>
            <EndoHero />
            <SoloMedical />
            <MedicalTreatments />
            <DualWavelengthInfo />
            <MedicalSpecialties />
            <MedicalDevice />
        </div>
    )
}
