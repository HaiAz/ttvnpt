import React from "react";
import "./Sidebar.css";
import logo from "../../Img/Black-Panther-Emblem.png";
import { FaHome, FaHandsHelping } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { BsFillBarChartFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { MdFeedback } from "react-icons/md";

function Sidebar() {
    return (
        <div className="sidebar h-full">
            <div className="logo">
                <img src={logo} alt={"logo"} className="logo-img" />
                <span>Lê Đức Hải</span>
            </div>
            <div className="nav">
                <div className="nav-title">Management</div>
                <div className="nav-management">
                    <div className="nav-item active">
                        <FaHome className="nav-icon" />
                        <span>Home</span>
                    </div>
                    <div className="nav-item">
                        <IoIosPeople className="nav-icon" />
                        <span>Community</span>
                    </div>
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
