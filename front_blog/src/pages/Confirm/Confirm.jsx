import { Header } from "@layouts/Header/Header.jsx";
import { Footer } from "@layouts/Footer/Footer.jsx";
import { MainConfirm } from "@layouts/Main/MainConfirm.jsx";
import { useEffect } from "react";

export const ConfirmPage = ({ isLoginUser, title }) => {
    useEffect(() => {
        document.title = title || "TechWorld!";
    }, [title]);

    return (
        <>
            <Header isLoginUser={isLoginUser} title={title} />
            <MainConfirm />
            <Footer />
        </>
    );
};