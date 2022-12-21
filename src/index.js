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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<App />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
