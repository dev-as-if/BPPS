// import React, { useEffect, useState } from "react";
// import Header from "../components/header";
// import About from "../components/about";
// import Contact from "../components/contact";
// import JsonData from "../data/data.json";

// const Home = () => {
//   const [landingPageData, setLandingPageData] = useState({});

//   useEffect(() => {
//     setLandingPageData(JsonData);
//   }, []);

//   useEffect(() => {
//     const titleElement = document.querySelector(".intro-text h2");
//     if (titleElement) {
//       const text = "Book & Pen Public School";
//       let index = 0;
//       const typeWriter = () => {
//         if (index < text.length) {
//           titleElement.innerHTML += text.charAt(index);
//           index++;
//           setTimeout(typeWriter, 100); // Adjust speed here
//         }
//       };
//       typeWriter();
//     }
//   }, []);

//   return (
//     <div>
//       <Header data={landingPageData.Header} />
//       <About data={landingPageData.About} />
//       <Contact data={landingPageData.Contact} />
//     </div>
//   );
// };

// export default Home;

// -----------------------------------------------------------------


// import React, { useEffect, useState } from "react";
// import Header from "../components/header";
// import About from "../components/about";
// import Contact from "../components/contact";
// import JsonData from "../data/data.json";

// const Home = () => {
//   const [landingPageData, setLandingPageData] = useState({});
//   // const [line1, setLine1] = useState("");
//   // const [line2, setLine2] = useState("");

//   useEffect(() => {
//     setLandingPageData(JsonData);
//   }, []);

  

//   return (
//     <div>
//       <div className="typewriter-box">
//         <h2>{line1}</h2>
//         <h4>{line2}</h4>
//       </div>

//       <Header data={landingPageData.Header} />
//       <About data={landingPageData.About} />
//       <Contact data={landingPageData.Contact} />
//     </div>
//   );
// };

// export default Home;

// -----------------------------------------------------------------

import React, { useEffect, useState } from "react";
import Header from "../components/header";
import About from "../components/about";
import Contact from "../components/contact";
import JsonData from "../data/data.json";

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  // const [displayText, setDisplayText] = useState("Book & Pen Public School");
  const texts = ["Book & Pen Public School", "From Pen to Progress"];
  let index = 0;

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  useEffect(() => {
    const titleElement = document.querySelector(".intro-text h2");
    if (titleElement) {
      const typeWriter = () => {
        titleElement.innerHTML = ""; // Clear previous text
        const text = texts[index];
        let charIndex = 0;

        const writeText = () => {
          if (charIndex < text.length) {
            titleElement.innerHTML += text.charAt(charIndex);
            charIndex++;
            setTimeout(writeText, 100); // Adjust speed here
          } else {
            setTimeout(() => {
              // eslint-disable-next-line react-hooks/exhaustive-deps
              index = (index + 1) % texts.length; // Cycle through texts
              typeWriter();
            }, 2000); // Pause before starting next text
          }
        };
        writeText();
      };
      typeWriter();
    }
  }, []);

  return (
    <div>
      <Header data={landingPageData.Header} />
      <div className="intro-text" style={{ position: 'absolute', top: '10%', left: '5%', zIndex: 1 }}>
        <h2> </h2>
      </div>
      <About data={landingPageData.About} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default Home;

