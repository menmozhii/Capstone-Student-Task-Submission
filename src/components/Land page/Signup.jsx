import React, { useState } from 'react'
import './signup.css'
import image1 from '../image/logo.png'
import {  Link,useNavigate } from 'react-router-dom';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import toast from "react-hot-toast";

import axios from 'axios'

function Signup() {
const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");

const navigate = useNavigate()

let [user, setUser] = useState([]);
let [type, setType] = useState(true);


const handleType = () => {
  setType(!type);
};

const handleSignup= async(e)=>{
  e.preventDefault()
 

  try  {
    let data={name,email,password}
    const response = await axios.post("http://localhost:8000/user/signup",data)
toast.success("signup successfully")
navigate('/login')
  } catch (error) {
    toast.error("error")
    
  }
}
// need to write the axios post


// 

  return<> 
   <div id="login" className="login_page">
        <div className="image_container"></div>
        <div className="login_form">
          <h1>Sign up</h1>
          <form onSubmit={handleSignup}>

          <label htmlFor="name">
              Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              autoComplete="username" onChange={(e)=>setName (e.target.value)}
            />

            <br />

            <label htmlFor="email">
              Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              autoComplete="username" onChange={(e)=>setEmail (e.target.value)}
            />

            <br />
            <label htmlFor="password">Password : </label>
            <input
              type={type ? "password" : "text"}
              name="password"
              placeholder="Password"
              autoComplete="current-password" onChange={(e)=>setPassword (e.target.value)}
            />
            <div className="eye_icon" onClick={() => handleType()}>
              {type ? <VisibilityIcon /> : <VisibilityOffIcon />}
              {type ? "Show Password" : "Hide Password"}
            </div>

            <br />
            <button className="submit_button" type="submit">
              Sign up
            </button>
            <a  onClick={() => navigate("/login")}>
              <p>login</p>
            </a>
          </form>
        </div>
      </div>
   </>
    
  
}

export default Signup