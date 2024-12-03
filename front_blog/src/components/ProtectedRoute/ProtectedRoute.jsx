import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({ isAuthenticated, redirectPath = '/login' }) => {
    if (isAuthenticated === null) {
        return <div>Загрузка...</div>;
    }
    if (!isAuthenticated) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet/>;
};