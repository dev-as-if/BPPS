import React, { useEffect, useRef, useState } from "react";
import Header from "../components/header";
import Contact from "../components/contact";
import JsonData from "../data/data.json";
// import Navigation from "../components/navigation";

const texts = ["Book & Pen Public School", "From Pen to Progress"];

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const indexRef = useRef(0);
  const typewriterIntervalRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    setLandingPageData(JsonData);

    const handleResize = () => setIsLargeScreen(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const titleElement = document.querySelector(".typewriter-text");
    if (!titleElement) return;

    const typeWriter = () => {
      titleElement.innerHTML = "";
      const text = texts[indexRef.current];
      let charIndex = 0;

      const writeText = () => {
        if (charIndex < text.length) {
          titleElement.innerHTML += text.charAt(charIndex);
          charIndex++;
          setTimeout(writeText, 100);
        } else {
          clearTimeout(typewriterIntervalRef.current);
          typewriterIntervalRef.current = setTimeout(() => {
            indexRef.current = (indexRef.current + 1) % texts.length;
            typeWriter();
          }, 2000);
        }
      };

      writeText();
    };

    typeWriter();
    return () => clearTimeout(typewriterIntervalRef.current);
  }, []);

  return (
    <div>
      {/* <Navigation /> */}
      <div className="carousel-container">
        <div
          id="schoolCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-inner">
            {landingPageData?.Header?.carouselImages?.map((img, i) => (
              <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
                <img
                  src={`${process.env.PUBLIC_URL}/${img}`} // ✅ This fixes GitHub Pages issue
                  className="d-block w-100 carousel-img"
                  alt={`slide-${i + 1}`}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#schoolCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#schoolCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="typewriter-container">
          <h2 className="typewriter-text" aria-label={texts[indexRef.current]}> </h2>
        </div>
      </div>

      <div className="fade-in" style={{ marginTop: isLargeScreen ? "20rem" : "0" }}>
        <Header data={landingPageData.Header} />
      </div>
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default Home;
