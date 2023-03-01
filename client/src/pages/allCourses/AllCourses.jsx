import React from "react";
import { BsTrash } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";

const AllCourses = () => {
  function logOut() {
    localStorage.clear();
  }
  // let history = useHistory();
  // if (localStorage.getItem("token")) {
  return (
    <div>
      <h1>User courses</h1>
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
      <Link to="/" className="all__courses-link">
        User Courses
      </Link>
      <button onClick={logOut()}>Log out</button>
    </div>
  );
  // } else {
  //   history.push("/login");
  // }
};

export default AllCourses;
