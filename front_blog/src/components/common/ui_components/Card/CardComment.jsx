import {ButtonProfile} from "@ui/Button/Button.jsx";

export const CardComment = ({username, createAt, avatar, comment}) => {

    return (
        <div className="bg-main-blue rounded-lg px-3.5 py-2.5 text-white max-w-96 w-full">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <ButtonProfile avatar={avatar} widthClassName="w-12" heightClassName="h-12"/>
                    <p className="text-base font-bold">
                        {username}
                    </p>
                </div>

                <div>
                    {createAt}
                </div>
            </div>
            <div className="mt-2">
                <p>
                    {comment}
                </p>
            </div>
        </div>
    )
};