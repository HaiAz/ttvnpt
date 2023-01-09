import React, { useState, useEffect } from "react";
import "./index.css";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";
import Loader from "./components/Loader/Loader";
function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    }, []);

    return (
        <div className="App ">
            {loading ? <Loader /> : <Login />}
            {/* <Sidebar /> */}
        </div>
    );
}

export default App;
