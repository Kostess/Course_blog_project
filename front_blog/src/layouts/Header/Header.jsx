import { Logo } from "@common/Logo/Logo.jsx";
import { Nav } from "@layouts/Nav/Nav.jsx";
import { LinkAsButton, LinkMain } from "@ui/Link/Link.jsx";
import { TitlePage } from "@ui/Text/Text.jsx";
import { DropdownProfile } from "@ui/Dropdown/Dropdown.jsx";
import { useAuth } from "@utils/useAuth.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserAndProfile } from "@api/api.js";

export const Header = ({ title }) => {
    const { isLoginUser, userId, logout } = useAuth();
    const navigate = useNavigate();
    const [avatar, setAvatar] = useState(null);

    const handleLogout = () => {
        logout();
        navigate('/login', { replace: true });
    };

    useEffect(() => {
        const fetchUserData = async () => {
            if (userId) {
                try {
                    const userData = await getUserAndProfile(userId);
                    setAvatar(userData.avatar);
                } catch (error) {
                    console.error('Ошибка при получении данных о пользователе:', error);
                }
            }
        };

        fetchUserData();
    }, [userId]); // Добавляем userId в массив зависимостей

    return (
        <header className="container mx-auto relative h-60">
            <div className="flex justify-between items-center w-full py-6">
                <Logo />
                <Nav />
                <div className="flex items-center gap-6">
                    <LinkAsButton href={isLoginUser ? "/edit-post" : "/login"}>Написать пост</LinkAsButton>
                    {isLoginUser ? <DropdownProfile avatar={avatar} logout={handleLogout} /> : <LinkMain href="/login">Войти</LinkMain>}
                </div>
            </div>
            <div className="mt-10 text-center flex justify-center">
                <TitlePage>
                    {title}
                </TitlePage>
            </div>
        </header>
    );
};