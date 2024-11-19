import {Logo} from "@common/Logo/Logo.jsx";
import {Nav} from "@layouts/Nav/Nav.jsx";
import {LinkAsButton, LinkMain} from "@ui/Link/Link.jsx";
import {TitlePage} from "@ui/Text/Text.jsx";


export const Header = ({isLoginUser}) => {
    return (
        <header className="container mx-auto relative h-60">
            <div className="flex justify-between items-center w-full py-6">
                <Logo/>
                <Nav/>
                <div className="flex items-center gap-6">
                    <LinkAsButton href={isLoginUser ? "/edit-post" : "/login"}>Написать пост</LinkAsButton>
                    {isLoginUser ? "Профиль" : <LinkMain href="/login">Войти</LinkMain>}
                </div>
            </div>
            <TitlePage>
                Добро пожаловать на сайт TechWorld!
            </TitlePage>
        </header>
    )
}