import { Link } from "react-router-dom"
import Logo from "./Logo"

function RadhTechnologyName() {
    return (
        <Link to="/" className="flex items-center uppercase">
            <div className="rotate-[18deg]  h-fit translate-x-4">
                <Logo
                    height={90}
                    width={90}
                />
            </div>
            <div className="border-b pb-1 border-b-primary">
                <p className="text-4xl font-bold tracking-widest">Radha</p>
                <p className="text-xl font-semibold tracking-wide">Technology</p>
            </div>
        </Link>
    )
}

export default RadhTechnologyName