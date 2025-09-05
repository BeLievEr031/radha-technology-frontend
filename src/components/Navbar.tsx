import RadhTechnologyName from "./RadhTechnologyName"
import NavLinkItem from "./NavLinkItem"
import Button from "./Button"
import { motion } from "motion/react"

const links = [
    {
        link: "/",
        name: "home"
    },
    {
        link: "project",
        name: "Project"
    },
    {
        link: "about",
        name: "About"
    },
]

function Navbar() {
    return (
        <motion.header
            initial={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between py-4 fixed top-0 w-full px-20 left-0 bg-primary-black/50 backdrop-blur-sm z-[9999]">
            <RadhTechnologyName />
            <div className="space-x-6">
                {
                    links.map(function ({ link, name }) {
                        return <NavLinkItem link={link}>
                            {name}
                        </NavLinkItem>
                    })
                }
            </div>
            <Button>
                contact
            </Button>
        </motion.header>
    )
}

export default Navbar