import React, { useContext } from "react";
import Todo from "../components/Todo/Todo";
import Sidebar from "../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
function Home() {
    let location = useLocation();

    return (
        <div className="w-full min-h-screen h-full flex position: relative">
            <div className="w-auto position: absolute z-20">
                <Sidebar className="" />
            </div>
            <div className="w-full flex items-center justify-center z-10">
                <Todo className="" />
            </div>
        </div>
    );
}

export default Home;
