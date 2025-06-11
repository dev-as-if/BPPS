import React, { useEffect, useRef, useState } from "react";
import Header from "../components/header";
import Contact from "../components/contact";
import JsonData from "../data/data.json";

const texts = ["Book & Pen Public School", "From Pen to Progress"];

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const indexRef = useRef(0);
  const typewriterIntervalRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    setLandingPageData(JsonData);

    // Listen for window resize to adjust spacing dynamically
    const handleResize = () => setIsLargeScreen(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setLandingPageData(JsonData);
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
          }, 2000); // 2 seconds delay before starting the next text
        }
      };

      writeText();
    };

    typeWriter();

    return () => clearTimeout(typewriterIntervalRef.current); // Cleanup on unmount
  }, []);

  return (
    <div>
      {/* === Fullscreen Carousel Section === */}
      <div className="carousel-container">
        <div
          id="schoolCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="2000" // Set carousel interval to 2 seconds
        >
          <div className="carousel-inner">
            {landingPageData?.Header?.carouselImages?.map((img, i) => (
              <div
                className={`carousel-item ${i === 0 ? "active" : ""}`}
                key={i}
              >
                <img
                  src={`/${img}`}
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
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#schoolCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* === Typewriter Text Over Carousel === */}
        <div className="typewriter-container">
          <h2
            className="typewriter-text"
            aria-label={texts[indexRef.current]}
          > </h2>
        </div>
      </div>

      {/* === Main Site Content === */}
       {/* 🔹 Add margin-top only for large screens */}
      <div style={{ marginTop: isLargeScreen ? "20rem" : "0" }}>
        <Header data={landingPageData.Header} />
      </div>
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default Home;