import React, { useState, useEffect } from 'react';
import '../Pages/studentsubmission.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../App';
import toast from 'react-hot-toast';

function StudentSubmission() {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [frontendSourcecode, setFrontendSourcecode] = useState('');
  const [frontendDeployedUrl, setFrontendDeployedUrl] = useState('');
  const [backendSourcecode, setBackendSourcecode] = useState('');
  const [backendDeployedUrl, setBackendDeployedUrl] = useState('');
  const student = sessionStorage.getItem('name');
  const studentId = sessionStorage.getItem('userId');
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/task/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
        });
        setData(response.data.task);
        setTitle(response.data.task[0].title);
        setSubTitle(response.data.task[0].subTitle);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submissionData = {
        student,
        studentId,
        task: {
          title,
          subTitle,
          url: {
            frontendSourcecode,
            frontendDeployedUrl,
            backendSourcecode,
            backendDeployedUrl
          }
        }
      };

      const response = await axios.post(`${API_URL}/submission`, submissionData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
      });

      toast.success("Task submitted successfully");
      navigate('/dashboard/homepage');
    } catch (error) {
      console.error('Error submitting task:', error);
      toast.error("Error submitting task. Please try again.");
    }
  };

  return (
    <div className="submission">
      <form className="submission_form" onSubmit={handleSubmit}>
        <h3>Please submit your task link here...</h3>
        <h4>{title}</h4>
        <h4>{subTitle}</h4>
        <label className="submit-label" htmlFor="frontend-github-link" >Frontend GitHub Link</label>
        <input type="text" name="frontend-github-link" placeholder="Enter Link" onChange={(e) => setFrontendSourcecode(e.target.value)} />
        <label className="submit-label" htmlFor="frontend-deployed-url">Frontend Deployed URL</label>
        <input type="text" name="frontend-deployed-url" placeholder="Enter Link" onChange={(e) => setFrontendDeployedUrl(e.target.value)} />
        <label className="submit-label" htmlFor="backend-github-link">Backend GitHub URL</label>
        <input type="text" name="backend-github-link" placeholder="Enter Link" onChange={(e) => setBackendSourcecode(e.target.value)} />
        <label className="submit-label" htmlFor="backend-deployed-url">Backend Deployed URL</label>
        <input type="text" name="backend-deployed-url" placeholder="Enter Link" onChange={(e) => setBackendDeployedUrl(e.target.value)} />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default StudentSubmission;
