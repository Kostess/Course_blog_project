import {FormSignUp} from "@components/Form/FormSignUp.jsx";
import {LinkBlue} from "@ui/Link/Link.jsx";

export const MainSignUp = () => {
    return (
        <main className="container mx-auto mt-10">
            <FormSignUp/>
            <div className="mt-5 text-center">
                <span>Уже зарегистрированы? </span>
                <LinkBlue href="/login">Войти</LinkBlue>
            </div>
        </main>
    )
}