import * as Yup from "yup";
import {Field, Form, Formik} from "formik";
import {MainButton} from "@ui/Button/Button.jsx";
import {createUser} from "../../api/api.js";
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
    username: Yup.string().required("Введите имя"),
    email: Yup.string().email("Некорректный email").required("Введите email"),
    password: Yup.string().min(6, "Минимальная длина пароля 6 символов").required("Введите пароль"),
    confirmPassword: Yup.string().required("Повторите пароль").oneOf([Yup.ref("password")], "Пароли не совпадают")
});

export const FormSignUp = () => {
    const navigate = useNavigate();

    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            const response = await createUser(values);
            if (response) {
                navigate('/profile');
            }
        } catch (error) {
            if (error.response) {
                console.error('Ошибка при отправке:', error.response.data);
                setErrors(error.response.data.errors);
            } else {
                console.error('Ошибка:', error.message);
            }
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({ isSubmitting, submitCount, errors }) => (
                <Form className="max-w-96 mx-auto flex flex-col gap-5">
                    <label>
                        Имя:
                        <Field type="text" name="username" className="w-full bg-main-blue px-4 py-2.5 rounded-lg outline-0" />
                        {submitCount > 0 && errors.username && (
                            <div className="text-base text-red-500 mt-2">{errors.username}</div>
                        )}
                    </label>
                    <label>
                        Email:
                        <Field type="email" name="email" className="w-full bg-main-blue px-4 py-2.5 rounded-lg outline-0" />
                        {submitCount > 0 && errors.email && (
                            <div className="text-base text-red-500 mt-2">{errors.email}</div>
                        )}
                    </label>
                    <label>
                        Пароль:
                        <Field type="password" name="password" autoComplete="on" className="w-full bg-main-blue px-4 py-2.5 rounded-lg outline-0" />
                        {submitCount > 0 && errors.password && (
                            <div className="text-base text-red-500 mt-2">{errors.password}</div>
                        )}
                    </label>
                    <label>
                        Повторите пароль:
                        <Field type="password" name="confirmPassword" autoComplete="on" className="w-full bg-main-blue px-4 py-2.5 rounded-lg outline-0" />
                        {submitCount > 0 && errors.confirmPassword && (
                            <div className="text-base text-red-500 mt-2">{errors.confirmPassword}</div>
                        )}
                    </label>
                    <MainButton type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Отправка...' : 'Зарегистрироваться'}
                    </MainButton>
                </Form>
            )}
        </Formik>
    )
}