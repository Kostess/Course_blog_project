import * as Yup from "yup";
import {Field, Form, Formik} from "formik";
import {MainButton} from "@ui/Button/Button.jsx";

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Введите имя"),
    password: Yup.string().required("Введите пароль"),
});

export const FormLogin = () => {
    return (
        <Formik
            initialValues={{ name: '', password: ''}}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
        >
            {({ isSubmitting, submitCount, errors }) => (
                <Form className="max-w-96 mx-auto flex flex-col gap-5">
                    <label>
                        Имя:
                        <Field type="text" name="name" className="w-full bg-main-blue px-4 py-2.5 rounded-lg outline-0" />
                        {submitCount > 0 && errors.name && (
                            <div className="text-base text-red-500 mt-2">{errors.name}</div>
                        )}
                    </label>
                    <label>
                        Пароль:
                        <Field type="password" name="password" className="w-full bg-main-blue px-4 py-2.5 rounded-lg outline-0" />
                        {submitCount > 0 && errors.password && (
                            <div className="text-base text-red-500 mt-2">{errors.password}</div>
                        )}
                    </label>
                    <MainButton type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Отправка...' : 'Войти'}
                    </MainButton>
                </Form>
            )}
        </Formik>
    )
}