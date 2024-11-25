import {useEffect} from "react";
import {Header} from "@layouts/Header/Header.jsx";
import {Footer} from "@layouts/Footer/Footer.jsx";
import {Main} from "@layouts/Main/Main.jsx";
import {MainNoResult} from "@layouts/Main/MainNoResult.jsx";

export const Search = ({isLoginUser, title}) => {

    useEffect(() => {
        document.title = title || "TechWorld!"
    }, [title])

    const result = true;

    return (
        <>
            <Header isLoginUser={isLoginUser} title={title || "TechWorld!"}/>
            {result && <Main/>}
            {!result && <MainNoResult/>}
            <Footer/>
        </>
    )
}