import React, { useState, useEffect } from "react";
import "./Home.css";
import { BsTrash } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
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
  const logOut = () => {
    localStorage.clear();
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [allOpen, setAllOpen] = useState(false);
  const allHandleOpen = () => setAllOpen(true);
  const allHandleClose = () => setAllOpen(false);
  const createCourse = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    let { title, price, author } = e.target;

    let new_course = {
      title: title.value,
      price: price.value,
      author: author.value,
    };
    console.log(new_course);
    fetch("http://localhost:4040/api/create_courses", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(new_course),
    })
      .then((res) => res.json())
      .then((data) => alert(data.msg));
  };

  const [courses, setCourses] = useState([]);

  const getUserCourses = () => {
    fetch("http://localhost:4040/api/get_courses")
      .then((res) => res.json())
      .then((course) => console.log(course));
  };
  // console.log(courses);

  const [update, setUpdate] = useState(false);
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4040/api/all_courses")
      .then((res) => res.json())
      .then((course) => setCourses(course));
  }, [update]);
  console.log(allCourses);

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
      <div className="allcourse-wrapper">
        <button className="log-out_btn" onClick={() => logOut()}>
          Log out
        </button>
      </div>
      <Button className="create-course_btn" onClick={handleOpen}>
        Create course
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form
            onSubmit={(e) => {
              createCourse(e);
            }}
            className="create_course-modal"
          >
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
            <button className="create-btn" type="submit">
              Create course
            </button>
          </form>
        </Box>
      </Modal>
      <Button className="create-course_btn" onClick={allHandleOpen}>
        All courses
      </Button>
      <Modal
        open={allOpen}
        onClose={allHandleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>Created courses</h1>
          <table className="site-table">
            <tbody>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Author</th>
                <th>Action</th>
              </tr>
              {/* {courses.map((el) => {
                <tr key={el.id}>
                  <td>{el.title}</td>
                  <td>{el.price}</td>
                  <td>{el.author}</td>
                  <td>
                    <BsTrash />
                    <FaEdit />
                  </td>
                </tr>;
              })} */}
            </tbody>
          </table>
        </Box>
      </Modal>
    </div>
  );
};

export default Home;
