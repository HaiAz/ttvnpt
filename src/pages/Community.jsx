import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
function Community() {
    const [data, setData] = useState([]);
    const API = "https://62a49575259aba8e10eb42f8.mockapi.io/omuji/api";
    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);
    console.log(data);

    const deleteBtn = async () => {};
    return (
        <div className="w-full min-h-screen h-full flex flex-col position: relative pt-10 bg-slate-400">
            <div>
                <div>
                    Name
                    <input type="text" className="mt-4" id="Name" />
                </div>
                <div>
                    Password
                    <input type="text" className="mt-4" id="Age" />
                </div>
                <div>
                    UserName
                    <input type="text" className="mt-4" id="UserName" />
                </div>
                <div>
                    <button className="px-4 py-4 bg-red-400 ml-4">ADD</button>
                </div>
            </div>
            {data.map((e) => {
                return (
                    <div key={e.id} className="bg-orange-200 mt-4">
                        <p>{e.name}</p>
                        <p>{e.username}</p>
                        <p>{e.password}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Community;
