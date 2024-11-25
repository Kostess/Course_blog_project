import {TitlePage} from "@ui/Text/Text.jsx";
import {LinkMain} from "@ui/Link/Link.jsx";

export const HeaderAdmin = ({title}) => {

    return (
        <header className="bg-main-blue py-5">
            <div className="container mx-auto flex items-center justify-between">
                <TitlePage>
                    {title}
                </TitlePage>
                <LinkMain href="/">
                    Вернуться на сайт
                </LinkMain>
            </div>
        </header>
    )
}