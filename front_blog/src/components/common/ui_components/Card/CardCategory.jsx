import {TitleBlock} from "@ui/Text/Text.jsx";
import {LinkAsButton} from "@ui/Link/Link.jsx";

export const CardCategory = () => {
    return (
        <div className="bg-main-blue rounded-lg p-4 grid gap-2.5">
            <TitleBlock>Заголовок статьи</TitleBlock>
            <div className="justify-self-start">
                <LinkAsButton href="/post">Перейти к статьям</LinkAsButton>
            </div>
        </div>
    )
}