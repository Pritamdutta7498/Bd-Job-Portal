import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

const UpdateJobModal = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { handleJobUpdate } = props;
  // console.log(handleJobUpdate);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          className="text-center w-100 m-auto"
          id="contained-modal-title-vcenter"
        >
          Update Job
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          className="container text-center"
          onSubmit={handleSubmit(handleJobUpdate)}
        >
          {errors.exampleRequired && <span>This field is required</span>}
          {/* job title and salary */}
          <div>
            <input
              className="text-input border border-primary"
              {...register("title")}
              placeholder="title"
              defaultValue={props?.job?.title}
            />

            <input
              className="text-input border border-primary"
              {...register("salary", { required: true })}
              placeholder="salary"
              defaultValue={props?.job?.salary}
            />
            {/* creating a unique id for update data but don't show in modal */}
            <input
              className="text-input d-none"
              {...register("_id")}
              value={props?.job?._id}
            />
          </div>
          {/* vacancy and category */}
          <div>
            <input
              className="text-input border border-primary"
              {...register("vacancy", { required: true })}
              placeholder="vacancy"
              defaultValue={props?.job?.vacancy}
            />
            <select
              className="text-input border border-primary"
              {...register("category")}
              defaultValue={props?.job?.category}
            >
              <option value="Engineering">engineering</option>
              <option value="Editor">Editor</option>
              <option value="writer">Writer</option>
              <option value="Developer">Developer</option>
            </select>
          </div>
          {/* place and image link */}
          <div>
            <select
              className="text-input border border-primary"
              {...register("status")}
            >
              <option value="remote">Remote</option>
              <option value="offline">Offline</option>
            </select>
            <input
              className="text-input border border-primary"
              {...register("image")}
              placeholder="image link"
              type="url"
              defaultValue={props?.job?.image}
            />
          </div>
          {/* deadline date */}
          <div>
            <input
              className="text-input border border-primary"
              {...register("deadline")}
              placeholder="deadline"
              type="date"
              defaultValue={props?.job?.deadline}
            />
          </div>
          <input
            className="submit-btn bg-info btn btn-primary"
            value="Update Job"
            type="submit"
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateJobModal;
