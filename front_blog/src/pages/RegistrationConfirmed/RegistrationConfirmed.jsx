import { Header } from "@layouts/Header/Header.jsx";
import { Footer } from "@layouts/Footer/Footer.jsx";
import { MainRegistrationConfirmed } from "@layouts/Main/MainRegistrationConfirmed.jsx";
import { useEffect } from "react";

export const RegistrationConfirmed = ({ isLoginUser, title }) => {
    useEffect(() => {
        document.title = title || "TechWorld!";
    }, [title]);

    return (
        <>
            <Header isLoginUser={isLoginUser} title={title} />
            <MainRegistrationConfirmed />
            <Footer />
        </>
    );
};