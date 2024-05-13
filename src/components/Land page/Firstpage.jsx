import React from 'react'
import '../Land page/firstpage.css'
import { useNavigate, Link } from 'react-router-dom'
import Diversity1Icon from '@mui/icons-material/Diversity1';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TaskIcon from '@mui/icons-material/Task';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import GamepadIcon from '@mui/icons-material/Gamepad';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Team from '../Land page/Team';
import Footer from './Footer'

function Firstpage() {
  const navigate = useNavigate()
  return <>
    <div className="container-firstpage">
      <div className="topbar">

        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <div className='brand'><Diversity1Icon /><h3 className='student-heading'>AcademyConnect</h3></div>
            <form className="d-flex">
              {/* <button className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
              <Link to='/login'> <button className="btn btn-outline-success buttons" type="submit" ><b>Login</b></button></Link>&nbsp;&nbsp;&nbsp;
              <Link to='/signup'>  <button className="btn btn-outline-success buttons " type="submit"><b>Signup</b></button></Link>
            </form>
          </div>
        </nav>
        
        <div className="image">
          <div className='left-content'>
            <h1> Optimal Student Task Submission Portal</h1>
            <p className='learning'>

              "Learning gives creativity, creativity leads to thinking, thinking provides knowledge, and knowledge makes you great."<sub><b> ~ DR. A.P.J. Abdul Kalam</b></sub>
            </p>
            <Link to="/signup" > <button className="btn btn-outline-success buttons" type="submit" ><b>Join with us</b></button> </Link>
            {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo harum voluptates alias ut ducimus deleniti quae sapiente iusto nam incidunt est nobis dignissimos corrupti magni, repudiandae officia, illum ex eius.</p> */}
          </div>
          <div className="right-content">
            {/* image */}
          </div>


        </div >
        <div><h2 className='title'>Best Features</h2></div>
        <div className=" container-fluid features">

          <div className="features-card">
            <i><AssignmentIcon /> </i>
            <h2>Task Dashboard</h2>
            <p>The dashboard displays a list of all tasks assigned to the student, including upcoming deadlines and any tasks that are overdue. Each task entry typically includes important details such as the task title, description, due date, and any additional instructions provided by the instructor. </p>
            <a href="# ">Task Dashboard</a>

          </div>
          <div className="features-card">

            <i><  TaskIcon /> </i>

            <h2>Task Submission</h2>
            <p> Indicate the preferred format for submitting the task, such as a written document, presentation slides, spreadsheet, code file, etc. Provide guidelines for file naming conventions if applicable. Outline any additional requirements for submission, such as including a cover page, bibliography, or completing a submission form. </p>
            <a href="# ">Task submission</a>

          </div>
          <div className="features-card">
            <i><OpenInBrowserIcon /> </i>

            <h2>Security Measures</h2>
            <p>Require strong and multi-factor authentication methods such as passwords, PINs, security questions, and one-time codes sent via SMS or email.  Implement RBAC to restrict access to portal features and data based on the roles and permissions assigned to each user. </p>
            <a href="# ">Security Measures</a>

          </div>
          <div className="features-card">
            <i><CastForEducationIcon /> </i>

            <h2>Virtual Learning Environment (VLE)</h2>
            <p>Integrates with platforms like Moodle, Canvas, or Blackboard, allowing students to access course materials and assignments directly from the portal. Offers features for online learning, such as virtual classrooms, video lectures, and online discussion boards.</p>
            <a href="# ">Virtual Learning Environment</a>
          </div>

          <div className="features-card">
            <i><LibraryAddIcon /> </i>

            <h2>Student Organizations</h2>

            <p>Provides information about clubs, organizations, and extracurricular activities on campus.Provides access to online databases, journals, e-books, and other library resources.</p>
            <a href="#">Student Organizations</a>
          </div>

          <div className="features-card">
            <i>< GamepadIcon /> </i>

            <h2>Gamification</h2>
            <p>Define the purpose and goals of implementing gamification in the specific context. This could include increasing student engagement, improving learning retention, fostering collaboration, or promoting desired behaviors. Incorporates gamification elements such as badges, achievements, leaderboards, and rewards to enhance motivation, engagement, and learning retention.</p>
            <a href="# ">Gamification</a>

          </div>
          <div className="features-card">
            <i><PeopleAltIcon /> </i>

            <h2>Faculty Wellness and Support</h2>
            <p>The faculty services department aims to support and empower faculty members in their roles as educators, researchers, and contributors to the academic community. Our services are designed to enhance teaching effectiveness, facilitate scholarly activities, and promote professional development. Provides a directory of faculty and staff members, including their contact information, office hours, and areas of expertise. </p>
            <a href="#" >"Faculty Wellness and Support</a>

          </div>

        </div>
        <Team />
        <Footer />

      </div>

    </div>
    {/* <Team /> */}


  </>
}

export default Firstpage