import type { ReactNode } from "react"

type IProp = {
    children: ReactNode;
}
function Title({ children }: IProp) {
    return (
        <div className="flex items-center gap-x-5" >
            <h1 className="text-2xl font-semibold">{children}</h1>
            <div className="w-[100px] h-px bg-white/50 mt-1"></div>
        </div >
    )
}

export default Title