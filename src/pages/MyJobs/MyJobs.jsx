import React, { useEffect, useState } from "react";
import "./MyJobs.css";
import Button from "react-bootstrap/Button";
import UpdateJobModal from "../UpdateJobModal/UpdateJobModal";

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const [control, setControl] = useState(false);
  const [user, setTestUser] = useState([]); //delete when set user with login!
  let users = "pritamdutta7498@gmail.com"; //delete when create user

  useEffect(() => {
    fetch(`http://localhost:5000/myJob/${users}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [user, control]);
  // search btn implementation
  const handleSearch = () => {
    fetch(`http://localhost:5000/jobSearchByTitle/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data); //here showing the search results but without using gmail name
      });
  };
  // btn for sending data to updateJobModal
  const handleJobUpdate = (data) => {
    fetch(`http://localhost:5000/updateJob/${data?._id}`, {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if(result.modifiedCount > 0){
          setControl(!control);
          console.log(result);
        }
      });
    // console.log(data);
  };

  return (
    <div>
      <div className="my-jobs-container">
        <h1 className="text-center p-4 ">ALL My Jobs</h1>
        {/* for search the job result */}
        <div className="search-box p-2 text-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-1"
          />
          <button onClick={handleSearch}>Search</button>
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
            {jobs?.map((job, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{job.title}</td>
                <td>{job.category}</td>
                <td>{job.vacancy}</td>
                <td>{job.salary}</td>
                {/* using modal for update data */}
                <td>
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                   Update
                  </Button>

                  <UpdateJobModal
                  
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    job={job}
                    handleJobUpdate={handleJobUpdate}
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
