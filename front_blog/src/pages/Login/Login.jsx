import {useEffect} from "react";
import {Header} from "@layouts/Header/Header.jsx";
import {MainLogin} from "@layouts/Main/MainLogin.jsx";
import {Footer} from "@layouts/Footer/Footer.jsx";

export const Login = ({title}) => {

    useEffect(() => {
        document.title = title || "TechWorld!"
    }, [title])

    return (
        <>
            <Header title={title || "TechWorld!"}/>
            <MainLogin/>
            <Footer/>
        </>
    )
}