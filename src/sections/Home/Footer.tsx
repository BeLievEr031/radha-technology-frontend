import { Link } from "react-router-dom"
import CircleButton from "../../components/CircleButton"
import { ArrowRight } from "../../components/Icons"
import { motion } from "motion/react"
function Footer() {

    const viewportConfig = { once: false, amount: 0.1 };
    const fadeUpVariant = {
        initial: { opacity: 0, translateY: 100, },
        inView: {
            opacity: 1,
            translateY: 0,
        }
    }
    return (
        <footer className="px-30 py-20">
            <h1 className="uppercase text-center text-primary text-[160px] font-semibold">Let’s Talk</h1>
            <p className="text-[96px] font-semibold text-center cursor-pointer hover:text-primary transition-colors duration-300 ease-in-out">hello@radhatechnology.in</p>
            <div className="flex justify-center pt-10">
                <CircleButton>
                    contact
                </CircleButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 pt-20 items-start font-plus-jakarta">

                {/* About Us */}
                <div>
                    <h3 className="text-white font-semibold text-[24px]">About Us</h3>
                    <p className="leading-relaxed mt-2 text-primary-gray">
                        At Radha Technology, we transform ideas into powerful websites and apps through innovation, creativity, and seamless collaboration.
                    </p>
                    {/* <div className="flex space-x-4 text-lg">
                        <Link to="/" className="hover:text-primary"><FaFacebookF /></Link>
                        <Link to="/" className="hover:text-primary"><FaXTwitter /></Link>
                        <Link to="/" className="hover:text-primary"><FaInstagram /></Link>
                        <Link to="/" className="hover:text-primary"><FaYoutube /></Link>
                    </div> */}
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-white font-semibold text-[24px]">Navigation</h3>
                    <ul className="space-y-4 mt-2 text-[16px]">
                        <li><Link to="/" className="hover:text-primary">Home</Link></li>
                        <li><Link to="/" className="hover:text-primary">About</Link></li>
                        <li><Link to="/" className="hover:text-primary">Services</Link></li>
                        <li><Link to="/" className="hover:text-primary">My Projects</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-white font-semibold text-[24px]">Services</h3>
                    <ul className="space-y-4 mt-2">
                        <li><Link to="/" className="hover:text-primary">Web Development</Link></li>
                        <li><Link to="/" className="hover:text-primary">App Development</Link></li>
                        <li><Link to="/" className="hover:text-primary">Wordpress Development</Link></li>
                        <li><Link to="/" className="hover:text-primary">UX/UI Design</Link></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-white font-semibold text-[24px]">Get a Call</h3>
                    <form className="flex items-center border-b border-gray-600 focus-within:border-lime-400 pb-2 mt-2">
                        <input
                            type="text"
                            placeholder="Enter your Phone Number"
                            className="bg-transparent flex-1 p-2 outline-none text-sm text-gray-200 placeholder-gray-400"
                        />
                        <button
                            type="submit"
                            className="bg-primary flex justify-center items-center text-black p-2 rounded-full hover:bg-lime-300"
                        >
                            <ArrowRight width={25} height={25} />
                        </button>
                    </form>
                </div>
            </div>

            <div className="bg-secondary-black w-full mx-auto h-[1.5px] mt-10"></div>
            <p className="font-plus-jakarta">© 2025 All rights for Radh Technology.</p>


            <motion.div
                className="text-[180px] uppercase font-bold pt-2 -space-y-18 tracking-wide">
                <motion.p
                    variants={fadeUpVariant}
                    initial="initial"
                    whileInView="inView"
                    viewport={viewportConfig}
                    transition={{ duration: 0.5 }}
                >Radha</motion.p>
                <motion.p
                    variants={fadeUpVariant}
                    initial="initial"
                    whileInView="inView"
                    viewport={{ ...viewportConfig, amount: 0.1 }}
                    transition={{ duration: 0.5 }}
                >Technology</motion.p>
            </motion.div>
        </footer>
    )
}

export default Footer