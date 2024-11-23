import {useEffect} from "react";
import {Header} from "@layouts/Header/Header.jsx";
import {Footer} from "@layouts/Footer/Footer.jsx";
import {MainContact} from "@layouts/Main/MainContact.jsx";

export const Contact = ({isLoginUser, title}) => {

    useEffect(() => {
        document.title = title || "TechWorld!"
    }, [title])

    return (
        <>
            <Header isLoginUser={isLoginUser} title={title || "TechWorld!"}/>
            <MainContact/>
            <Footer/>
        </>
    )
}