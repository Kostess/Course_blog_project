import {useEffect, useState} from "react";
import {Statistic} from "@components/AdminWindow/Statistic.jsx";
import {ModerationList} from "@components/AdminWindow/ModerationList.jsx";
import {ModerationDetails} from "@components/AdminWindow/ModerationDetails.jsx";
import {MessageList} from "@components/AdminWindow/MessageList.jsx";
import {MessageDetails} from "@components/AdminWindow/MessageDetails.jsx";
import {sendReply, getMessages} from "@api/api.js";

export const MainAdmin = ({windowMain}) => {
    const [currentWindow, setCurrentWindow] = useState("statistic");
    const [selectedPost, setSelectedPost] = useState(null);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        switch (windowMain) {
            case "statistic":
                setCurrentWindow("statistic");
                break;
            case "moderation":
                setCurrentWindow("moderation");
                break;
            case "message":
                setCurrentWindow("message");
                break;
            default:
                setCurrentWindow(windowMain);
                break;
        }
    }, [windowMain]);

    useEffect(() => {
        // Запрос к API для получения списка сообщений
        getMessages()
            .then(data => setMessages(data))
            .catch(error => console.error('Error fetching messages:', error));
    }, []);

    const handlePostSelect = (post) => {
        setSelectedPost(post);
    };

    const handleModerationAction = (action) => {
        // Обработка действия модерации (принять/отклонить)
        console.log(`Post ${action}:`, selectedPost);
        // Здесь можно добавить логику для обновления состояния или отправки запроса на сервер
    };

    const handleMessageSelect = (message) => {
        setSelectedMessage(message);
    };

    const handleReply = (reply) => {
        if (selectedMessage) {
            sendReply({ id: selectedMessage.id, email: selectedMessage.email, replyMessage: reply })
                .then(data => {
                    console.log(data);
                    // Обновляем список сообщений после отправки ответа
                    getMessages()
                        .then(data => setMessages(data))
                        .catch(error => console.error('Error fetching messages:', error));
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    };

    return (
        <main className="rounded-tl-[70px] bg-main-dark-blue px-20 py-10">
            {currentWindow === "statistic" && <Statistic />}
            {currentWindow === "moderation" && (
                <div className="flex">
                    <ModerationList onPostSelect={handlePostSelect} />
                    {selectedPost && (
                        <ModerationDetails post={selectedPost} onAction={handleModerationAction} />
                    )}
                </div>
            )}
            {currentWindow === "message" && (
                <div className="flex">
                    <MessageList messages={messages} onMessageSelect={handleMessageSelect} />
                    {selectedMessage && (
                        <MessageDetails message={selectedMessage} onReply={handleReply} />
                    )}
                </div>
            )}
            {currentWindow !== "statistic" && currentWindow !== "moderation" && currentWindow !== "message" && currentWindow}
        </main>
    );
};