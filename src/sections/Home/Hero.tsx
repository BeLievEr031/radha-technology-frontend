import clsx from "clsx"
import HeroImg from "../../assets/hero-bg.svg"
import HeroBubbleImg from "../../assets/hero-bubble.avif"
import CircleImg from "../../assets/group-of-circle.svg"
import StarImg from "../../assets/star.svg"
import CircleButton from "../../components/CircleButton"
function Hero() {
    return (
        <section
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
            <div className="pt-72 px-30 relative z-[999]">
                <div className="flex items-center gap-x-5">
                    <h1 className="text-2xl font-semibold">Hey There! Radha Technology Here</h1>
                    <div className="w-[100px] h-px bg-white/50 mt-1"></div>
                </div>

                <div className=" uppercase font-semibold -space-y-10 text-white">
                    <div className="flex items-center gap-x-8">
                        <p className="text-[115px]">Website & App</p>
                        <img src={StarImg} alt="" className="shrink-0 rotate-360" />
                    </div>
                    <div className="flex items-center gap-x-4">
                        <img src={CircleImg} alt="" className="move-in-x-plan" />
                        <p className="text-[140px]">
                            Creators
                        </p>
                    </div>
                </div>

                <p className="text-2xl w-1/2 text-primary-gray pt-10 font-medium leading-10 font-plus-jakarta">
                    At Radha Technology, we transform ideas into powerful websites and apps through
                    innovation, creativity,
                    and seamless collaboration.
                </p>

                <div className="flex items-center gap-x-10">
                    <CircleButton
                        className="mt-12"
                    >
                        let's talk

                    </CircleButton>
                    <img src={CircleImg} alt="" className="move-in-x-plan rotate-180 translate-y-[25%]" />

                </div>

            </div>

            <img src={HeroBubbleImg} alt=""
                className="absolute top-[200px] right-10"
            />
            <div className="size-64 bg-primary absolute top-[300px] left-0 rounded-full blur-3xl backdrop-blur-2xl opacity-80 -translate-x-[60%] shadow-2xl">

            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black/50">

            </div>

            {/* <div className="min-h-screen bg-primary-black px-30">
                <h1>About Us</h1>
            </div> */}
        </section>
    )
}

export default Hero