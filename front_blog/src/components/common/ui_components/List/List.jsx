import {TitleBlock} from "@ui/Text/Text.jsx";
import {LinkMain} from "@ui/Link/Link.jsx";

export const ListFooter = ({title, array}) => {
    return (
        <div>
            <TitleBlock>
                {title}
            </TitleBlock>
            <ul className="list-none mt-6 inline-flex flex-col gap-y-3.5">
                {array instanceof Array && array.map((item, index) => {
                    return (
                        <li key={index} className="flex">
                            <LinkMain href={item.url}>{item.name}</LinkMain>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}