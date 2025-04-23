import React from 'react'
import Slider from '../components/Slider'
import Contact from '../components/Contact'
import Products from '../components/Products'

export default function Home() {
    return (
        <>
            <div className="home">
                <Slider />
                <Products />
                <Contact />
            </div>
        </>
    )
}
