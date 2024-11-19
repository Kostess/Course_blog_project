import { ReactTyped } from "react-typed";

export const TitlePage = ({ children }) => {
    const text = typeof children === 'string' ? children : String(children);

    return (
        <h1 className="mt-10 text-main-green text-4xl text-center max-w-[500px] w-full absolute left-1/2 transform -translate-x-1/2">
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