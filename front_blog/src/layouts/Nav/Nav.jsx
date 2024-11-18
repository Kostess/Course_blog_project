import {LinkMenu} from "@ui/Link/Link.jsx";

export const Nav = () => {
    const menu = [
        {name: 'Главная', link: '/'},
        {name: 'Категории', link: '/category'},
        {name: 'Контакты', link: '/contact'},
        {name: 'О нас', link: '/about'},
    ]
    return (
        <nav>
            <ul className="flex gap-7">
                {menu.map((item, index) => {
                    return (
                        <li key={index}>
                            <LinkMenu href={item.link}>{item.name}</LinkMenu>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}