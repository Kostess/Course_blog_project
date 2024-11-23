import defaultAvatar from '@assets/default-avatar.png';

export const Button = ({children, ...props}) => {
    return (
        <button {...props} className="rounded-tr-lg rounded-br-lg bg-main-green hover:bg-main-dark-green duration-300 p-3">
            {children}
        </button>
    )
}

export const MainButton= ({children, ...props}) => {
    return (
        <button {...props} className="rounded-lg bg-main-green hover:bg-main-dark-green duration-300 p-3">
            {children}
        </button>
    )
}

export const ButtonBackgroundBlue = ({ children, typeSelect, className, ...props }) => {
    return (
        <button
            {...props}
            className="rounded-lg bg-main-blue hover:bg-main-light-blue duration-300 px-6 py-3 w-full flex items-center justify-between"
        >
            {children}
            {typeSelect && (
                <span className={`transform transition-transform duration-300 ${className}`}>▼</span>
            )}
        </button>
    );
};

export const ButtonProfile = ({ avatar, widthClassName, heightClassName, ...props }) => {
    const backgroundImage = avatar ? `url(${avatar})` : `url(${defaultAvatar})`;

    return (
        <div
            {...props}
            className={`cursor-pointer rounded-full border border-solid border-main-green ${widthClassName} ${heightClassName}`}
            style={{ backgroundImage: backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
        </div>
    );
};