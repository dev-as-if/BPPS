// import React from "react";
// import Logo from "../assets/APMI.jpg";
// import { Link } from "react-router-dom";

// const Navigation = (props) => {
//   return (
//     <nav id="menu" className="navbar navbar-default navbar-fixed-top">
//       <div className="container">
//         <div className="navbar-header">
//           <button
//             type="button"
//             className="navbar-toggle collapsed"
//             data-toggle="collapse"
//             data-target="#bs-example-navbar-collapse-1"
//           >
//             {" "}
//             <span className="sr-only">Toggle navigation</span>{" "}
//             <span className="icon-bar"></span>{" "}
//             <span className="icon-bar"></span>{" "}
//             <span className="icon-bar"></span>{" "}
//           </button>
//           <img src={Logo} alt="APMI Logo" height={"58vh"} />
//           <Link className="navbar-brand" to="/">Book & Pen <br /> Public School</Link>
//         </div>

//         <div
//           className="collapse navbar-collapse"
//           id="bs-example-navbar-collapse-1"
//         >
//           <ul className="nav navbar-nav navbar-right">
            
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/services">Courses</Link>
//             </li>
//             <li>
//               <Link to="/portfolio">Gallery</Link>
//             </li>
//             <li>
//               <Link to="/testimonials">Testimonials</Link>
//             </li>
//             <li>
//               <Link to="/contact"><i className="fa fa-phone"></i> &nbsp; Call Us &nbsp;
//                 +91 7485060789</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;

// ------------------------------------------------

// import React from "react";
// import Logo from "../assets/APMI.jpg";
// import { Link } from "react-router-dom";

// const Navigation = () => {
//   return (
//     <nav id="menu" className="navbar navbar-default">
//       <div className="container">
//         <div className="navbar-header">
//           <button
//             type="button"
//             className="navbar-toggle collapsed"
//             data-toggle="collapse"
//             data-target="#bs-example-navbar-collapse-1"
//           >
//             <span className="sr-only">Toggle navigation</span>
//             <span className="icon-bar"></span>
//             <span className="icon-bar"></span>
//             <span className="icon-bar"></span>
//           </button>
//           <img src={Logo} alt="BPPS Logo" height={"58vh"} />
//           <Link className="navbar-brand" to="/">Book & Pen <br /> Public School</Link>
//         </div>

//         <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//           <ul className="nav navbar-nav navbar-right">
//             <li className="dropdown">
//               <Link to="#" className="dropdown-toggle" data-toggle="dropdown">Home <span className="caret"></span></Link>
//               <ul className="dropdown-menu">
//                 <li><Link style={{color: "black"}} to="/about">About Us</Link></li>
//                 <li><Link style={{color: "black"}} to="/mission">Mission</Link></li>
//                 <li><Link style={{color: "black"}} to="/vision">Vision</Link></li>
//                 <li><Link style={{color: "black"}} to="/core-values">Core Values</Link></li>
//               </ul>
//             </li>
//             <li className="dropdown">
//               <Link to="#" className="dropdown-toggle" data-toggle="dropdown">Academics <span className="caret"></span></Link>
//               <ul className="dropdown-menu">
//                 <li><Link style={{color: "black"}} to="/curriculum">Curriculum</Link></li>
//                 <li><Link style={{color: "black"}} to="/methodology">Methodology</Link></li>
//                 <li><Link style={{color: "black"}} to="/assessment">Assessment</Link></li>
//               </ul>
//             </li>
//             <li><Link to="/facilities">Facilities</Link></li>
//             <li><Link to="/activities">Activities</Link></li>
//             <li><Link to="/admissions">Admissions</Link></li>
//             <li><Link to="/careers">Careers</Link></li>
//             <li><Link to="/portfolio">Gallery</Link></li>
//             <li><Link to="/donate">Donate Us</Link></li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/BPPS.jpg";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-default" id="menu">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={Logo} alt="BPPS Logo" height="60" className="me-2" />
          <div>
            Book & Pen <br /> Public School
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/about">About Us</Link></li>
                <li><Link className="dropdown-item" to="/mission">Mission</Link></li>
                <li><Link className="dropdown-item" to="/vision">Vision</Link></li>
                <li><Link className="dropdown-item" to="/core-values">Core Values</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Academics
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/curriculum">Curriculum</Link></li>
                <li><Link className="dropdown-item" to="/methodology">Methodology</Link></li>
                <li><Link className="dropdown-item" to="/assessment">Assessment</Link></li>
              </ul>
            </li>

            <li className="nav-item"><Link className="nav-link" to="/facilities">Facilities</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/admissions">Admissions</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/careers">Careers</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/portfolio">Gallery</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/donate">Donate Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

