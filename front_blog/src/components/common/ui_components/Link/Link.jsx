import classes from "./Link.module.css";

export const LinkMain= ({href, children}) => {
    return (
        <a href={href} className={`capitalize ${classes.linkMenu}`}>
            {children}
        </a>
    )
}

export const LinkLogo = ({href, children}) => {
    return (
        <a href={href} className="flex items-center gap-2.5">
            {children}
        </a>
    )
}

export const LinkAsButton = ({href, children}) => {
    return (
        <a href={href} className="bg-main-green text-white rounded-lg px-6 py-3 text-sm text-center font-bold hover:bg-main-dark-green transition-colors duration-300">
            {children}
        </a>
    )
}

export const LinkBlue = ({href, children}) => {
    return (
        <a href={href} className="text-blue-500 hover:underline">
            {children}
        </a>
    )
}