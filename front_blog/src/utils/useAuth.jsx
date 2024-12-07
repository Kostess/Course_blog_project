import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export const useAuth = () => {
    const [isLoginUser, setIsLoginUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                const currentTime = Date.now() / 1000;
                if (decoded.exp < currentTime) {
                    // Токен истек, выполняем логаут
                    logout();
                } else {
                    setUserId(decoded.userId);
                    setIsLoginUser(true);
                    if (decoded.role === 'admin') {
                        setIsAdmin(true);
                    }
                }
            } catch (error) {
                console.log(`Ошибка декодирования токена: ${error.message}`);
                logout();
            }
        } else {
            setIsLoginUser(false);
            setIsAdmin(false);
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        setIsLoginUser(false);
        setIsAdmin(false);
    };

    return { isLoginUser, isAdmin, userId, logout };
};