import React from "react";
import { Link } from "react-router-dom";
import "../styles/Homepage.css";
import "../index.js";
const HomePage = () => {
  return (
    <>
      <video autoPlay muted loop id="myVideo">
        <source src="/assets/videos/video.mp4" type="video/mp4" />
      </video>
      <div className="content">
        <div className="card w-25">
          <img
            src="/assets/images/logo/hr-project.png"
            alt="logo"
            height="250"
            width="380"
          />
          <div className="card-body" style={{ marginTop: "-60px" }}>
            <h2 className="card-title">JOB JUNCTION</h2>
            <hr />
            <p className="card-desc">FACING ISSUE IN FINDING A SUITABLE JOB</p>
            <p className="card-text">
              FIND THE PERFECT{" "}
              <em
                style={{
                  fontStyle: "normal",
                  color: "#ed563b",
                  fontWeight: "900",
                }}
              >
                JOB
              </em>{" "}
              HERE
            </p>
            <div className="d-flex justify-content-between mt-5">
              <p>
                <Link to="/register" className="myBtn">
                  Register
                </Link>
              </p>
              <p>
                <Link to="/login" className="myBtn">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
