import * as Yup from "yup";
import {Field, Form, Formik} from "formik";
import {MainButton} from "@ui/Button/Button.jsx";
import { useNavigate } from 'react-router-dom';
import {loginUser} from "../../api/api.js";

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Введите имя"),
    password: Yup.string().required("Введите пароль"),
});

export const FormLogin = () => {
    const navigate = useNavigate();

    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            const response = await loginUser(values);
            console.log('Успешная авторизация:', response);
            localStorage.setItem('token', response.token);
            navigate('/profile');
        } catch (error) {
            console.error('Ошибка авторизации:', error);
            if (error.response && error.response.data) {
                setErrors({
                    username: error.response.data.errorUsername,
                    password: error.response.data.errorPassword,
                });
            } else {
                setErrors({ username: 'Произошла ошибка при авторизации' });
            }
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={{ username: '', password: ''}}
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