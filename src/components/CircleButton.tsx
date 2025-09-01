import clsx from "clsx";
import { type ReactNode } from "react";
import { ArrowUpRight } from "./Icons";

type IProp = {
    className?: string;
    children: ReactNode;
}
function CircleButton({ className, children }: IProp) {
    return (
        <button className={
            clsx("size-[150px] uppercase border relative rounded-full cursor-pointer overflow-hidden group border-quaternary-gray px-1",
                className
            )
        }>
            <p className="flex gap-x-1 justify-center items-center relative z-10 group-hover:text-black transition-colors ease-in-out duration-700 font-outfit font-medium">
                {children}
                <ArrowUpRight />
            </p>

            <div className="size-10 absolute bottom-0 rounded-full left-0 bg-primary
            group-hover:scale-200 group-hover:size-full transition-all ease-in-out duration-700
            "></div>
        </button>
    )
}

export default CircleButton