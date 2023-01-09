import React, { useState, createContext } from "react";
import "./Sidebar.css";
import logo from "../../Img/Black-Panther-Emblem.png";
import { FaHome, FaHandsHelping } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { BsFillBarChartFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiFillSetting, AiOutlineArrowRight } from "react-icons/ai";
import { MdFeedback } from "react-icons/md";
import { useLocation, Link } from "react-router-dom";
import Todo from "./../Todo/Todo";

function Sidebar() {
    const [open, setOpen] = useState(true);

    const openClick = () => {
        setOpen(!open);
    };
    let location = useLocation();
    return (
        <div className={open ? "sidebar open h-full" : "sidebar h-full"}>
            <div className="toggle" onClick={openClick}>
                <AiOutlineArrowRight className="toggle-icon" />
            </div>
            <div className="logo">
                <img src={logo} alt={"logo"} className="logo-img" />
                <span>Lê Đức Hải</span>
            </div>
            <div className="nav">
                <div className="nav-title">Management</div>
                <div className="nav-management">
                    <Link
                        to="/home"
                        className={location.pathname === "/home" ? "nav-item active" : "nav-item"}
                    >
                        <FaHome className="nav-icon" />
                        <span>Home</span>
                    </Link>
                    <Link
                        to="/community"
                        className={
                            location.pathname === "/community" ? "nav-item active" : "nav-item"
                        }
                    >
                        <IoIosPeople className="nav-icon" />
                        <span>Community</span>
                    </Link>
                    <div className="nav-item">
                        <BsFillBarChartFill className="nav-icon" />
                        <span>Analytics</span>
                    </div>
                    <div className="nav-item">
                        <AiFillSetting className="nav-icon" />
                        <span>Setting</span>
                    </div>
                </div>
                <div className="line"></div>
                <div className="nav-support">Support</div>

                <div className="nav-management">
                    <div className="nav-item">
                        <FaHandsHelping className="nav-icon" />
                        <span>Get Help</span>
                    </div>
                    <div className="nav-item">
                        <MdFeedback className="nav-icon" />
                        <span>Send Feedback</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
