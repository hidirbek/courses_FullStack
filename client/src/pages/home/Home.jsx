import React, { useState } from "react";
import "./Home.css";
import { BsTrash } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Home = () => {
  function logOut() {
    localStorage.clear();
  }
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // let history = useHistory();

  // if (localStorage.getItem("token")) {
  return (
    <div className="home-wrapper">
      <h1>Created courses</h1>
      <table className="site-table">
        <tbody>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>nodejs</td>
            <td>12000</td>
            <td>ism familya</td>
            <td>
              <BsTrash />
              <FaEdit />
            </td>
          </tr>
        </tbody>
      </table>
      <button className="create-course_btn">Create course</button>
      <div className="allcourse-wrapper">
        <Link to="/all_courses" className="all__courses-link">
          All Courses
        </Link>
        <button className="log-out_btn" onClick={logOut()}>
          Log out
        </button>
      </div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="create_course-modal">
            <h2>Create A Course</h2>
            <input
              className="course_title"
              type="text"
              name="title"
              placeholder="Name of the course"
            />
            <input
              className="course_price"
              type="number"
              name="price"
              placeholder="Price of the course"
            />
            <input
              className="course_author"
              type="text"
              name="author"
              placeholder="Author of the course"
            />
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Home;
