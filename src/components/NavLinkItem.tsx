import clsx from "clsx";
import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

type IProp = {
    link: string;
    children: ReactNode;
    className?: string;
}

function NavLinkItem({ className, children, link }: IProp) {
    const location = useLocation();
    return (
        <Link to={link}
            className={clsx(
                "capitalize font-[600] text-lg hover:text-primary",
                {
                    "text-primary border-b pb-1": location.pathname.includes(link),
                    "text-tertiary-gray": !location.pathname.includes(link),
                },
                className
            )}
        >
            {children}
        </Link>
    )
}

export default NavLinkItem