import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { MainButton } from "@ui/Button/Button.jsx";
import { useNavigate } from 'react-router-dom';
import {confirmRegistration} from "../../api/api.js";

const validationSchema = Yup.object().shape({
    token: Yup.string().required("Введите токен подтверждения"),
});

export const FormConfirm = () => {
    const navigate = useNavigate();

    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            console.log(1);
            const response = await confirmRegistration(values);
            console.log(2);
            if (response) {
                navigate('/registration-confirmed');
            }
        } catch (error) {
            if (error.response) {
                console.error('Ошибка при подтверждении:', error.response);
                setErrors(error.response.message);
            } else {
                console.error('Ошибка:', error.message);
            }
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={{ token: '' }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({ isSubmitting, submitCount, errors }) => (
                <Form className="max-w-96 mx-auto flex flex-col gap-5">
                    <label>
                        Токен подтверждения:
                        <Field type="text" name="token" className="w-full bg-main-blue px-4 py-2.5 rounded-lg outline-0" />
                        {submitCount > 0 && errors.token && (
                            <div className="text-base text-red-500 mt-2">{errors.token}</div>
                        )}
                    </label>
                    <MainButton type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Отправка...' : 'Подтвердить регистрацию'}
                    </MainButton>
                </Form>
            )}
        </Formik>
    );
};