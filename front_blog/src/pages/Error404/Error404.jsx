import { useEffect } from "react";
import { Header } from "@layouts/Header/Header.jsx";
import { LinkAsButton } from "@ui/Link/Link.jsx";
import { Footer } from "@layouts/Footer/Footer.jsx";
import { BaseText } from "@ui/Text/Text.jsx";
import { FaExclamationTriangle } from "react-icons/fa"; // Импорт иконки

export const Error404 = ({ isLoginUser, title }) => {

    useEffect(() => {
        document.title = title || "TechWorld!";
    }, [title]);

    return (
        <>
            <Header isLoginUser={isLoginUser} title={title || "TechWorld!"} />
            <div className="container mx-auto mt-10 flex flex-col items-center justify-center text-center">
                <FaExclamationTriangle className="text-9xl text-red-500 mb-4 animate-bounce" />
                <BaseText className="text-2xl mb-4">
                    Такой страницы нет.
                </BaseText>
                <BaseText className="mb-8">
                    К сожалению, запрашиваемая вами страница не найдена. Возможно, она была удалена или перемещена.
                </BaseText>
                <span className="mt-5">
                    <LinkAsButton href="/" >
                        На главную
                    </LinkAsButton>
                </span>
            </div>
            <Footer />
        </>
    );
};