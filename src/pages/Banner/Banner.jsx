import React from "react";
import { FaSearch, FaArrowAltCircleDown, FaMapMarkerAlt } from "react-icons/fa";
// import { AiFillCaretDown } from "react-icons/ai";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner-container text-white">
      <div className=" bg-dark p-5">
        <div className="row d-flex justify-content-center align-items-center  banner-second-container">
          <div className="col-md-6 col-sm-12 ">
            <h4>Helping you to find any type of job</h4>
            <h1 className="title mt-4">
              Find Your Dream <br /> Job Today
            </h1>
            <div className="Search-box">
              <div className="all-buttons-container mt-5">
                <div className="search-input small-box">
                  <p>
                    <FaSearch color="gray" fontSize="1.5em" />
                  </p>
                  <p className="input-text p-3 me-4">search</p>
                </div>
                <div className="dropdown-input small-box">
                  <p className="input-text p-3">category</p>
                  <p className="me-4">
                    <FaArrowAltCircleDown color="gray" fontSize="1.5em" />
                  </p>
                </div>
                <div className="location-input small-box">
                  <p className="input-text p-3"> location</p>
                  <p className="me-4">
                    <FaMapMarkerAlt color="gray" fontSize="1.5em" />
                  </p>
                </div>
                <div className=" text-white p-3">
                  <div className="search-button-4">
                    <p className="me-2 mt-2">
                      <FaSearch color="gray" fontSize="1.5em" />
                    </p>
                    <p className="p-2">search</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12   ">
            <img
              className="banner-image rounded img-fluid opacity-50 "
              src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
