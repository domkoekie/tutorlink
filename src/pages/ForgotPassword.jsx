import React from "react";

const ForgotPassword = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Forgot Password?</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" />
                                <label className="label">New Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <button className="btn btn-primary mt-4">Reset Password</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ForgotPassword;