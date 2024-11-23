import {FormLogin} from "@components/Form/FormLogin.jsx";
import {LinkBlue} from "@ui/Link/Link.jsx";

export const MainLogin = () => {
    return (
        <main className="container mx-auto mt-10">
            <FormLogin/>
            <div className="mt-5 text-center">
                <span>Ещё не зарегистрированы? </span>
                <LinkBlue href="/signup">Зарегистрироваться</LinkBlue>
            </div>
        </main>
    )
}