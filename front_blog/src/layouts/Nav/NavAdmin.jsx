import {MainButton} from "@ui/Button/Button.jsx";
import {LinkAsButton} from "@ui/Link/Link.jsx";

export const NavAdmin = () => {
    return (
        <nav className="bg-main-blue flex justify-end max-w-80 w-full h-screen">
            <div className="flex flex-col mt-20 gap-5">
                <LinkAsButton href="/profile" className="rounded-r-none">
                    Профиль
                </LinkAsButton>
                <MainButton className="rounded-r-none">
                    Статистика
                </MainButton>
                <MainButton className="rounded-r-none">
                    Модерация статей
                </MainButton>
                <MainButton className="rounded-r-none">
                    Сообщения
                </MainButton>
                <LinkAsButton href="/edit-post" className="rounded-r-none">
                    Написать статью
                </LinkAsButton>
            </div>
        </nav>
    )
}