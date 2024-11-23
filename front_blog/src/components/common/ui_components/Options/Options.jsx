export const Options = ({ isHidden, options, onClick }) => {

    return (
        <div className={`w-full overflow-hidden bg-main-gray text-black rounded-lg absolute top-14 left-0 transition-max-height duration-700 ease-in-out ${isHidden ? 'max-h-0 p-0' : 'max-h-[210px] py-3 '}`}>
            {options.map((item, index) => {
                return <button key={index} onClick={onClick}  className="cursor-pointer w-full text-left px-3 py-1 hover:bg-main-dark-gray duration-300">{item}</button>
            })}
        </div>
    );
}