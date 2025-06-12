// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Navigation from "./components/navigation";
// import Splash from "./components/Splash";
// import Home from "./pages/home";
// import About from "./components/about";
// import Contact from "./components/contact";
// import Features from "./components/features";
// import Gallery from "./components/gallery";
// import Services from "./components/services";
// import Placement from "./components/placement";
// import Team from "./components/Team";
// import Testimonials from "./components/testimonials";
// import Training from "./components/training";
// import JsonData from "./data/data.json";
// import Mission from "./components/mission";
// import Vision from "./components/vision";
// import CoreValues from "./components/core_values";
// import Curriculum from "./components/curriculum";
// import Methodology from "./components/methodology";
// import Assessment from "./components/assessment";
// import Facilities from "./components/facilities";
// import Activities from "./components/activities";

// const App = () => {
//   const [landingPageData, setLandingPageData] = useState({});
//   const [isSplashVisible, setIsSplashVisible] = useState(true);

//   useEffect(() => {
//     setLandingPageData(JsonData);
//     const timer = setTimeout(() => {
//       setIsSplashVisible(false);
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (isSplashVisible) return <Splash />;

//   return (
//     <Router>
//       {/* <Navigation /> */}
//       {/* <Home /> */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About data={landingPageData.About} />} />
//         <Route path="/mission" element={<Mission data={landingPageData.Mission} />} />
//         <Route path="/vision" element={<Vision data={landingPageData.Vision} />} />
//         <Route path="/core-values" element={<CoreValues data={landingPageData.Mission} />} />
//         <Route path="/curriculum" element={<Curriculum data={landingPageData.Curriculum} />} />
//         <Route path="/methodology" element={<Methodology data={landingPageData.Methodology} />} />
//         <Route path="/assessment" element={<Assessment data={landingPageData.Assessment} />} />
//         <Route path="/facilities" element={<Facilities data={landingPageData.Facilities} />} />
//         <Route path="/activities" element={<Activities data={landingPageData.Activities} />} />
//         <Route path="/features" element={<Features data={landingPageData.Features} />} />
//         <Route path="/services" element={<Services data={landingPageData.Services} />} />
//         <Route path="/portfolio" element={<Gallery data={landingPageData.Gallery} />} />
//         <Route path="/team" element={<Team data={landingPageData.Team} />} />
//         <Route path="/testimonials" element={<Testimonials data={landingPageData.Testimonials} />} />
//         <Route path="/placement" element={<Placement data={landingPageData.Placement} />} />
//         <Route path="/training" element={<Training data={landingPageData.Training} />} />
//         <Route path="/contact" element={<Contact data={landingPageData.Contact} />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Splash from "./components/Splash";
import Layout from "./components/Layout";
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
import Mission from "./components/mission";
import Vision from "./components/vision";
import CoreValues from "./components/core_values";
import Curriculum from "./components/curriculum";
import Methodology from "./components/methodology";
import Assessment from "./components/assessment";
import Facilities from "./components/facilities";
import Activities from "./components/activities";
import JsonData from "./data/data.json";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    setLandingPageData(JsonData);
    const timer = setTimeout(() => setIsSplashVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isSplashVisible) return <Splash />;

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About data={landingPageData.About} />} />
          <Route path="/mission" element={<Mission data={landingPageData.Mission} />} />
          <Route path="/vision" element={<Vision data={landingPageData.Vision} />} />
          <Route path="/core-values" element={<CoreValues data={landingPageData.Mission} />} />
          <Route path="/curriculum" element={<Curriculum data={landingPageData.Curriculum} />} />
          <Route path="/methodology" element={<Methodology data={landingPageData.Methodology} />} />
          <Route path="/assessment" element={<Assessment data={landingPageData.Assessment} />} />
          <Route path="/facilities" element={<Facilities data={landingPageData.Facilities} />} />
          <Route path="/activities" element={<Activities data={landingPageData.Activities} />} />
          <Route path="/features" element={<Features data={landingPageData.Features} />} />
          <Route path="/services" element={<Services data={landingPageData.Services} />} />
          <Route path="/portfolio" element={<Gallery data={landingPageData.Gallery} />} />
          <Route path="/team" element={<Team data={landingPageData.Team} />} />
          <Route path="/testimonials" element={<Testimonials data={landingPageData.Testimonials} />} />
          <Route path="/placement" element={<Placement data={landingPageData.Placement} />} />
          <Route path="/training" element={<Training data={landingPageData.Training} />} />
          <Route path="/contact" element={<Contact data={landingPageData.Contact} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
