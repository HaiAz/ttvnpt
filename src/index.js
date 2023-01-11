import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/Signup";
import Home from "./pages/Home";
import Community from "./pages/Community";
import GetHelp from "./pages/GetHelp";
import Analytic from "./pages/Analytics";
import Setting from "./pages/Setting";
import Feedback from "./pages/Feedback";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/community" element={<Community />} />
                <Route path="/help" element={<GetHelp />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/analytics" element={<Analytic />} />
                <Route path="/setting" element={<Setting />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
