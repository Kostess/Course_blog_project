import {Route, Routes, BrowserRouter} from "react-router-dom";
import {Home} from "@pages/Home/Home.jsx";
import {Category} from "@pages/Category/Category.jsx";
import {Error404} from "@pages/Error404/Error404.jsx";
import {Search} from "@pages/Search/Search.jsx";
import {Contact} from "@pages/Contact/Contact.jsx";
import {SignUp} from "@pages/SignUp/SignUp.jsx";
import {Login} from "@pages/Login/Login.jsx";
import {About} from "@pages/About/About.jsx";
import {Profile} from "@pages/Profile/Profile.jsx";
import {EditPost} from "@pages/EditPost/EditPost.jsx";
import {Post} from "@pages/Post/Post.jsx";
import {AdminPanel} from "@pages/Admin/AdminPanel.jsx";

function App() {
    const isLoginUser = true;
    const isAdmin = true;

    const post = {
        title: "PosgresSQL",
        author: "user",
        createdAt: new Date(),
        category: "tech",
        cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/116px-Postgresql_elephant.svg.png",
        content: "<p><br></p><h2><span style=\"font-size: 24px\">Что такоеPostgreSQL?</span></h2><p style=\"line-height: 1.5em;text-align: left\"><span style=\"font-size: 16px\"><strong>PostgreSQL</strong>— это объектно-реляционная система управления базами данных (ОРСУБД, ORDBMS), основанная на</span><a href=\"https://dsf.berkeley.edu/postgres.html\" target=\"_top\"><span style=\"font-size: 16px\">POSTGRES, Version 4.2</span></a><span style=\"font-size: 16px\">— программе, разработанной на факультете компьютерных наук Калифорнийского университета в Беркли. В POSTGRES появилось множество новшеств, которые были реализованы в некоторых коммерческих СУБД гораздо позднее.</span></p><p style=\"line-height: 1.5em;text-align: left\"><span style=\"font-size: 16px\"><strong>PostgreSQL</strong>— СУБД с открытым исходным кодом, основой которого был код, написанный в Беркли. Она поддерживает большую часть стандарта SQL и предлагает множество современных функций:</span></p><div><ul><li style=\"font-size: 16px\">сложные запросы</li><li style=\"font-size: 16px\">внешние ключи</li><li style=\"font-size: 16px\">триггеры</li><li style=\"font-size: 16px\">изменяемые представления</li><li style=\"font-size: 16px\">транзакционная целостность</li><li style=\"font-size: 16px\">многоверсионность</li></ul></div><p style=\"line-height: 1.5em;text-align: left\"><span style=\"font-size: 16px\">Кроме того, пользователи могут всячески расширять возможностиPostgreSQL, например создавая свои</span></p><div><ul><li style=\"font-size: 16px\">типы данных</li><li style=\"font-size: 16px\">функции</li><li style=\"font-size: 16px\">операторы</li><li style=\"font-size: 16px\">агрегатные функции</li><li style=\"font-size: 16px\">методы индексирования</li><li style=\"font-size: 16px\">процедурные языки</li></ul></div><p style=\"line-height: 1.5em;text-align: left\"><span style=\"font-size: 16px\">А благодаря свободной лицензии,PostgreSQLразрешается бесплатно использовать, изменять и распространять всем и для любых целей — личных, коммерческих или учебных.</span></p><p><span style=\"font-size: 24px\">​<br></span></p>",
        tags: "SQL, БД, CУБД, Разработка",
        likes: 0,
        comments: {},
    }

    const year = post.createdAt.getFullYear();
    const month = String(post.createdAt.getMonth() + 1).padStart(2, '0');
    const day = String(post.createdAt.getDate()).padStart(2, '0');

    post.createdAt = `${day}-${month}-${year}`;

  return (
      <>
        <BrowserRouter future={{v7_relativeSplatPath: true,}}>
            <Routes>
                <Route path="*" element={<Error404 isLoginUser={isLoginUser} title="Страница не найдена"/>} />
                <Route path="/" element={<Home isLoginUser={isLoginUser} title="Блог TechWorld!"/>} />
                <Route path="/category" element={<Category isLoginUser={isLoginUser} title="Категории"/>} />
                <Route path="/search" element={<Search isLoginUser={isLoginUser} title="Результаты поиска"/>} />
                <Route path="/contact" element={<Contact isLoginUser={isLoginUser} title="Контакты"/>} />
                <Route path="/signup" element={<SignUp isLoginUser={isLoginUser} title="Регистрация"/>} />
                <Route path="/login" element={<Login isLoginUser={isLoginUser} title="Войти"/>} />
                <Route path="/about" element={<About isLoginUser={isLoginUser} title="О нас"/>} />
                <Route path="/profile" element={<Profile isLoginUser={isLoginUser} title="Профиль"/>} />
                <Route path="/edit-post" element={<EditPost isLoginUser={isLoginUser} title="Редактор поста"/>} />
                <Route path="/post" element={<Post isLoginUser={isLoginUser} title={post.title} post={post}/>} />
                {
                    isAdmin
                    &&
                    <Route path="/admin" element={<AdminPanel title="Админ панель"/>} />
                }

            </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
