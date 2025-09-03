import type { ReactNode } from "react"
import { Launch, PackageSearch, Scaling, UserPlus } from "../../components/Icons"
import Title from "../../components/Title"
import clsx from "clsx";

function Milestone() {
    return (
        <section className="bg-black/50 px-44 py-20 font-outfit">
            <Title>Our Milestones</Title>
            <h1 className="text-8xl font-semibold mt-4">Early Achievements</h1>

            <div className="grid grid-cols-2 pt-20 gap-y-20">
                <MilestoneCard
                    desc="Officially founded and launched our startup, introducing our vision to the world."
                    icon={<Launch className="group-hover:text-primary" />}
                    title="launch year"
                    year="2024"
                />
                <MilestoneCard
                    desc="Started working with our first clients, building trust and delivering value."
                    className="border-r-0"
                    icon={<UserPlus />}
                    title="First Clients & Projects"
                    year="2024"
                />
                <MilestoneCard
                    desc="Released our first product version (MVP), setting the foundation for innovation."
                    icon={<PackageSearch />}
                    title="Product Development"
                    year="2024"
                />
                <MilestoneCard
                    desc="Expanding our reach, onboarding more clients, and enhancing features based on feedback."
                    className="border-r-0"
                    icon={<Scaling />}
                    title="Scaling Up"
                    year="2025"
                />
            </div>
        </section>
    )
}

interface ICard {
    icon: ReactNode;
    year: string;
    title: string;
    desc: string;
    className?: string;
}

function MilestoneCard({ className, desc, icon, title, year }: ICard) {
    return <div className={clsx("flex border-r cursor-pointer group", className)}>
        <div className="-rotate-90 shrink-0 text-[64px] font-bold text-quaternary-gray pt-12 group-hover:text-primary transition-colors">{year}</div>
        <div className="shrink-0 space-y-5">
            <p>{icon}</p>
            <p className="text-2xl font-semibold capitalize">{title}</p>
            <p className="font-plus-jakarta w-[70%]">{desc}</p>
        </div>
    </div>
}

export default Milestone