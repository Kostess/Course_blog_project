import {useEffect, useState} from "react";
import {Header} from "@layouts/Header/Header.jsx";
import {Footer} from "@layouts/Footer/Footer.jsx";
import {MainProfile} from "@layouts/Main/MainProfile.jsx";
import {jwtDecode} from 'jwt-decode';

export const Profile = ({isLoginUser, title}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        document.title = title || "TechWorld!";

        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUser(decoded);
            } catch (error) {
                console.error('Ошибка декодирования токена:', error);
            }
        }
    }, [title]);

    return (
        <>
            <Header isLoginUser={isLoginUser} title={title || "TechWorld!"}/>
            {!user? <div>Загрузка...</div> : <MainProfile user={user}/>}
            <Footer/>
        </>
    )
}