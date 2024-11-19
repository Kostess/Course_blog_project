export const Button = ({children, ...props}) => {
    return (
        <button {...props} className="rounded-tr-lg rounded-br-lg bg-main-green hover:bg-main-dark-green duration-300 p-3">
            {children}
        </button>
    )
}

export const MainButton= ({children, ...props}) => {
    return (
        <button {...props} className="rounded-lg bg-main-green hover:bg-main-dark-green duration-300 p-3">
            {children}
        </button>
    )
}

export const ButtonBackgroundBlue = ({children, ...props}) => {
    return (
        <button {...props} className="rounded-lg bg-main-blue hover:bg-main-light-blue duration-300 px-6 py-3 w-full">
            {children}
        </button>
    )
}