import React, { useEffect, useState } from "react";
import "./Jobs.css";
import { FaArrowRight } from "react-icons/fa";
import Job from "../Job/Job";

const Jobs = () => {
  const data = [
    {
      title: "junior front-end dev",
      salary: "30k",
      deadline: "20/01/2023",
      description: "fbauifbu sdifbudsdsv sn sdvidspvludsbvdsi n sivbdsivubs",
      category: "engineering",
      status: "offline",
      image:
        "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600",
      skills: ["c++", "HMTL", "CSS", "javascript", "Node js", "React"],
    },
    {
      title: "junior Video editor",
      salary: "30k",
      deadline: "20/01/2023",
      description: "fbauifbu sdifbudsdsv sn sdvidspvludsbvdsi n sivbdsivubs",
      category: "engineering",
      status: "offline",
      image:
        "https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg?auto=compress&cs=tinysrgb&w=600",
      skills: ["c++", "HMTL", "CSS", "javascript", "Node js", "React"],
    },
    {
      title: "junior Video editor",
      salary: "30k",
      deadline: "20/01/2023",
      description: "fbauifbu sdifbudsdsv sn sdvidspvludsbvdsi n sivbdsivubs",
      category: "engineering",
      status: "offline",
      image:
        "https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=600",
      skills: ["c++", "HMTL", "CSS", "javascript", "Node js", "React"],
    },
  ];
  const [jobs, setJob] = useState([]);
  const [activeTab, setActiveTab] = useState("remote");

  // showing data from server with useEffect
  useEffect(() => {
    fetch("http://localhost:5000/allJobs", {
      method: "GET",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
      });
  }, []);

  // don't use this when using useEffect
  // // jobs filtered by remote or offline
  // const result = jobs?.filter(job => job.status === activeTab);
  // // console.log(result);
  // setJob(result);// but Too many re-renders. React limits the number of renders to prevent an infinite loop

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <h1 className="title text-center mt-5 p-5">Available Job's</h1>
      <div className="tab-container text-center">
        <div className="text-center w-100 m-auto">
          <div className="tabs d-flex justify-content-center align-items-center">
            <div
              onClick={() => handleTabClick("remote")}
              className={`tab  tab2 remote ${
                activeTab == "remote" ? " bg-danger text-white" : ""
              }`}
            >
              Remote
            </div>
            <div
              onClick={() => handleTabClick("offline")}
              className={`tab  tab2 Offline ${
                activeTab == "offline" ? " bg-danger text-white" : ""
              }`}
            >
              Offline
            </div>
          </div>
        </div>
      </div>
      <div className="jobs-container mt-5 row">
        {jobs?.map((job, index) => (
          <Job job={job} key={index}></Job>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
