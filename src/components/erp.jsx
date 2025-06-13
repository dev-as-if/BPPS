import React from "react";
import "../components/erp.css"; // Import the CSS file for styling

const Erp = () => {
  return (
    <div className="erp-container">
      <div className="erp-content">
        <h1 className="erp-title">ERP System</h1>
        <p className="erp-message">This section is currently under development.</p>
        <img
          src={`${process.env.PUBLIC_URL}/assets/under-development.gif`}
          alt="Under Development"
          className="erp-gif"
        />
        <p className="erp-subtext">Please check back soon for updates.</p>
      </div>
    </div>
  );
};

export default Erp;
