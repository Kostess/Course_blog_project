import { LinkAsButton } from "@ui/Link/Link.jsx";

export const MainRegistrationConfirmed = () => {
    return (
        <main className="container mx-auto mt-10 text-center">
            <h1 className="text-2xl font-bold mb-5">Регистрация подтверждена</h1>
            <p className="mb-5">Ваша регистрация успешно подтверждена. Теперь вы можете войти в систему.</p>
            <LinkAsButton href="/login">Перейти к авторизации</LinkAsButton>
        </main>
    );
};