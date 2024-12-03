import {Header} from "@layouts/Header/Header.jsx";
import {Footer} from "@layouts/Footer/Footer.jsx";
import {MainAbout} from "@layouts/Main/MainAbout.jsx";
import {useEffect} from "react";

export const About = ({title}) => {

    useEffect(() => {
        document.title = title || "TechWorld!"
    }, [title])

    return (
        <>
            <Header title={title || "TechWorld!"}/>
            <MainAbout/>
            <Footer/>
        </>
    )
}