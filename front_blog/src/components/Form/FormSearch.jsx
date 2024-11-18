import {Input} from "@ui/Input/Input.jsx";
import {Button} from "@ui/Button/Button.jsx";

export const FormSearch = () => {
    return (
        <div>
            <form>
                <Input type="search" placeholder="Поиск..."/>
                <Button>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.1629 12.1759L16.5 16.5M14 7.75C14 11.2017 11.2017 14 7.75 14C4.29822 14 1.5 11.2017 1.5 7.75C1.5 4.29822 4.29822 1.5 7.75 1.5C11.2017 1.5 14 4.29822 14 7.75Z"
                            stroke="white" strokeWidth="2.45333" strokeLinecap="round" strokeLinejoin="round"
                        />
                    </svg>
                </Button>
            </form>

        </div>
    )
}