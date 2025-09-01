import RadhTechnologyName from "./RadhTechnologyName"
import NavLinkItem from "./NavLinkItem"
import Button from "./Button"

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
        <header className="flex items-center justify-between py-4 fixed top-0 w-full px-20 left-0 bg-primary-black/50 backdrop-blur-sm">
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
        </header>
    )
}

export default Navbar