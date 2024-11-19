import {LinkMain} from "@ui/Link/Link.jsx";

export const Nav = ({isVertical = false}) => {
    const menu = [
        {name: 'Главная', link: '/'},
        {name: 'Категории', link: '/category'},
        {name: 'Контакты', link: '/contact'},
        {name: 'О нас', link: '/about'},
    ]
    return (
        <nav>
            <ul className={`inline-flex ${isVertical ? 'flex-col gap-3' : 'flex-row gap-7'}`}>
                {menu.map((item, index) => {
                    return (
                        <li key={index} className="flex">
                            <LinkMain href={item.link}>{item.name}</LinkMain>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}