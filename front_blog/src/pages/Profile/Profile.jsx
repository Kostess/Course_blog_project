import {useEffect} from "react";
import {Header} from "@layouts/Header/Header.jsx";
import {Footer} from "@layouts/Footer/Footer.jsx";
import {MainProfile} from "@layouts/Main/MainProfile.jsx";

export const Profile = ({isLoginUser, title}) => {

    useEffect(() => {
        document.title = title || "TechWorld!"
    }, [title])

    return (
        <>
            <Header isLoginUser={isLoginUser} title={title || "TechWorld!"}/>
            <MainProfile/>
            <Footer/>
        </>
    )
}