import {TitleBlock} from "@ui/Text/Text.jsx";
import {LinkAsButton} from "@ui/Link/Link.jsx";

export const MainNoResult = () => {
    return (
        <main className="container mx-auto mt-10">
            <TitleBlock>Ничего не найдено</TitleBlock>
            <LinkAsButton href="/">Вернуться на главную</LinkAsButton>
        </main>
    )
}