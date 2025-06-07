// import React, { useState, useEffect } from "react";
// import { Navigation } from "./components/navigation";
// import { Header } from "./components/header";
// import { Features } from "./components/features";
// import { About } from "./components/about";
// import { Services } from "./components/services";
// import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
// import { Contact } from "./components/contact";
// import { Placement } from "./components/placement";
// import JsonData from "./data/data.json";
// import SmoothScroll from "smooth-scroll";
// import "./App.css";
// import { Training } from "./components/training";

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

// const App = () => {
//   const [landingPageData, setLandingPageData] = useState({});
//   useEffect(() => {
//     setLandingPageData(JsonData);
//   }, []);

//   return (
//     <div>
//       <Navigation />
//       <Header data={landingPageData.Header} />
//       <Features data={landingPageData.Features} />
//       <About data={landingPageData.About} />
//       <Services data={landingPageData.Services} />
//       <Gallery data={landingPageData.Gallery} />
//       <Training data={landingPageData.trainingVideos} />
//       <Placement data={landingPageData.Placement} />
//       <Testimonials data={landingPageData.Testimonials} />
//       <Team data={landingPageData.Team} />
//       <Contact data={landingPageData.Contact} />
//     </div>
//   );
// };

// export default App;


import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation  from "./components/navigation";
import Home from "./pages/home";
import About from "./components/about";
import Contact from "./components/contact";
import Features from "./components/features";
import Gallery from "./components/gallery";
import Services from "./components/services";
import Placement from "./components/placement";
import Team from "./components/Team";
import Testimonials from "./components/testimonials";
import Training from "./components/training";
import JsonData from "./data/data.json";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About data={landingPageData.About} />} />
        <Route path="/features" element={<Features data={landingPageData.Features} />} />
        <Route path="/services" element={<Services data={landingPageData.Services} />} />
        <Route path="/portfolio" element={<Gallery data={landingPageData.Gallery} />} />
        <Route path="/team" element={<Team data={landingPageData.Team} />} />
        <Route path="/testimonials" element={<Testimonials data={landingPageData.Testimonials} />} />
        <Route path="/placement" element={<Placement data={landingPageData.Placement} />} />
        <Route path="/training" element={<Training data={landingPageData.Training} />} />
        <Route path="/contact" element={<Contact data={landingPageData.Contact} />} />
      </Routes>
    </Router>
  );
};

export default App;
