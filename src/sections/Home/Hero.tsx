import clsx from "clsx"
import HeroImg from "../../assets/hero-bg.svg"
import HeroBubbleImg from "../../assets/hero-bubble.avif"
import CircleImg from "../../assets/group-of-circle.svg"
import StarImg from "../../assets/star.svg"
import CircleButton from "../../components/CircleButton"
import { motion } from "motion/react"
function Hero() {
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

    const shadowVarient = {
        hidden: { scale: 0 },
        show: {
            scale: 1.05,
            transition: { duration: 0.3 }
        },
    }
    return (
        <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className={
                clsx("w-full relative pb-32")
            }
            style={{
                backgroundImage: `url(${HeroImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",     // or "100%" if you want stretch
                backgroundPosition: "top"
            }}
        >
            <div className="pt-64 px-30 relative z-[999]">
                <motion.div
                    variants={item}
                    className="flex items-center gap-x-5">
                    <h1 className="text-2xl font-semibold">Hey There! Radha Technology Here</h1>
                    <div className="w-[100px] h-px bg-white/50 mt-1"></div>
                </motion.div>

                <div

                    className=" uppercase font-semibold -space-y-10 text-white">
                    <motion.div
                        variants={item}
                        className="flex items-center gap-x-8">
                        <p className="text-[115px]">Website & App</p>
                        <img src={StarImg} alt="" className="shrink-0 rotate-360" />
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="flex items-center gap-x-4">
                        <img src={CircleImg} alt="" className="move-in-x-plan" />
                        <p className="text-[140px]">
                            Creators
                        </p>
                    </motion.div>
                </div>

                <motion.p
                    variants={item}
                    className="text-2xl w-1/2 text-primary-gray pt-10 font-medium leading-10 font-plus-jakarta">
                    At Radha Technology, we transform ideas into powerful websites and apps through
                    innovation, creativity,
                    and seamless collaboration.
                </motion.p>

                <div className="flex items-center gap-x-10">
                    <CircleButton
                        className="mt-12"
                    >
                        let's talk

                    </CircleButton>
                    <img src={CircleImg} alt="" className="move-in-x-plan rotate-180 translate-y-[25%]" />

                </div>

            </div>

            <motion.img src={HeroBubbleImg} alt=""
                className="absolute top-[200px] right-10"
                initial={{ translateX: 20, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{ duration: .6, ease: "easeInOut" }}
            />
            <motion.div
                variants={shadowVarient}
                className="size-64 bg-primary absolute top-[300px] left-0 rounded-full blur-3xl backdrop-blur-2xl opacity-80 -translate-x-[60%] shadow-2xl"

            >

            </motion.div>
            <div className="absolute top-0 left-0 w-full h-full bg-black/50">

            </div>

            {/* <div className="min-h-screen bg-primary-black px-30">
                <h1>About Us</h1>
            </div> */}
        </motion.section>
    )
}

export default Hero