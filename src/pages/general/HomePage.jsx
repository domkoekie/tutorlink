import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/images/brian-jones-xLBNRz5Fy78-unsplash.jpg";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgImage})` }}>

                <div className="hero-overlay backdrop-blur"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">

                        <h1 className="mb-5 text-7xl font-bold">Welcome to Tutor Link!</h1>
                        <p className="mb-5">
                            Tutor Link aims to create an online platform that connects students with qualified tutors in various academic subjects.
                        </p>

                        <div className="flex flex-col items-center gap-4 mt-6">
                            <button className="btn btn-primary w-40" onClick={() => navigate("/login")}>
                                Login
                            </button>
                            <button className="btn btn-primary w-40" onClick={() => navigate("/signup")}>
                                Sign Up
                            </button>
                        </div>

                        <div className="flex flex-col items-center mt-20">
                            <button className="btn btn-secondary-ghost w-40" onClick={() => navigate("/about")}>
                                About Us
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
