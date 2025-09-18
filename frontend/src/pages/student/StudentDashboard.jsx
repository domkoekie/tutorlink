import React from "react";
import { useNavigate } from "react-router-dom";

const StudentDB = () => {
    const navigate = useNavigate();

    return (
        <div>
            <p>StudentDB</p>
            <button className="btn btn-primary" onClick={() => navigate("/student-profile")}>
                Profile
            </button>
            <button className="btn btn-primary" onClick={() => navigate("/student-sessions")}>
                Sessions
            </button>
        </div>
    );
};

export default StudentDB;
