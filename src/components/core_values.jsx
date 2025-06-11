import React from "react";
import JsonData from "../data/data.json";
import "../components/core_values.css"; // Assuming you have a CSS file for styling

const CoreValues = () => {
  const data = JsonData["Core-Values"];

  return (
    <section id="about" className="about-section">
      <div className="overlay"></div>
      <div className="container content">
        <h4 className="section-heading text-center">{data.heading}</h4>
        <h2 className="section-title text-center">{data.title}</h2>

        <div className="row justify-content-center">
          <div className="col-md-10 offset-md-1">
            <ul className="custom-list">
              {data.values.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>

            <h5 className="mt-4">{data.commitment.title}</h5>
            <ul className="custom-list">
              {data.commitment.weProvide.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <p className="highlight-text mt-4">
              <strong>{data.commitment.highlight}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
