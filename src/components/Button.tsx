import clsx from "clsx";
import type { ReactNode } from "react"
import { ArrowUpRight } from "./Icons";

type IProp = {
    children: ReactNode,
    className?: string;
}
function Button({ children, className }: IProp) {
    return (
        <button className={
            clsx(
                "bg-primary text-primary-black uppercase font-semibold tracking-wide",
                "px-5 py-4",
                "flex gap-x-2 items-center cursor-pointer group",
                "hover:bg-white delay-200 transition-all duration-150 ease-in-out",
                className
            )
        }>
            {children}

            <div className="flex w-[24px] h-[24px] relative overflow-hidden">
                <ArrowUpRight
                    className="group-hover:-translate-y-full group-hover:translate-x-full delay-75 transition-all duration-150 top-0 left-0 absolute ease-in-out"
                />
                <ArrowUpRight
                    className="absolute bottom-0 left-0 -translate-x-full translate-y-full
                    group-hover:-translate-y-0 group-hover:translate-x-0 delay-75 transition-all duration-200 ease-in-out
                    "
                />
            </div>
        </button>
    )
}

export default Button