import {Header} from "@layouts/Header/Header.jsx";
import {Main} from "@layouts/Main/Main.jsx";

export const Home = ({isLoginUser}) => {
    return (
        <>
            <Header isLoginUser={isLoginUser}/>
            <Main/>
        </>
    )
}