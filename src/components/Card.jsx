import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`card shadow-sm p-3 mb-3 bg-white rounded ${className}`}>
      {children}
    </div>
  );
};

export default Card;


