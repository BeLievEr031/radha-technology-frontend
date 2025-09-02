import React from "react"
import About from "../sections/Home/About"
import Hero from "../sections/Home/Hero"
import Carousal from "../components/Carousal"

function Home() {
    return (
        <React.Fragment>
            <Hero />
            <About />
            <Carousal />
        </React.Fragment>
    )
}

export default Home