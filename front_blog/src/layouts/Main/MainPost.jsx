import { BaseText, TitleBlock } from "@ui/Text/Text.jsx";
import { ButtonBackgroundBlue, MainButton } from "@ui/Button/Button.jsx";
import { FaLink, FaTelegram, FaVk } from "react-icons/fa";
import { useState } from "react";
import { Modal } from "@ui/Modal/Modal.jsx";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { LinkAsButton } from "@ui/Link/Link.jsx";
import { CardComment } from "@ui/Card/CardComment.jsx";
import defaultAvatar from '@assets/default-avatar.png';
import {useAuth} from "@utils/useAuth.jsx";

export const MainPost = ({ post, isLoginUser }) => {
    const [showModal, setShowModal] = useState(false);
    const {isUserLogin} = useAuth();

    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            setShowModal(true);
        });
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const validationSchema = Yup.object().shape({
        comment: Yup.string().required("Напишите комментарий"),
    });

    const createdAt = new Date();
    const year = createdAt.getFullYear();
    const month = String(createdAt.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
    const day = String(createdAt.getDate()).padStart(2, '0');

    const formattedDate = `${day}-${month}-${year}`;

    return (
        <main className="container mx-auto mt-10">
            <p className="text-base text-main-blue">Автор: <span>{post.author}</span></p>
            <p className="text-base text-main-blue">Дата публикации: <span>{post.createdAt}</span></p>
            <div className="mt-5" dangerouslySetInnerHTML={{ __html: post.content }}></div>
            <div className="mt-10">
                <div className="flex justify-between">
                    <div>
                        <TitleBlock>
                            Понравилась статья
                        </TitleBlock>
                        <div className="mt-5 flex items-center gap-4">
                            <BaseText>
                                Поставьте лайк:
                            </BaseText>
                            <span>
                                <ButtonBackgroundBlue>
                                    <span className="flex items-center justify-center gap-2">
                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.9999 2.74805L7.2829 2.01105C5.5999 0.281049 2.5139 0.878049 1.39989 3.05305C0.876895 4.07605 0.758895 5.55305 1.71389 7.43805C2.63389 9.25305 4.5479 11.427 7.9999 13.795C11.4519 11.427 13.3649 9.25305 14.2859 7.43805C15.2409 5.55205 15.1239 4.07605 14.5999 3.05305C13.4859 0.878049 10.3999 0.280049 8.7169 2.01005L7.9999 2.74805ZM7.9999 15C-7.33311 4.86805 3.27889 -3.03995 7.82389 1.14305C7.88389 1.19805 7.94289 1.25505 7.9999 1.31405C8.05632 1.2551 8.11503 1.19839 8.17589 1.14405C12.7199 -3.04195 23.3329 4.86705 7.9999 15Z"
                                            fill="white"/>
                                        </svg>
                                        <span>
                                            {post.likes}
                                        </span>
                                    </span>
                                </ButtonBackgroundBlue>
                            </span>
                        </div>
                        <div className="mt-5">
                            <BaseText>
                                Поделитесь с друзьями:
                            </BaseText>
                            <div className="flex justify-around items-center gap-4 mt-4">
                                <a href={`https://vk.com/share.php?url=${encodeURIComponent(window.location.href)}`}
                                   target="_blank" rel="noopener noreferrer"
                                   className="text-blue-500 hover:text-blue-700">
                                    <FaVk size={36}/>
                                </a>
                                <a href={`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}`}
                                   target="_blank" rel="noopener noreferrer"
                                   className="text-blue-500 hover:text-blue-700">
                                <FaTelegram size={36}/>
                                </a>
                                <button onClick={copyToClipboard} className="text-blue-500 hover:text-blue-700">
                                    <FaLink size={36}/>
                                </button>
                            </div>
                            {showModal && <Modal message="Скопировано" onClose={closeModal} />}
                        </div>
                    </div>
                    <div>
                        <a href="/contact"
                           className="flex items-center gap-2 hover:text-blue-500 hover:fill-blue-500 duration-200">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_183_223)">
                                    <path
                                        d="M27.6955 23.0528L15.9455 2.70118C15.0806 1.20323 12.9198 1.20269 12.0546 2.70118L0.304526 23.0528C-0.560303 24.5507 0.519667 26.4224 2.24998 26.4224H25.75C27.4797 26.4224 28.5606 24.5513 27.6955 23.0528ZM25.75 24.3638H2.24998C2.10397 24.3638 2.01412 24.2088 2.08729 24.0821L13.8373 3.73046C13.9103 3.60396 14.0895 3.60369 14.1626 3.73046L25.9127 24.082C25.9857 24.2086 25.8964 24.3638 25.75 24.3638Z"
                                        fill="currentColor"/>
                                    <path
                                        d="M14 10.1167C13.4316 10.1167 12.9707 10.5776 12.9707 11.146V17.0462C12.9707 17.6146 13.4316 18.0755 14 18.0755C14.5684 18.0755 15.0293 17.6146 15.0293 17.0462V11.146C15.0293 10.5776 14.5685 10.1167 14 10.1167Z"
                                        fill="currentColor"/>
                                    <path
                                        d="M14 19.4127C13.4316 19.4127 12.9707 19.8736 12.9707 20.442V21.0566C12.9707 21.6251 13.4316 22.0859 14 22.0859C14.5684 22.0859 15.0293 21.6251 15.0293 21.0566V20.442C15.0293 19.8735 14.5685 19.4127 14 19.4127Z"
                                        fill="currentColor"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_183_223">
                                        <rect width="28" height="28" fill="currentColor"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            Пожаловаться на статью
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <div className="flex justify-center">
                    <TitleBlock>
                        Комментарии
                    </TitleBlock>
                </div>
                {
                    isLoginUser
                    &&
                    <Formik
                        initialValues={{comment: ''}}
                        validationSchema={validationSchema}
                        onSubmit={(values) => console.log(values)}
                    >
                        {({isSubmitting, submitCount, errors}) => (
                            <Form className="max-w-96 mx-auto flex flex-col gap-5 mt-5">
                                <label>
                                    Написать комментарий:
                                    <Field as="textarea" name="comment"
                                           className="w-full bg-main-blue px-4 py-2.5 rounded-lg outline-0"/>
                                    {submitCount > 0 && errors.comment && (
                                        <div className="text-base text-red-500 mt-2">{errors.comment}</div>
                                    )}
                                </label>
                                <MainButton type="submit" disabled={isSubmitting}>
                                    Отправить
                                </MainButton>
                            </Form>
                        )}
                    </Formik>
                }
                {
                    !isLoginUser
                    &&
                    <div className="flex flex-col items-center mt-5 gap-2">
                        <BaseText>
                            Авторизуйтесь чтобы писать комментарии
                        </BaseText>
                        <LinkAsButton href="/login">
                            Авторизироваться
                        </LinkAsButton>
                    </div>
                }
                <div className="mt-5 flex justify-center">
                    <CardComment username="user" avatar={defaultAvatar} createAt={formattedDate} comment="Привет!"/>
                </div>
            </div>
        </main>
    )
}