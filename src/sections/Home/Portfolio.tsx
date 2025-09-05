import OrnageFunPortfolio from "../../assets/orange-portfolio.avif"
import CascadePortfolio from "../../assets/cascade-poertfolio.avif"
import EffiGovPortfolio from "../../assets/effigov-portfolio.avif"
import AlmondPortfolio from "../../assets/almond-portfolio.avif"
import PortFolioSprkleImg from "../../assets/portfolio-sparkle.svg"
import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import CircleButton from "../../components/CircleButton"
import { motion } from "motion/react"
function Portfolio() {

    return (
        <section className="px-30 py-20 bg-black min-h-screen relative">

            <motion.h1
                initial={{
                    opacity: 0,
                    translateY: 20
                }}
                whileInView={{
                    opacity: 1,
                    translateY: 0
                }}
                transition={{ duration: 0.3 }}
                viewport={{ once: false, amount: 0.5 }}
                className="text-[160px] uppercase text-center font-bold">Portfolio</motion.h1>
            <div className="pt-10 grid grid-cols-2">
                <div className="shrink-0 space-y-5">
                    <PortfolioCard img={OrnageFunPortfolio}>
                        orangeslice.fun
                    </PortfolioCard>
                    <PortfolioCard img={CascadePortfolio}>
                        cascadespace.cloud
                    </PortfolioCard>

                </div>
                <div className="shrink-0 space-y-5 pt-20">
                    <PortfolioCard img={EffiGovPortfolio} >
                        effigov.space
                    </PortfolioCard>

                    <PortfolioCard img={AlmondPortfolio} >
                        almondbot.pro
                    </PortfolioCard>
                </div>
            </div>


            <div className="flex justify-center pt-20">
                <CircleButton className="text-sm">
                    All projects
                </CircleButton>
            </div>
            <img src={PortFolioSprkleImg} alt={PortFolioSprkleImg}
                className="absolute top-[12%] right-20 breath"
            />
        </section>
    )
}


function PortfolioCard({ img, children }: { img: string; children: ReactNode }) {
    return <div className="w-[584px] h-[600px] bg-white p-2 relative group cursor-pointer overflow-hidden">
        <img src={img} alt={img}
            className="w-full h-full object-cover object-top"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black/50 pointer-events-none opacity-0 group-hover:opacity-100 transition-all"></div>

        <Link to={`https://${children}/`} target="_blank" className="block bg-primary absolute text-black z-50 w-11/12 bottom-3 left-1/2 -translate-x-1/2 text-center text-4xl py-2 font-semibold translate-y-[150%] group-hover:translate-y-0 transition-all">
            {children}
        </Link>
    </div>
}

export default Portfolio