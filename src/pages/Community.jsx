import React, { useContext } from "react";
import Todo from "../components/Todo/Todo";
import Sidebar from "../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
function Community() {
    let location = useLocation();

    return (
        <div className="w-full h-screen flex ">
            <div className="w-auto">
                <Sidebar className="" />
            </div>
            <div className="flex items-center flex-grow justify-center bg-slate-400">
                <Todo className="" />
            </div>
        </div>
    );
}

export default Community;
