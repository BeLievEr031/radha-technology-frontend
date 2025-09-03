import React from "react"
import About from "../sections/Home/About"
import Hero from "../sections/Home/Hero"
import Carousal from "../components/Carousal"
import Services from "../sections/Home/Services"
import Portfolio from "../sections/Home/Portfolio"
import Review from "../sections/Home/Review"
import Milestone from "../sections/Home/Milestone"
import Pricing from "../sections/Home/Pricing"
import Footer from "../sections/Home/Footer"

function Home() {
    return (
        <React.Fragment>
            <Hero />
            <About />
            <Carousal />
            <Services />
            <Portfolio />
            <Review />
            <Milestone />
            <Pricing />
            <Footer />
        </React.Fragment>
    )
}

export default Home