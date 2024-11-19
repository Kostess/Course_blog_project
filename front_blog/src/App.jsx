import {Route, Routes, BrowserRouter} from "react-router-dom";
import {Home} from "@pages/Home/Home.jsx";
import {Category} from "@pages/Category/Category.jsx";
import {Error404} from "@pages/Error404/Error404.jsx";
function App() {
    const isLoginUser = false;

  return (
      <>
        <BrowserRouter future={{v7_relativeSplatPath: true,}}>
            <Routes>
                <Route path="*" element={<Error404/>} />
                <Route path="/" element={<Home isLoginUser={isLoginUser} title="Блог TechWorld!"/>} />
                <Route path="/category" element={<Category isLoginUser={isLoginUser}/>} />
            </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
