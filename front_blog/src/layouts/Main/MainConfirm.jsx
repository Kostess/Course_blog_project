import { FormConfirm } from "@components/Form/FormConfirm.jsx";
import {useState} from "react";
import {LinkAsButton} from "@ui/Link/Link.jsx";

export const MainConfirm = () => {
    const [confirmed, setConfirmed] = useState(false);

    return (
        <main className="container mx-auto mt-10">
            {confirmed ?
                (
                    <>
                        <h1 className="text-2xl font-bold mb-5">Регистрация подтверждена</h1>
                        <p className="mb-5">Ваша регистрация успешно подтверждена. Теперь вы можете войти в систему.</p>
                        <LinkAsButton className="inline" href="/login">Перейти к авторизации</LinkAsButton>
                    </>
                ) : (
                    <FormConfirm setConfirmed={(value) => setConfirmed(value)}/>
                )

            }

        </main>
    );
};