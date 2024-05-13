import React, { useState } from "react";
import '../Pages/addtask.css';
import axios from "axios";
// import NavBar from "../../Components/NavBar";
import { API_URL } from "../../App";
import toast from "react-hot-toast";

function MentorAddtask() {
  
  const token = sessionStorage.getItem("token")

  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [referenceLinks, setReferenceLinks] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleAddTask = async (e) => {
    e.preventDefault();
    try {
      const data = { title, subTitle, referenceLinks, deadline }; // Ensure that the field names match the server's expectations
      const response = await axios.post(`${API_URL}/task`, data, {
        headers: {
          'Content-Type': 'application/json', // Correct content type for JSON data
          Authorization: `Bearer ${token}`
        }
      });
      toast.success(response.data.message);
      setTitle("")
     setSubTitle("")
      setReferenceLinks("")
      setDeadline("")
    } catch (error) {
      toast.error(error.response.data.message || "Internal server error");
    }
  };
  

  return (
    <div className="addtask-container">
      <div className="addtask-header">
        <h1 className="addtask-title">MENTOR ADD ASSIGNMENT</h1>
      </div>
      <div className="addtask-content">
        <div className="addtask-form-container">
          <h1 className="addtask-form-title">ADD ASSIGNMENT</h1>
          <form className="addtask-form" onSubmit={handleAddTask}>
            <div className="addtask-form-group">
              <label className="addtask-label">Assignment Title</label>
              <input
                type="text"
                placeholder="Title"
                name="title"
                className="addtask-input"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="addtask-form-group">
              <label className="addtask-label">SubTitle</label>
              <input
                type="text"
                placeholder="SubTitle"
                name="subTitle"
                className="addtask-input"
                onChange={(e) => setSubTitle(e.target.value)}
              />
            </div>
            <div className="addtask-form-group">
              <label className="addtask-label">ReferenceLinks</label>
              <input
                type="text"
                placeholder="links"
                name="ReferenceLinks"
                className="addtask-input"
                onChange={(e) => setReferenceLinks(e.target.value)}
              />
            </div>
            <div className="addtask-form-group">
              <label className="addtask-label">Deadline</label>
              <input
                type="date"
                name="deadline"
                className="addtask-input"
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>
            <button type="submit" className="addtask-submit-button">
              ADD
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MentorAddtask;
