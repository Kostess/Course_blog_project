import {useEffect, useState} from "react";
import {HeaderAdmin} from "@layouts/Header/HeaderAdmin.jsx";
import {NavAdmin} from "@layouts/Nav/NavAdmin.jsx";
import {MainAdmin} from "@layouts/Main/MainAdmin.jsx";

export const AdminPanel = ({title}) => {
    const [windowMain, setWindowMain] = useState("statistic");

    useEffect(() => {
        document.title = title || "TechWorld!"
    }, [title])

    const changeWindowMain = (window) => {
        setWindowMain(window);
    }

    return (
        <>
            <HeaderAdmin title={title || "TechWorld!"}/>
            <div className="flex bg-main-blue">
                <NavAdmin changeWindowMain={changeWindowMain}/>
                <MainAdmin windowMain={windowMain}/>
            </div>
        </>
    )
}