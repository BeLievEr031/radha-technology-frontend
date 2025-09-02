import clsx from "clsx";

type IProp = {
    width?: number;
    height?: number;
    className?: string;
}
export function ArrowUpRight({ className }: IProp) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={
        clsx("lucide lucide-arrow-up-right-icon lucide-arrow-up-right shrink-0",
            className
        )
    }
    ><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
}

export function Sparkle({ width = 60, height = 60, className }: IProp) {
    return <svg viewBox="0 0 24 24" width={width} height={height} xmlns="http://www.w3.org/2000/svg"
        className={
            clsx("mt-2", className)
        }
    >

        <path fill="white" d="
    M12 0
    C 13.5 5, 19 10, 24 12
    C 19 14, 13.5 19, 12 24
    C 10.5 19, 5 14, 0 12
    C 5 10, 10.5 5, 12 0 Z" />
    </svg>

}



