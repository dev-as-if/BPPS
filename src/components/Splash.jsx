// import React, { useEffect } from "react";
import Logo from "../assets/BPPS.jpg";
// import { useNavigate } from "react-router-dom";

const Splash = () => {
    // const navigate = useNavigate();

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         navigate("/");
    //     }, 3000);

    //     return () => clearTimeout(timer);
    // }, [navigate]);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-white">
            <img src={Logo} alt="BPPS Logo" height="100" className="mb-3" />
            <h1 className="text-center fw-bold text-black">Book & Pen Public School</h1>
        </div>
    );
};

export default Splash;


// src/components/splash.jsx
// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Logo from "../assets/BPPS.jpg";

// const Splash = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigate("/home");
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, [navigate]);

//   return (
//     <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-white">
//       <img src={Logo} alt="BPPS Logo" height="100" className="mb-3" />
//       <h1 className="text-center fw-bold text-black">Book & Pen Public School</h1>
//     </div>
//   );
// };

// export default Splash;
