import {Header} from "@layouts/Header/Header.jsx";
import {Main} from "@layouts/Main/Main.jsx";
import {useEffect} from "react";
import {Footer} from "@layouts/Footer/Footer.jsx";

export const Home = ({title}) => {

    useEffect(() => {
        document.title = title || "TechWorld!"
    }, [title])

    return (
        <>
            <Header title={title || "TechWorld!"}/>
            <Main/>
            <Footer/>
        </>
    )
}