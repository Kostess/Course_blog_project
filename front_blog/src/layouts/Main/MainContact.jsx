import {FormContact} from "@components/Form/FormContact.jsx";
import {TitleBlock} from "@ui/Text/Text.jsx";

export const MainContact = () => {



    return (
        <main className="container mx-auto mt-10">
            <span className="flex w-full justify-center mb-5">
                <TitleBlock>
                    Свяжитесь с нами
                </TitleBlock>
            </span>

            <FormContact/>
        </main>
    );
};