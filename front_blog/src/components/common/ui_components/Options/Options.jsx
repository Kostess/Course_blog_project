export const Options = ({ isHidden }) => {
    const optionsTitle = ["По категории", "По дате", "По просмотрам", "По тегам", "По лайкам"];

    return (
        <ul className={`list-none w-full overflow-hidden bg-main-gray text-black rounded-lg absolute top-14 left-0 transition-max-height duration-700 ease-in-out ${isHidden ? 'max-h-0 p-0' : 'max-h-[210px] py-3 '}`}>
            {optionsTitle.map((item, index) => {
                return <li key={index} className="cursor-pointer px-3 py-1 hover:bg-main-dark-gray duration-300">{item}</li>
            })}
        </ul>
    );
}