import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { MainButton } from "@ui/Button/Button.jsx";

const validationSchema = Yup.object().shape({
    title: Yup.string().required("Заголовок обязателен"),
    category: Yup.string().required("Категория обязательна"),
    cover: Yup.mixed().required("Обложка обязательна"),
    content: Yup.string().required("Содержание обязательно"),
    tags: Yup.string().required("Теги обязательны"),
});

export const MainEditPost = () => {
    const initialValues = {
        title: "",
        category: "",
        cover: null,
        content: "",
        tags: "",
    };

    const [coverPreview, setCoverPreview] = useState(null);

    const handleCoverChange = (e, setFieldValue) => {
        const file = e.target.files[0];
        setFieldValue("cover", file);
        setCoverPreview(URL.createObjectURL(file));
    };

    const handleSubmit = (values, { setSubmitting }) => {
        // Здесь можно добавить логику отправки данных на сервер
        console.log("Отправка на модерацию:", values);
        setSubmitting(false);
    };

    return (
        <main className="container mx-auto mt-10">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, setFieldValue, isSubmitting, submitCount, errors }) => (
                    <Form className="space-y-6">
                        <div className="flex flex-col w-full gap-5">
                            <label htmlFor="cover" className="self-start">
                                Обложка:
                                <input
                                    type="file"
                                    id="cover"
                                    name="cover"
                                    onChange={(e) => handleCoverChange(e, setFieldValue)}
                                    className="w-full bg-main-blue px-4 py-2.5 rounded-lg outline-0 hidden"
                                />

                                <img
                                    src={coverPreview || "https://actozil.ru/upload/iblock/817/817bde6611459faee289a3dc4b1f68d4.jpeg"}
                                    alt="Preview" className="mt-2 max-w-xl w-full h-auto cursor-pointer"/>

                                {submitCount > 0 && errors.cover && (
                                    <div className="text-base text-red-500 mt-2">{errors.cover}</div>
                                )}
                            </label>
                            <label htmlFor="title">
                                Заголовок:
                                <Field
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="w-full bg-main-blue px-4 py-2.5 rounded-lg outline-0"
                                />
                                {submitCount > 0 && errors.title && (
                                    <div className="text-base text-red-500 mt-2">{errors.title}</div>
                                )}
                            </label>
                            <label htmlFor="category">
                                Категория:
                                <Field
                                    as="select"
                                    id="category"
                                    name="category"
                                    className="w-full bg-main-blue px-4 py-2.5 rounded-lg outline-0"
                                >
                                    <option value="">Выберите категорию</option>
                                    <option value="tech">Технологии</option>
                                    <option value="science">Наука</option>
                                    <option value="education">Образование</option>
                                </Field>
                                {submitCount > 0 && errors.category && (
                                    <div className="text-base text-red-500 mt-2">{errors.category}</div>
                                )}
                            </label>
                            <label htmlFor="tags">
                                Теги:
                                <Field
                                    type="text"
                                    id="tags"
                                    name="tags"
                                    className="w-full bg-main-blue px-4 py-2.5 rounded-lg outline-0"
                                    placeholder="Введите теги через запятую"
                                />
                                {submitCount > 0 && errors.tags && (
                                    <div className="text-base text-red-500 mt-2">{errors.tags}</div>
                                )}
                            </label>
                        </div>
                        <div>
                            <label htmlFor="content">
                                Содержание:
                                <SunEditor
                                    id="content"
                                    setContents={values.content}
                                    onChange={(content) => setFieldValue("content", content)}
                                    setOptions={{
                                        height: 300,
                                        buttonList: [
                                            ["undo", "redo"],
                                            ["font", "fontSize", "formatBlock"],
                                            ["paragraphStyle", "blockquote"],
                                            ["bold", "underline", "italic", "strike", "subscript", "superscript"],
                                            ["fontColor", "hiliteColor", "textStyle"],
                                            ["removeFormat"],
                                            ["outdent", "indent"],
                                            ["align", "horizontalRule", "list", "lineHeight"],
                                            ["table", "link", "image", "video"],
                                            ["fullScreen", "showBlocks", "codeView"],
                                            ["preview", "print"],
                                            ["save"]
                                        ]
                                    }}
                                    wrapperClassName="border border-gray-300 rounded-lg"
                                    editorClassName="p-4"
                                />
                                {submitCount > 0 && errors.content && (
                                    <div className="text-base text-red-500 mt-2">{errors.content}</div>
                                )}
                            </label>
                            <div className="text-sm text-gray-500 mt-2">
                                Первые 100 символов будут использоваться для описания.
                            </div>
                        </div>
                        <MainButton
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Отправить на модерацию
                        </MainButton>
                    </Form>
                )}
            </Formik>
        </main>
    );
};