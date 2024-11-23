import {ButtonBackgroundBlue} from "@ui/Button/Button.jsx";
import {useState} from "react";
import {Options} from "@ui/Options/Options.jsx";

export const Select = ({title}) => {
    const [isHiddenOptions, setIsHiddenOptions] = useState(true);
    const [option, setOption] = useState(title);

    const openOptions = (e) => {
        e.preventDefault();
        setIsHiddenOptions(!isHiddenOptions);
    };

    const changeOption = (e) => {
        setOption(`${e.target.textContent}`);
        setIsHiddenOptions(true);
    }

    const optionsTitle = ["По категории", "По дате", "По просмотрам", "По тегам", "По лайкам"];

    return (
        <div className="relative">
            <ButtonBackgroundBlue onClick={openOptions} typeSelect={true} className={isHiddenOptions ? 'rotate-0' : 'rotate-180'}>
                {option}
            </ButtonBackgroundBlue>
            <Options isHidden={isHiddenOptions} options={optionsTitle} onClick={changeOption}/>
        </div>
    );
};