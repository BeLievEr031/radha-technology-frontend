import React from "react"
import About from "../sections/Home/About"
import Hero from "../sections/Home/Hero"
import Carousal from "../components/Carousal"
import Services from "../sections/Home/Services"

function Home() {
    return (
        <React.Fragment>
            <Hero />
            <About />
            <Carousal />
            <Services />
        </React.Fragment>
    )
}

export default Home