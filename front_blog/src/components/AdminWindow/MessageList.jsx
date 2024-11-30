import {useState, useEffect} from "react";

export const MessageList = ({onMessageSelect}) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Здесь можно добавить логику для получения списка сообщений
        // Например, запрос к API
        const mockMessages = [
            {
                id: 1,
                name: "Иван Иванов",
                email: "ivan@example.com",
                subject: "Проблема с регистрацией",
                message: "Здравствуйте, у меня возникли проблемы с регистрацией на сайте.",
            },
            // Добавьте другие сообщения по аналогии
        ];
        setMessages(mockMessages);
    }, []);

    return (
        <div className="w-1/3 pr-4">
            <h2 className="text-xl font-bold mb-4">Сообщения</h2>
            <ul>
                {messages.map(message => (
                    <li key={message.id} className="mb-2">
                        <button onClick={() => onMessageSelect(message)} className="text-left w-full">
                            {message.subject} от {message.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};