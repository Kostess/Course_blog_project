import {MainButton} from "@ui/Button/Button.jsx";

export const Modal = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="grid place-items-center bg-main-blue p-6 rounded-lg shadow-lg animate-fade-in">
                <p className="text-lg font-bold mb-4">{message}</p>
                <MainButton onClick={onClose}>
                    Закрыть
                </MainButton>
            </div>
        </div>
    );
};