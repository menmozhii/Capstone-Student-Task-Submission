import React, { useState, useEffect } from 'react';
import '../Pages/validatetask.css';
import axios from 'axios';
import { API_URL } from '../../App';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

function ValidateTask() {
  
  const token = sessionStorage.getItem("token")
  // Extracting id from URL params
  const { id } = useParams();

  // State variables for task data
  const [data, setData] = useState(null);
  const [title, setTitle] = useState('');
  const [student, setStudent] = useState('');
  const [mark, setMark] = useState('');
  const [comments, setComments] = useState('');

  // State variables for URLs
  const [feSourceUrl, setFesourceUrl] = useState('');
  const [feDeployedUrl, setFeDeployedUrl] = useState('');
  const [beSourceUrl, setBeSourceUrl] = useState('');
  const [beDeployedUrl, setBeDeployedUrl] = useState('');


  // Fetch task data from API
   
  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/submission/${id}`, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        },
      });
      console.log(response.data.submission.task.url)
      setData(response.data.submission);
      setTitle(response.data.submission.task.title);
      setStudent(response.data.submission.student);

      setFesourceUrl(response.data.submission.task.url.frontendSourcecode);
      setFeDeployedUrl(response.data.submission.task.url.frontendDeployedUrl);
      setBeSourceUrl(response.data.submission.task.url.backendSourcecode);
      setBeDeployedUrl(response.data.submission.task.url.backendDeployedUrl);



      
    }
   
    catch (error) {
      console.log(error);
      // Handle error, maybe display a toast notification
    }
  };
  
  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Navigation hook
  const navigate = useNavigate();

  // Handle task validation update
  const handleUpdate = async () => {
    try {
      // Prepare form data
      const formData = { "task.mark": mark, "task.comments": comments };
      // Send PUT request to update task validation
      const response = await axios.put(`${API_URL}/submission/${id}`,formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        },
      });
      // Display success toast
      toast.success("Validated successfully");
      // Navigate to dashboard after validation
      navigate('/dashboard/homepage');
    } catch (error) {
      // Display error toast
      toast.error(error.message);
    }
  };

  return (
    <div className="validate">
      <form className="validate-form" onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
        {/* Display task details */}
        <h4>Student reports..</h4>
        
        {/* Display task name and student name */}
        <label className="validate-label" htmlFor="task name">Task Name</label>
        <h1>{title}</h1>
        <label className="validate-label" htmlFor="student name">Student Name</label>
        <h2>{student}</h2>
         <label htmlFor='FrontEnd SourceCode'>FrontEnd SourceCode</label>
      
      <a href = {feSourceUrl}>{feSourceUrl}</a>
      <label htmlFor='FrontEnd DeployedUrl'>FrontEnd DeployedUrl</label>
      <a href = {feDeployedUrl}>{feDeployedUrl}</a>
        <label htmlFor='BackEnd SourceCode'>BackEnd SourceCode</label>
        <a href = {beSourceUrl}>{beDeployedUrl}</a>
        <label htmlFor='BackEnd DeployedUrl' >BackEnd DeployedUrl</label>
        <a href = {beDeployedUrl}>{beDeployedUrl}</a>
      


        {/* Input for mark and comments */}
        <label className="validate-label" htmlFor="mark">Mark</label>
        <input type="text" name="mark" placeholder="Obtained mark" onChange={(e) => { setMark(e.target.value); }} />
        <label className="validate-label" htmlFor="comment">Comments</label>
        <input type="text" name="comment" placeholder="Comments..." onChange={(e) => { setComments(e.target.value); }} />
        {/* Submit button */}
        <button type="submit" className="btn btn-primary">SUBMIT</button>
      </form>
    </div>
  );
}

export default ValidateTask;
