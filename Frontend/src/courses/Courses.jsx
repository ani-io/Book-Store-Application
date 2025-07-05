import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

function Courses() {
  const location = useLocation();
  const search = location.state?.search || "";
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Course search={search} />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
