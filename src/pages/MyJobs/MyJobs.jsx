import React, { useEffect, useState } from "react";
// import { useContext } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
import Table from "react-bootstrap/Table";
//
import "./MyJobs.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UpdateJobModal from "../UpdateJobModal/UpdateJobModal";

const MyJobs = () => {
  // const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [modalShow, setModalShow] = React.useState(false);
  // const [control, setControl] = useState(false);
  // const [user, setTestUser] = useState([]); //delete when set user with login!
  const [user, setTestUser] = useState([]); //delete when set user with login!
let users = 'pritamdutta7498@gmail.com';//delete when create user

  useEffect(() => {
    // fetch(`http://localhost:5000/myJob/${user?.email}`)//use it when use exist!
    fetch(`http://localhost:5000/myJob/${users}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data)
        setTestUser(data)
      });
  }, [user]);
  // search btn implementation
  const handleSearch = ()=>{
    console.log(searchText);

  }

  return (
    <div>
      <div className="my-jobs-container">
        <h1 className="text-center p-4 ">ALL My Jobs</h1>
        <div className="search-box p-2 text-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-1"
          />{" "}
          
          <button onClick={handleSearch}  >Search</button>
        </div>

        {/* my table */}
        <table className="table table-striped container">
          <thead>
            <tr className="table-info">
              <th>index</th>
              <th>Title</th>
              <th>Category</th>
              <th>vacancy</th>
              <th>salary</th>
              <th>Edit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user?.map((job, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{job.title}</td>
                <td>{job.category}</td>
                <td>{job.vacancy}</td>
                <td>{job.salary}</td>
                <td>
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                    Edit
                  </Button>
                  <UpdateJobModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    job={job}
                    // handleJobUpdate={handleJobUpdate}
                  />
                </td>
                <td>
                  {" "}
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJobs;
