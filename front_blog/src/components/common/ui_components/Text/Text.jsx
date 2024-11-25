import { ReactTyped } from "react-typed";

export const TitlePage = ({ children }) => {
    const text = typeof children === 'string' ? children : String(children);

    return (
        <h1 className="text-main-green text-4xl max-w-[500px] w-full">
            <ReactTyped
                strings={[text]}
                typeSpeed={120}
            />
        </h1>
    );
}

export const TitleBlock = ({children}) => {
    return (
        <h2 className="text-white text-2xl font-bold">{children}</h2>
    )
}

export const BaseText = ({children}) => {
    return (
        <p className="text-white text-base font-regular text-justify">
            {children}
        </p>
    )
}