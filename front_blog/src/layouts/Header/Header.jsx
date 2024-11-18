import {Logo} from "@common/Logo/Logo.jsx";
import {Nav} from "@layouts/Nav/Nav.jsx";
import {LinkAsButton, LinkMenu} from "@ui/Link/Link.jsx";
import {TitlePage} from "@common/Title_page/TitlePage.jsx";


export const Header = ({isLoginUser}) => {
    return (
        <>
            <header className="flex justify-between items-center w-full container mx-auto py-6">
                <Logo/>
                <Nav/>
                <div className="flex items-center gap-6">
                    <LinkAsButton href={isLoginUser ? "/edit-post" : "/login"}>Написать пост</LinkAsButton>
                    {isLoginUser ? null : <LinkMenu href="/login">Войти</LinkMenu>}
                </div>
            </header>
            <TitlePage>
                Добро пожаловать на сайт TechWorld!
            </TitlePage>
        </>
    )
}