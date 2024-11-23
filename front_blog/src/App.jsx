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

function App() {
    const isLoginUser = true;

  return (
      <>
        <BrowserRouter future={{v7_relativeSplatPath: true,}}>
            <Routes>
                <Route path="*" element={<Error404/>} />
                <Route path="/" element={<Home isLoginUser={isLoginUser} title="Блог TechWorld!"/>} />
                <Route path="/category" element={<Category isLoginUser={isLoginUser} title="Категории"/>} />
                <Route path="/search" element={<Search isLoginUser={isLoginUser} title="Результаты поиска"/>} />
                <Route path="/contact" element={<Contact isLoginUser={isLoginUser} title="Контакты"/>} />
                <Route path="/signup" element={<SignUp isLoginUser={isLoginUser} title="Регистрация"/>} />
                <Route path="/login" element={<Login isLoginUser={isLoginUser} title="Войти"/>} />
                <Route path="/about" element={<About isLoginUser={isLoginUser} title="О нас"/>} />
                <Route path="/profile" element={<Profile isLoginUser={isLoginUser} title="Профиль"/>} />
            </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
