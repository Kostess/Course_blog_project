import {LinkAsButton} from "@ui/Link/Link.jsx";
import {BaseText, TitleBlock} from "@ui/Text/Text.jsx";

export const CardPost = () => {
    return (
        <div className="grid grid-cols-[223px_1fr] gap-5 bg-main-blue rounded-lg">
            <div className="h-full">
                <img src="https://actozil.ru/upload/iblock/817/817bde6611459faee289a3dc4b1f68d4.jpeg" alt="" className="block h-full w-full rounded-tl-lg rounded-bl-lg object-cover"/>
            </div>
            <div className="py-4 pr-4 grid gap-2.5">
                <TitleBlock>Заголовок статьи </TitleBlock>
                <BaseText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab
                    labore et dolore magna aliqua.
                </BaseText>
                <div className="justify-self-start">
                    <LinkAsButton href="/post">Читать статью</LinkAsButton>
                </div>
            </div>
        </div>
    )
}