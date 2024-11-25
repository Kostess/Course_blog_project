export const Input = (props) => {
    return (
        <input {...props} className="w-full bg-main-blue px-4 py-2.5 rounded-tl-lg rounded-bl-lg outline-0"/>
    )
}

export const Textarea = ({children, ...props}) => {
    return (
        <textarea {...props} rows="10" className="w-full bg-main-blue px-4 py-2.5 rounded-tl-lg rounded-bl-lg outline-0">
            {children}
        </textarea>
    )
}