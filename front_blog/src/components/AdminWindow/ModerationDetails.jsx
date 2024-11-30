import {MainButton} from "@ui/Button/Button.jsx";

export const ModerationDetails = ({post, onAction}) => {
    return (
        <div className="w-2/3 pl-4">
            <h2 className="text-xl font-bold mb-4">{post.title}</h2>
            <img src={post.cover} alt={post.title} className="mb-4" />
            <div dangerouslySetInnerHTML={{__html: post.content}} />
            <div className="mt-4">
                <MainButton onClick={() => onAction("accept")} className="mr-2">
                    Принять
                </MainButton>
                <MainButton onClick={() => onAction("reject")}>
                    Отклонить
                </MainButton>
            </div>
        </div>
    );
};