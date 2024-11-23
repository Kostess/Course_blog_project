import {ButtonProfile} from "@ui/Button/Button.jsx";
import {useState} from "react";

export const DropdownLinks = ({options}) => {
    const [isHiddenOptions, setIsHiddenOptions] = useState(true);
    const openOptions = (e) => {
        e.preventDefault();
        setIsHiddenOptions(!isHiddenOptions);
    };

    return (
        <div className="relative">
            <ButtonProfile onClick={openOptions} widthClassName="w-10" heightClassName="h-10"/>
            <div
                className={`w-24 overflow-hidden bg-main-gray text-black rounded-lg absolute top-12 -left-8 transition-max-height duration-700 ease-in-out ${isHiddenOptions ? 'max-h-0 p-0' : 'max-h-[210px] py-3 '}`}>
                {options.map((item, index) => {
                    return <a key={index} href={item.href || "#"}
                                   className="block px-3 py-1 hover:bg-main-dark-gray duration-300">{item.title || "ссылка"}</a>
                })}
            </div>
        </div>
    )
}