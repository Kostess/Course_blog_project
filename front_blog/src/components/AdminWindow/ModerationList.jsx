import {useState, useEffect} from "react";

export const ModerationList = ({onPostSelect}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Здесь можно добавить логику для получения списка статей для модерации
        // Например, запрос к API
        const mockPosts = [
            {
                id: 1,
                title: "PosgresSQL",
                author: "user",
                createdAt: new Date(),
                category: "tech",
                cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/116px-Postgresql_elephant.svg.png",
            },
            // Добавьте другие статьи по аналогии
        ];
        setPosts(mockPosts);
    }, []);

    return (
        <div className="w-1/3 pr-4">
            <h2 className="text-xl font-bold mb-4">Модерация статей</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id} className="mb-2">
                        <button onClick={() => onPostSelect(post)} className="text-left w-full">
                            {post.title} by {post.author}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};