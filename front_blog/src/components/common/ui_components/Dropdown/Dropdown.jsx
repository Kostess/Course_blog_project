import {ButtonProfile} from "@ui/Button/Button.jsx";
import {useState} from "react";
import {useAuth} from "@utils/useAuth.jsx";

export const DropdownProfile = ({logout}) => {
    const { isAdmin } = useAuth();
    const [isHiddenOptions, setIsHiddenOptions] = useState(true);
    const openOptions = () => {
        setIsHiddenOptions(!isHiddenOptions);
    };

    return (
        <div className="relative">
            <ButtonProfile onClick={openOptions} widthClassName="w-10" heightClassName="h-10"/>
            <div
                className={`w-24 overflow-hidden bg-main-gray text-black rounded-lg absolute top-12 -left-8 transition-max-height duration-700 ease-in-out ${isHiddenOptions ? 'max-h-0 p-0' : 'max-h-[210px] py-3 '}`}>
                <a href="/profile"
                   className="block text-center px-3 py-1 hover:bg-main-dark-gray duration-300">Профиль</a>
                {
                    isAdmin
                    &&
                    <a className="block text-center px-3 py-1 hover:bg-main-dark-gray duration-300" href="/admin">
                        Админ
                    </a>
                }
                <button onClick={logout} className="block w-full px-3 py-1 hover:bg-main-dark-gray duration-300">
                    Выйти
                </button>
            </div>
        </div>
    )
}