import { ReactTyped } from "react-typed";

export const TitlePage = ({ children }) => {

    const text = typeof children === 'string' ? children : String(children);

    return (
        <div className="mt-20 mx-auto max-w-[500px] w-full flex justify-center">
            <h1 className={`text-main-green text-4xl text-center inline-block relative`}>
                <ReactTyped
                    strings={[text]}
                    typeSpeed={120}
                />
            </h1>
        </div>
    );
}