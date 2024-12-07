import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {MainButton} from "@ui/Button/Button.jsx";
import {submitForm} from "@api/api.js";

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Введите имя"),
    email: Yup.string().email("Некорректный email").required("Введите email"),
    select: Yup.string().required("Выберите причину обращения"),
    message: Yup.string().required("Введите сообщение")
});

export const FormContact = () => {

    const reasonAppeal = [
        { value: '', label: 'Выберите причину обращения' },
        { value: 'technical', label: 'Технические проблемы' },
        { value: 'Content', label: 'Контент' },
        { value: 'advertising', label: 'Реклама и сотрудничество' },
        { value: 'other', label: 'Другое' }
    ];

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await submitForm(values);
            console.log('Сообщение отправлено админу:', response);
        } catch (error) {
            console.error('Ошибка отправки сообщения админу:', error);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <Formik
            initialValues={{ name: '', email: '', select: '', message: '' }}
            onSubmit={handleSubmit}
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
                        Email:
                        <Field type="email" name="email" className="w-full bg-main-blue px-4 py-2.5 rounded-lg outline-0" />
                        {submitCount > 0 && errors.email && (
                            <div className="text-base text-red-500 mt-2">{errors.email}</div>
                        )}
                    </label>
                    <label>
                        Причина обращения:
                        <Field as="select" name="select" className="w-full bg-main-blue px-4 py-2.5 rounded-lg outline-0">
                            {reasonAppeal.map((item, index) => (
                                <option key={index} value={item.value}>{item.label}</option>
                            ))}
                        </Field>
                        {submitCount > 0 && errors.select && (
                            <div className="text-base text-red-500 mt-2">{errors.select}</div>
                        )}
                    </label>
                    <label>
                        Сообщение:
                        <Field as="textarea" name="message" className="w-full bg-main-blue px-4 py-2.5 rounded-lg outline-0" />
                        {submitCount > 0 && errors.message && (
                            <div className="text-base text-red-500 mt-2">{errors.message}</div>
                        )}
                    </label>
                    <MainButton type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Отправка...' : 'Отправить'}
                    </MainButton>
                </Form>
            )}
        </Formik>
    )
}