import {Header} from "@layouts/Header/Header.jsx";
import {Footer} from "@layouts/Footer/Footer.jsx";
import {MainAbout} from "@layouts/Main/MainAbout.jsx";
import {useEffect} from "react";

export const About = ({isLoginUser, title}) => {

    useEffect(() => {
        document.title = title || "TechWorld!"
    }, [title])

    return (
        <>
            <Header isLoginUser={isLoginUser} title={title || "TechWorld!"}/>
            <MainAbout/>
            <Footer/>
        </>
    )
}