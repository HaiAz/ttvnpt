import React from "react";
import "./Loader.css";
function Loader() {
    return (
        <div className="loader-body h-screen w-full">
            <div className="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default Loader;
