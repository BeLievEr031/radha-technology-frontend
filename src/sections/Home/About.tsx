import Title from "../../components/Title"
import RhombusImg from "../../assets/rhombus.svg"
import Logo from "../../components/Logo"
import CircleButton from "../../components/CircleButton"
import { motion } from "motion/react"
function About() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
                delayChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, translateY: 40 },
        show: {
            opacity: 1,
            translateY: 0,
            transition: { duration: 0.6, },
        },
    };
    return (
        <motion.section
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.16 }}
            className="px-30 font-outfit min-h-screen py-10 bg-black/45">
            <motion.div variants={item}>
                <Title>
                    About us
                </Title>
            </motion.div>
            <motion.div
                variants={item}
                className="space-y-3 mt-3 flex items-center justify-between">
                <div className="text-8xl font-semibold pt-4">
                    Turning Ideas
                    <br />
                    Into Websites & Apps
                </div>
                <img src={RhombusImg} alt="" />
            </motion.div>

            <div className="flex items-center pt-10">
                <div className="rotate-0">
                    <Logo height={500} width={500}
                    />
                </div>
                <div className="space-y-10 font-plus-jakarta text-primary-gray text-justify">
                    <p className="pt-20">Radha Technology was founded on a simple belief — that innovation and creativity can transform businesses. With a passion for design and technology, we build websites and apps that stand out, engage users, and drive growth.</p>
                    <p>We set out to transform ideas into powerful digital experiences. Through innovation, creativity, and technology, Radha Technology builds websites and apps that truly make an impact.</p>

                    <div className="mt-10 grid grid-cols-3 font-plus-jakarta space-x-5">
                        <div className="border-r border-b-quaternary-gray">
                            <p className="text-primary text-3xl font-bold">17K</p>
                            <p>Projects Completed</p>
                        </div>
                        <div className="border-r border-b-quaternary-gray">
                            <p className="text-primary text-3xl font-bold">17K</p>
                            <p>Projects Completed</p>
                        </div>
                        <div className="">
                            <p className="text-primary text-3xl font-bold">17K</p>
                            <p>Projects Completed</p>
                        </div>

                    </div>
                    <CircleButton>
                        About Us
                    </CircleButton>
                </div>
            </div>
        </motion.section>
    )
}

export default About