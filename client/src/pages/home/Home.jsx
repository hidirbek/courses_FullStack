import React, { useState, useEffect } from "react";
import "./Home.css";
import { BsTrash } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
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
      <Link className="all__courses-link">All Courses</Link>
      <button>Create course</button>
    </div>
  );
};

export default Home;
