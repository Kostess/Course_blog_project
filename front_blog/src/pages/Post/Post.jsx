import {Header} from "@layouts/Header/Header.jsx";
import {Footer} from "@layouts/Footer/Footer.jsx";
import {useEffect} from "react";
import {MainPost} from "@layouts/Main/MainPost.jsx";

export const Post = ({title, post}) => {
    useEffect(() => {
        document.title = title || "TechWorld!"
    }, [title])
    return (
        <>
            <Header title={title}/>
            <MainPost post={post}/>
            <Footer/>
        </>
    )
}