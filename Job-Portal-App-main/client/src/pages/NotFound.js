import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
const NotFound = () => {
  return (
    <div className="notFound">
      <img
        src="/assets/images/jobbg.jpg"
        alt=" "
        height={200}
        width={350}
        className="image"
      />
      <div className="text-overlay">Page Not Found!!</div>
      <Link className="home-button" to="/">
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;
