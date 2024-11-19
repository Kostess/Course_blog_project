import { ButtonBackgroundBlue } from "@ui/Button/Button.jsx";

export const FormFilter = () => {

    const filters = [1, 2, 3, 4, 5,]

    const onClick = (e) => {
        e.preventDefault()
        alert('фильтр')
    }

    return (
        <form className="flex gap-4">
            {filters.map((filter, index) => {
                return <ButtonBackgroundBlue key={index} onClick={onClick}>фильтр {index + 1}</ButtonBackgroundBlue>
            })}
        </form>
    )
}