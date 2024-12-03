import { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';

export const useAuth = () => {
    const [isLoginUser, setIsLoginUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setIsLoginUser(true);
                if (decoded.role === 'admin') {
                    setIsAdmin(true);
                }
            } catch (error) {
                console.log(`Ошибка декодирования токена: ${error.message}`);
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

    return { isLoginUser, isAdmin, logout };
};