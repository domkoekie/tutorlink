import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="containerWrap flex justify-between">
                <button className="btn btn-ghost text-xl" onClick={() => navigate("/")}>Tutorlink</button>
                <div className=" flex justify-end gap-4">
                    <button className="btn btn-ghost-accent" onClick={() => navigate("/student-dashboard")}>TEST Student Dashboard</button>
                    <button className="btn btn-ghost-accent" onClick={() => navigate("/tutor-dashboard")}> TEST Tutor Dashboard</button>
                </div>
            </div>
        </div>
    );
};
export default Navbar;