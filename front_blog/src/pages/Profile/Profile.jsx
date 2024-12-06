import {useEffect, useState} from "react";
import {Header} from "@layouts/Header/Header.jsx";
import {Footer} from "@layouts/Footer/Footer.jsx";
import {MainProfile} from "@layouts/Main/MainProfile.jsx";
import {jwtDecode} from 'jwt-decode';
import {getUserAndProfile} from "@api/api.js";
import {useNavigate} from "react-router-dom";

export const Profile = ({title}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        document.title = title || "TechWorld!";

        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const decoded = jwtDecode(token);
                    console.log(decoded);
                    const userData = await getUserAndProfile(decoded.userId);
                    setUser(userData);
                } catch (error) {
                    console.error('Ошибка при получении данных о пользователе:', error);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [title]);

    const handleDelete = () => {
        // Очищаем состояние пользователя и выполняем другие необходимые действия
        console.log('Удаление пользователя');
        setUser(null);
        console.log("Удаление токена");
        localStorage.removeItem('token');
        console.log("перенаправление на страницу логина");
        navigate('/login', { replace: true });
        console.log("всё");
    };

    const handleSave = () => {
        // Обновляем состояние пользователя и выполняем другие необходимые действия
        // Например, можно выполнить повторный запрос для получения обновленных данных
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const decoded = jwtDecode(token);
                    const userData = await getUserAndProfile(decoded.userId);
                    setUser(userData);
                } catch (error) {
                    console.error('Ошибка при получении данных о пользователе:', error);
                }
            }
        };

        fetchUserData();
    };

    return (
        <>
            <Header title={title || "TechWorld!"} />
            {
                loading ?
                    <div className="container mx-auto">Загрузка...</div>
                    :
                    !user ?
                        <div className="container mx-auto">Пользователь не найден</div>
                        :
                        <MainProfile userData={user} onDelete={handleDelete} onSave={handleSave} />
            }
            <Footer />
        </>
    );
}