import { Logo } from "@common/Logo/Logo.jsx";
import { Nav } from "@layouts/Nav/Nav.jsx";
import { ListFooter } from "@ui/List/List.jsx";
import {BaseText, TitleBlock} from "@ui/Text/Text.jsx";
import { FaVk, FaTelegram, FaLink } from "react-icons/fa";
import {LinkMain} from "@ui/Link/Link.jsx";
import { useState } from "react";
import {Modal} from "@ui/Modal/Modal.jsx";

export const Footer = () => {
    const [showModal, setShowModal] = useState(false);

    const tag = [
        { name: "HTML", url: "#" },
        { name: "CSS", url: "#" },
        { name: "JavaScript", url: "#" },
        { name: "React", url: "#" },
        { name: "Redux", url: "#" },
    ];

    const categories = [
        { name: "Программирование", url: "#" },
        { name: "Разработка", url: "#" },
        { name: "Windows", url: "#" },
        { name: "Гайды", url: "#" },
        { name: "Разное", url: "#" },
    ];

    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            setShowModal(true);
        });
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <footer className="mt-20 pb-8 container mx-auto">
            <div className="flex justify-between">
                <div className="inline-flex flex-col gap-5">
                    <Logo />
                    <Nav isVertical={true} />
                </div>
                <div className="inline-flex gap-x-36 mt-5">
                    <ListFooter title="Популярные теги" array={tag} />
                    <ListFooter title="Категории" array={categories} />
                </div>
                <div className="mt-5">
                    <TitleBlock>
                        Расскажите о нас
                    </TitleBlock>
                    <div className="flex justify-around items-center gap-4 mt-4">
                        <a href={`https://vk.com/share.php?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                            <FaVk size={36} />
                        </a>
                        <a href={`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                            <FaTelegram size={36} />
                        </a>
                        <button onClick={copyToClipboard} className="text-blue-500 hover:text-blue-700">
                            <FaLink size={36} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-12 flex justify-center gap-10">
                <BaseText>&copy; {new Date().getFullYear()} TechWorld. Все права защищены.</BaseText>
                <BaseText>
                    <LinkMain href="#">
                        Правила сайта
                    </LinkMain>
                </BaseText>
                <BaseText>
                    <LinkMain href="#">
                        Политика конфиденциальности
                    </LinkMain>
                </BaseText>
            </div>
            {showModal && <Modal message="Скопировано" onClose={closeModal} />}
        </footer>
    );
};