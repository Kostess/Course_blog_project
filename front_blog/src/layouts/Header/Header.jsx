import {Logo} from "@common/Logo/Logo.jsx";
import {Nav} from "@layouts/Nav/Nav.jsx";
import {LinkAsButton, LinkMain} from "@ui/Link/Link.jsx";
import {TitlePage} from "@ui/Text/Text.jsx";
import {DropdownProfile} from "@ui/Dropdown/Dropdown.jsx";
import {useAuth} from "@utils/useAuth.jsx";
import {useNavigate} from "react-router-dom";


export const Header = ({title}) => {
    const {isLoginUser, logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login', { replace: true });
    };

    return (
        <header className="container mx-auto relative h-60">
            <div className="flex justify-between items-center w-full py-6">
                <Logo/>
                <Nav/>
                <div className="flex items-center gap-6">
                    <LinkAsButton href={isLoginUser ? "/edit-post" : "/login"}>Написать пост</LinkAsButton>
                    {isLoginUser ? <DropdownProfile logout={handleLogout}/> : <LinkMain href="/login">Войти</LinkMain>}
                </div>
            </div>
            <div className="mt-10 text-center flex justify-center">
                <TitlePage>
                    {title}
                </TitlePage>
            </div>
        </header>
    )
}