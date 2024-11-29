import {useEffect, useState} from "react";

export const MainAdmin = ({windowMain}) => {
    const [currentWindow, setCurrentWindow] = useState("statistic");

    useEffect(() => {
        switch (windowMain) {
            case "statistic":
                setCurrentWindow("statistic");
                break;
            case "moderation":
                setCurrentWindow("moderation");
                break;
            case "message":
                setCurrentWindow("message");
                break;
            default:
                setCurrentWindow(windowMain);
                break;
        }
    }, [windowMain]);


    return (
        <main className="rounded-tl-[70px] bg-main-dark-blue px-20 py-10">
            {currentWindow}
        </main>
    )
}