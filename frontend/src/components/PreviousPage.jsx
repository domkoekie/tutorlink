import React from "react";
import { useNavigate } from "react-router-dom";

const PreviousPage = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/"); 
    }
  };

  return (
    <button
      className={`btn btn-secondary-ghost ${className}`}
      onClick={handleClick}
    >
      ← Back
    </button>
  );
};

export default PreviousPage;
