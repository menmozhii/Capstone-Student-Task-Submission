
import React, { useState } from 'react'

import './signup.css'
import image1 from '../image/logo.png'
import {  Link,useNavigate } from 'react-router-dom';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import toast from "react-hot-toast";
import axios from 'axios'
import { API_URL } from '../../App';



function Login() {

const[email,setEmail]=useState("");
const[password,setPassword]=useState("");

const navigate = useNavigate()

let [user, setUser] = useState([]);
let [type, setType] = useState(true);



const handleType = () => {
  setType(!type);
};

const handleLogin= async(e)=>{
  e.preventDefault()
const data ={email,password}
  try {
    const response = await axios.post(`${API_URL}/user/login`,data) 
    // toast.success("login successfully")
// session storage code
console.log(response.data);
if (response.status === 200) {
  sessionStorage.setItem("token", response.data.token);

  sessionStorage.setItem("name", response.data.name);
  sessionStorage.setItem("role", response.data.role);
  sessionStorage.setItem("userId", response.data.id);
  toast.success(response.data.message || "Login Successful");
  navigate("/dashboard/home");
} else {
  toast.error("You are not allowed");
  
}

navigate('/dashboard')
    
  } catch (error) {
    toast.error("login failed")
   console.log(error) 
  }
  // navigate('/login')
}
// need to write the axios post


// 

  return<> 
   <div id="login" className="login_page">
        <div className="image_container"></div>
        <div className="login_form">
          <h1>login In</h1>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">
              Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              autoComplete="username" onChange={(e)=>setEmail (e.target.value) }
            />

            <br />
            <label htmlFor="password">Password : </label>
            <input
              type={type ? "password" : "text"}
              name="password"
              placeholder="Password"
              autoComplete="current-password" onChange={(e)=>setPassword (e.target.value) }
            />
            <div className="eye_icon" onClick={() => handleType()}>
              {type ? <VisibilityIcon /> : <VisibilityOffIcon />}
              {type ? "Show Password" : "Hide Password"}
            </div>

            <br />
            <button className="submit_button" type="submit">
              login in
            </button>
            <a  onClick={() => navigate("/signup")}>
              <p>signup?</p>
            </a>
          </form>
        </div>
      </div>
   </>
    
  
}

export default Login