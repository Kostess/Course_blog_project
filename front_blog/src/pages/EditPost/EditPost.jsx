import {useEffect} from "react";
import {Header} from "@layouts/Header/Header.jsx";
import {Footer} from "@layouts/Footer/Footer.jsx";
import {MainEditPost} from "@layouts/Main/MainEditPost.jsx";

export const EditPost = ({isLoginUser, title}) => {

    useEffect(() => {
        document.title = title || "TechWorld!";
    }, [title]);

    return (
        <>
            <Header isLoginUser={isLoginUser} title={title || "TechWorld!"} />
            <MainEditPost/>
            <Footer />
        </>
    )
}