import { Header } from "@layouts/Header/Header.jsx";
import { Footer } from "@layouts/Footer/Footer.jsx";
import { MainRegistrationConfirmed } from "@layouts/Main/MainRegistrationConfirmed.jsx";
import { useEffect } from "react";

export const RegistrationConfirmed = ({ title }) => {
    useEffect(() => {
        document.title = title || "TechWorld!";
    }, [title]);

    return (
        <>
            <Header title={title} />
            <MainRegistrationConfirmed />
            <Footer />
        </>
    );
};