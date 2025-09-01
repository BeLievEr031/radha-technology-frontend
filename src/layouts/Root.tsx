import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

function Root() {
    return (
        <main className="bg-primary-black min-h-screen text-white font-outfit">
            <Navbar />
            <Outlet />
        </main>
    )
}

export default Root