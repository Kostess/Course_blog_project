import {Header} from "@layouts/Header/Header.jsx";
import {MainCategory} from "@layouts/Main/MainCategory.jsx";
import {Footer} from "@layouts/Footer/Footer.jsx";
import {useEffect} from "react";

export const Category = ({title}) => {

    useEffect(() => {
        document.title = title || "TechWorld!"
    }, [title])

    return (
        <>
            <Header title={title || "TechWorld!"}/>
            <MainCategory/>
            <Footer/>
        </>
    )
}