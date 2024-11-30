import {useState, useEffect} from "react";

export const Statistic = () => {
    const [stats, setStats] = useState({
        users: 0,
        articles: 0,
        messages: 0,
        likes: 0,
    });

    useEffect(() => {
        // Здесь можно добавить логику для получения статистики
        // Например, запрос к API
        const mockStats = {
            users: 1200,
            articles: 500,
            messages: 250,
            likes: 3500,
        };
        setStats(mockStats);
    }, []);

    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-main-blue p-4 rounded shadow">
                <h3 className="text-lg font-bold">Пользователи</h3>
                <p className="text-2xl">{stats.users}</p>
            </div>
            <div className="bg-main-blue p-4 rounded shadow">
                <h3 className="text-lg font-bold">Статьи</h3>
                <p className="text-2xl">{stats.articles}</p>
            </div>
            <div className="bg-main-blue p-4 rounded shadow">
                <h3 className="text-lg font-bold">Сообщения</h3>
                <p className="text-2xl">{stats.messages}</p>
            </div>
            <div className="bg-main-blue p-4 rounded shadow">
                <h3 className="text-lg font-bold">Лайки</h3>
                <p className="text-2xl">{stats.likes}</p>
            </div>
        </div>
    );
};