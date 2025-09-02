import React from "react"
import About from "../sections/Home/About"
import Hero from "../sections/Home/Hero"
import Carousal from "../components/Carousal"
import Services from "../sections/Home/Services"
import Portfolio from "../sections/Home/Portfolio"

function Home() {
    return (
        <React.Fragment>
            <Hero />
            <About />
            <Carousal />
            <Services />
            <Portfolio />
        </React.Fragment>
    )
}

export default Home