import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
function GetHelp() {
    return (
        <div className="w-full min-h-screen h-full flex position: relative">
            <div className="w-auto position: absolute z-20">
                <Sidebar className="" />
            </div>
        </div>
    );
}

export default GetHelp;
