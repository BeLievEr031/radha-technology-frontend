import clsx from "clsx";

type IProp = {
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