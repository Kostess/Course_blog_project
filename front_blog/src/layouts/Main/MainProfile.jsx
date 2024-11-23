import { useState } from 'react';
import defaultAvatar from '@assets/default-avatar.png';
import {ButtonProfile} from "@ui/Button/Button.jsx";

export const MainProfile = () => {
    const [avatar, setAvatar] = useState(defaultAvatar);
    const [username, setUsername] = useState('Username');
    const [email, setEmail] = useState('Email');
    const [bio, setBio] = useState('Биография');
    const [isEditing, setIsEditing] = useState(false);

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleLogout = () => {
        // Логика выхода из профиля
        console.log('Выход из профиля');
    };

    const handleDeleteProfile = () => {
        // Логика удаления профиля
        console.log('Удаление профиля');
    };

    const handleEditProfile = () => {
        setIsEditing(!isEditing);
    };

    const handleSaveProfile = () => {
        // Логика сохранения изменений профиля
        console.log('Сохранение профиля');
        setIsEditing(false);
    };

    return (
        <main className="container mx-auto mt-10">
            <div className="flex justify-between">
                <div className="flex gap-5 max-w-xl w-full">
                    <label htmlFor="avatar-upload" className="cursor-pointer">
                        <ButtonProfile avatar={avatar} widthClassName="w-32" heightClassName="h-32"/>
                    </label>
                    <input
                        id="avatar-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarChange}
                        className="hidden"
                    />
                    <div className="flex flex-col gap-3 w-full">
                        {isEditing ? (
                            <>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="bg-gray-800 text-white p-2 rounded-lg"
                                />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-gray-800 text-white p-2 rounded-lg"
                                />
                                <textarea
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    className="bg-gray-800 text-white p-2 rounded-lg"
                                />
                                <button
                                    onClick={handleSaveProfile}
                                    className="bg-main-green text-white rounded-lg px-6 py-3 text-sm text-center font-bold hover:bg-main-dark-green transition-colors duration-300 mt-4 self-start"
                                >
                                    Сохранить
                                </button>
                            </>
                        ) : (
                            <>
                                <span>Username: {username}</span>
                                <span>Email: {email}</span>
                                <span>Биография: {bio}</span>
                            </>
                        )}
                    </div>
                </div>
                <div className="flex flex-col self-start gap-2 mb-4">
                    <button
                        onClick={handleEditProfile}
                        className="bg-main-green text-white rounded-lg px-6 py-3 text-sm text-center font-bold hover:bg-main-dark-green transition-colors duration-300"
                    >
                        {isEditing ? 'Отмена' : 'Редактировать'}
                    </button>
                    <button
                        onClick={handleLogout}
                        className="rounded-lg bg-red-500 hover:bg-red-600 duration-300 p-3 text-white"
                    >
                        Выйти
                    </button>
                    <button
                        onClick={handleDeleteProfile}
                        className="rounded-lg bg-red-700 hover:bg-red-800 duration-300 p-3 text-white"
                    >
                        Удалить профиль
                    </button>
                </div>
            </div>
        </main>
    );
};