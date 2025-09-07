import React from "react";
import { useNavigate } from "react-router-dom";

const TutorDB = () => {
    const navigate = useNavigate();

    return (
        <div>
            <p>TutorDB</p>
            <button className="btn btn-primary" onClick={() => navigate("/tutor-profile")}>
                Profile
            </button>
            <button className="btn btn-primary" onClick={() => navigate("/tutor-sessions")}>
                Sessions
            </button>
        </div>
    );
};

export default TutorDB;
