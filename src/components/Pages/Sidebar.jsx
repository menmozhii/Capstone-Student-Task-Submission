import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import './pages.css'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import StreetviewIcon from '@mui/icons-material/Streetview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import VerifiedIcon from '@mui/icons-material/Verified';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import '../Pages/sidebar.css'

function Sidebar() {
const role = sessionStorage.getItem("role")


    const navigate =useNavigate()
  return<>

 <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
 (
        <Link to={"/dashboard"} className="sidebar-brand d-flex align-items-center justify-content-center">
        
        <div className="sidebar-brand-icon rotate-n-15">
        <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <div className="sidebar-brand-text mx-3">STUDENT <sup></sup></div>
            </Link>)


{/* <!-- Nav Item - Dashboard --> */}
            <li  className="nav-item active listbold " >
                <Link onClick={()=>navigate('/dashboard') }className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>
            
            
            

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            {
                role=="admin" && ( <li className="nav-item" onClick={()=>navigate("/dashboard/mentoraddtask")}>
                <Link  className="nav-link" 
                    aria-expanded="true" aria-controls="collapseTwo">
                    {/* <i className="fas fa-fw fa-cog"></i> */}
                 <AdminPanelSettingsIcon/>
                 
                    <span>MentorAddtask</span>
                </Link>
                </li>)
                }

                {
                    role=="admin" && (<li className="nav-item" onClick={()=>navigate("/dashboard/mentorviewtask")}>
                    <Link  className="nav-link" 
                        aria-expanded="true" aria-controls="collapseTwo">
                        < StreetviewIcon/>
                        
                        <span>Mentor  Action</span>
                    </Link>
                    </li>)
                }

           

           <li className="nav-item" onClick={()=>navigate("/dashboard/studentviewtask")}>
                <Link  className="nav-link" 
                    aria-expanded="true" aria-controls="collapseTwo">
                    {/* <i className="fas fa-fw fa-cog"></i> */}
                    <AssignmentIcon/>
                    <span>ViewTask</span>
                </Link>
                </li>

             

             




</ul>

  </>
}

export default Sidebar