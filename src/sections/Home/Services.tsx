import Title from "../../components/Title"
import WebsiteServiceImg from "../../assets/website-service.jpeg"
import AppServiceImg from "../../assets/app-service.jpg"
import WordpressServiceImg from "../../assets/wordpress-service.jpeg"
import UIUXServiceImg from "../../assets/ui-ux-service.jpeg"
import { ArrowUpRight } from "../../components/Icons"
import type { ReactNode } from "react"
function Services() {
    return (
        <section className="px-30
        bg-black/50 py-20 relative overflow-hidden">
            <Title>Services</Title>
            <h2 className="text-8xl font-semibold">Expertise Solutions</h2>

            <div className="pt-20 space-y-10 relative z-50">
                <ServiceRow img={WebsiteServiceImg}>01. Website Development</ServiceRow>
                <ServiceRow img={AppServiceImg}>02. App Development</ServiceRow>
                <ServiceRow img={WordpressServiceImg}>03. Wordpress Development</ServiceRow>
                <ServiceRow img={UIUXServiceImg}>04. UI/UX Desginer</ServiceRow>
            </div>

            <div className="absolute size-[180px] right-0 top-1/2 bg-primary/80 rounded-full translate-x-1/2 blur-[100px]"></div>
        </section>
    )
}

function ServiceRow({ children, img }: { children: ReactNode, img: string }) {
    return <div className="flex justify-between border-b pb-5 border-white cursor-pointer items-center group">
        <p className="text-[32px] font-semibold group-hover:text-primary transition-all">

            {children}
        </p>
        <div className="p-5 border border-white rounded-full group-hover:rotate-45 transition-all">
            <ArrowUpRight />
        </div>

        <div
            className="absolute w-[280px] h-[280px] right-[25%] z-50 opacity-0 overflow-hidden
                        translate-y-20 -rotate-12
                        duration-700 transition-all
                        group-hover:rotate-0 rounded-xl 
                        group-hover:translate-y-0  
                        group-hover:opacity-100 
                        pointer-events-none"
        >

            <img src={img} alt={img}
                className="w-full h-full object-cover object-top breath"
            />
        </div>

    </div>
}

export default Services