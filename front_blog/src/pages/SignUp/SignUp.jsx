import {Header} from "@layouts/Header/Header.jsx";
import {Footer} from "@layouts/Footer/Footer.jsx";
import {MainSignUp} from "@layouts/Main/MainSignUp.jsx";
import {useEffect} from "react";

export const SignUp = ({title}) => {

    useEffect(() => {
        document.title = title || "TechWorld!"
    }, [title])

    return (
        <>
            <Header title={title}/>
            <MainSignUp/>
            <Footer/>
        </>
    )
}