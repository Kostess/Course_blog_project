import {useEffect} from "react";
import {Header} from "@layouts/Header/Header.jsx";
import {Footer} from "@layouts/Footer/Footer.jsx";
import {MainContact} from "@layouts/Main/MainContact.jsx";

export const Contact = ({title}) => {

    useEffect(() => {
        document.title = title || "TechWorld!"
    }, [title])

    return (
        <>
            <Header title={title || "TechWorld!"}/>
            <MainContact/>
            <Footer/>
        </>
    )
}