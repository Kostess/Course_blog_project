import { useState, useEffect } from 'react';
import defaultAvatar from '@assets/default-avatar.png';
import { ButtonProfile, MainButton } from "@ui/Button/Button.jsx";
import { Input, Textarea } from "@ui/Input/Input.jsx";
import { BaseText, TitleBlock } from "@ui/Text/Text.jsx";
import { PostGroupPagination } from "@components/PostGroupPagination/PostGroupPagination.jsx";
import { ToolbarPost } from "@components/ToolbarPost/ToolbarPost.jsx";
import { LinkAsButton } from "@ui/Link/Link.jsx";
import {useAuth} from "@utils/useAuth.jsx";
import {useNavigate} from "react-router-dom";
import {deleteUser, updateUser} from "@api/api.js";

export const MainProfile = ({ user, onDelete, onSave }) => {
    const [avatar, setAvatar] = useState(user.avatar || defaultAvatar);
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [bio, setBio] = useState(user.bio);
    const [isEditing, setIsEditing] = useState(false);

    const {logout} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // Обновляем состояние при изменении пропсов
        setAvatar(user.avatar || defaultAvatar);
        setUsername(user.username);
        setEmail(user.email);
        setBio(user.bio);
    }, [user]);

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

    const isPosts = false;

    const handleLogout = () => {
        logout();
        navigate('/login', { replace: true });
    };

    const handleDeleteProfile = async () => {
        try {
            await deleteUser(user.userId)
            onDelete();
        } catch (error) {
            console.error('Ошибка при удалении профиля:', error);
        }
    };

    const handleEditProfile = () => {
        setIsEditing(!isEditing);
    };

    const handleSaveProfile = async () => {
        try {
            await updateUser(user.userId, {username, email, bio, avatar});

            // Вызываем функцию onSave, чтобы обновить состояние в родительском компоненте
            onSave();

            setIsEditing(false);
        } catch (error) {
            console.error('Ошибка при сохранении профиля:', error);
        }
    };

    return (
        <main className="container mx-auto mt-10">
            <div className="flex justify-between">
                <div className="flex gap-5 max-w-xl w-full">
                    <label htmlFor="avatar-upload" className="cursor-pointer">
                        <ButtonProfile avatar={avatar} widthClassName="w-32" heightClassName="h-32" />
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
                                <Input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Textarea
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                />
                                <MainButton
                                    onClick={handleSaveProfile}
                                    className="mt-4 self-start"
                                >
                                    Сохранить
                                </MainButton>
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
                    <MainButton
                        onClick={handleEditProfile}
                    >
                        {isEditing ? 'Отмена' : 'Редактировать'}
                    </MainButton>
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
            <div className="mt-20">
                <TitleBlock>
                    Ваши статьи
                </TitleBlock>
                <article className={`${isPosts ? "mt-10" : "mt-5"} inline-block`}>
                    {isPosts &&
                        <>
                            <ToolbarPost />
                            <PostGroupPagination />
                        </>
                    }
                    {!isPosts &&
                        <>
                            <BaseText>
                                Вы не написали ещё ни одну статью
                            </BaseText>
                            <span className="inline-block mt-2">
                                <LinkAsButton href="/edit-post">Написать пост</LinkAsButton>
                            </span>
                        </>
                    }
                </article>
            </div>
        </main>
    );
};