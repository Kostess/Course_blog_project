export const MessageList = ({messages, onMessageSelect}) => {
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