// import React, { useState } from "react";
// import careerData from "../data/data.json";
// import "../components/career.css";

// const Career = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filterPositions = (positions) => {
//     return positions.filter((pos) =>
//       pos.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   };

//   return (
//     <div className="career-container">
//       <div className="career-header text-center">
//         <h1>{careerData.Career.title}</h1>
//         <p className="career-intro">{careerData.Career.intro}</p>
//       </div>

//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search for a position (e.g., Mathematics, Clerk)..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       <div className="career-section">
//         <h2>Teaching Positions</h2>
//         <ul>
//           {filterPositions(careerData.Career.openings.teaching).map(
//             (position, index) => (
//               <li key={index}>{position}</li>
//             )
//           )}
//         </ul>

//         <h2>Non-Teaching Positions</h2>
//         <ul>
//           {filterPositions(careerData.Career.openings.nonTeaching).map(
//             (position, index) => (
//               <li key={index}>{position}</li>
//             )
//           )}
//         </ul>
//       </div>

//       <div className="career-section">
//         <h2>General Requirements</h2>
//         {careerData.Career.requirements.map((req, index) => (
//           <div key={index} className="career-requirement">
//             <h4>{req.title}</h4>
//             <ul>
//               {req.details.map((detail, i) => (
//                 <li key={i}>{detail}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>

//       <div className="career-apply">
//         <h2>How to Apply</h2>
//         <p>{careerData.Career.application.instructions}</p>
//         <ul>
//           <li>Email: <a href={`mailto:${careerData.Career.application.email}`}>{careerData.Career.application.email}</a></li>
//           <li>Address: {careerData.Career.application.address}</li>
//         </ul>
//       </div>

//       <div className="career-reasons">
//         <h2>Why Join Us?</h2>
//         <ul>
//           {careerData.Career.whyJoin.map((reason, index) => (
//             <li key={index}>{reason}</li>
//           ))}
//         </ul>
//       </div>

//       <div className="career-quote">
//         <blockquote>“{careerData.Career.quote}”</blockquote>
//       </div>
//     </div>
//   );
// };

// export default Career;

import React from "react";
import careerData from "../data/data.json";
import "../components/career.css"; // Create this file for styling

const Career = () => {
  const { title, intro, sections, closingNote } = careerData.CareerDetails;

  return (
    <div className="career-container">
      <div className="career-header text-center">
        <h1 className="career-title">{title}</h1>
        <p className="career-intro">{intro}</p>
      </div>

      {sections.map((section, index) => (
        <div key={index} className="career-section">
          <h2 className="section-heading">{section.heading}</h2>
          {section.description && <p className="section-description">{section.description}</p>}

          {section.subsections && section.subsections.map((sub, subIndex) => (
            <div key={subIndex} className="career-subsection">
              <h4 className="subsection-title">{sub.title}</h4>
              <ul className="subsection-items">
                {sub.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          {section.contacts && (
            <div className="career-contact">
              <p><strong>Email:</strong> {section.contacts.email}</p>
              <p><strong>Address:</strong> {section.contacts.address}</p>
              <p><em>{section.contacts.note}</em></p>
            </div>
          )}

          {section.items && (
            <ul className="section-items">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div className="career-closing-note text-center">
        <blockquote>{closingNote}</blockquote>
      </div>
    </div>
  );
};

export default Career;
