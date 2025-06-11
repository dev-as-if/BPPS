import React from "react";
import JsonData from "../data/data.json";
import "../components/methodology.css"; 

const Methodology = () => {
  const data = JsonData.Methodology;

  return (
    <section id="methodology" className="about-section">
      <div className="container text-center content">
        <h4 className="section-heading">{data.heading}</h4>
        <h2 className="section-title">{data.title}</h2>
        <p className="section-intro text-white">{data.introduction}</p>

        <div className="row mt-5">
          {data.features.map((feature, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="methodology-card h-100">
                <div className="card-body">
                  <h5 className="card-title">{feature.title}</h5>
                  <p className="card-text">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <blockquote className="blockquote mt-5">
          <p className="mb-0 font-italic highlight-text">“{data.quote}”</p>
        </blockquote>
      </div>
    </section>
  );
};

export default Methodology;
