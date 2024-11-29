import {MainButton} from "@ui/Button/Button.jsx";
import {LinkAsButton} from "@ui/Link/Link.jsx";

export const NavAdmin = ({changeWindowMain}) => {
    return (
        <nav className="bg-main-blue flex justify-end max-w-80 w-full h-screen">
            <div className="flex flex-col mt-20 gap-5">
                <LinkAsButton href="/profile" className="rounded-r-none">
                    Профиль
                </LinkAsButton>
                <MainButton className="rounded-r-none" onClick={() => changeWindowMain("statistic")}>
                    Статистика
                </MainButton>
                <MainButton className="rounded-r-none" onClick={() => changeWindowMain("moderation")}>
                    Модерация статей
                </MainButton>
                <MainButton className="rounded-r-none" onClick={() => changeWindowMain("message")}>
                    Сообщения
                </MainButton>
                <LinkAsButton href="/edit-post" className="rounded-r-none">
                    Написать статью
                </LinkAsButton>
            </div>
        </nav>
    )
}