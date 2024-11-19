import {ButtonBackgroundBlue} from "@ui/Button/Button.jsx";
import {useState} from "react";
import {Options} from "@ui/Options/Options.jsx";

export const Select = ({title}) => {
    const [isHiddenOptions, setIsHiddenOptions] = useState(true);

    const onClick = (e) => {
        e.preventDefault()
        setIsHiddenOptions(!isHiddenOptions);
    }

    return (
        <div className="relative">
            <ButtonBackgroundBlue onClick={onClick}>{title}</ButtonBackgroundBlue>
            <Options isHidden={isHiddenOptions}/>
        </div>
    )
}