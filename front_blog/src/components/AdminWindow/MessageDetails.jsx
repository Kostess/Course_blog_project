import {useState} from "react";
import {MainButton} from "@ui/Button/Button.jsx";

export const MessageDetails = ({message, onReply}) => {
    const [replyText, setReplyText] = useState("");

    const handleReplySubmit = () => {
        onReply(replyText);
        setReplyText("");
    };

    return (
        <div className="w-2/3 pl-4">
            <h2 className="text-xl font-bold mb-4">{message.subject}</h2>
            <p><strong>От:</strong> {message.name}</p>
            <p><strong>Email:</strong> {message.email}</p>
            <p className="mt-4">{message.message}</p>
            <div className="mt-4">
                <textarea
                    className="w-full h-32 p-2 border border-gray-300 rounded"
                    placeholder="Ваш ответ..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                />
                <MainButton onClick={handleReplySubmit} className="mt-2">
                    Ответить
                </MainButton>
            </div>
        </div>
    );
};