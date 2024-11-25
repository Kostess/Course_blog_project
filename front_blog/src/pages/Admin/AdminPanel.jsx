import {useEffect} from "react";
import {HeaderAdmin} from "@layouts/Header/HeaderAdmin.jsx";
import {NavAdmin} from "@layouts/Nav/NavAdmin.jsx";
import {MainAdmin} from "@layouts/Main/MainAdmin.jsx";

export const AdminPanel = ({title}) => {

    useEffect(() => {
        document.title = title || "TechWorld!"
    }, [title])

    return (
        <>
            <HeaderAdmin title={title || "TechWorld!"}/>
            <div className="flex bg-main-blue">
                <NavAdmin/>
                <MainAdmin/>
            </div>
        </>
    )
}