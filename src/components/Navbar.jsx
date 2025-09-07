import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="containerWrap">
                <button className="btn btn-ghost text-xl" onClick={() => navigate("/")}>Tutorlink</button>
                <button className="btn btn-ghost" onClick={() => navigate("/")}>Logout</button>
            </div>
        </div>
    );
};
export default Navbar;