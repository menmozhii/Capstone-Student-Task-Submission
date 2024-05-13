import React, { useState } from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import '../Pages/nav.css'
import { Link,useNavigate } from 'react-router-dom';



function Nav() {
    const navigate = useNavigate()
  let date = new Date(Date.now());
  let dateString = date.toLocaleString();
  // session
  const username = sessionStorage.getItem("name");

  const handleLogout =()=>{
    // sessionStorage.clear()
 navigate('/firstpage')
  }

  return<>
 
 {/* <!-- Topbar --> */}
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">


                    {/* <!-- Topbar Navbar --> */}
                    <ul className="navbar-nav ml-auto">

                       

                         

                        {/* <!-- Nav Item - Messages --> */}
                        <li className="nav-item dropdown no-arrow mx-1">
                            <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <div>{dateString}</div>
                                {/* <!-- Counter - Messages --> */}
                               
                            </a>
                            
                        </li>

                        <div className="topbar-divider d-none d-sm-block"></div>

                        {/* <!-- Nav Item - User Information --> */}
                        <li className="nav-item dropdown no-arrow">
                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small capitalise">{username}</span>
                                <img className="img-profile rounded-circle"
                                    src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"/>
                            </a>
                           
                        </li>

                        {/* logout */}
                        {/* <div className="topbar-divider d-none d-sm-block"></div>
          <li className="nav-item" onClick={()=>handleLogout()}>
                <a className="nav-link">
                <span className="mr-2  nav-content ">
                Logout <PowerSettingsNewIcon/>
                </span>
                </a>
          </li> */}

<button type="button" className="btn btn-primary logout" onClick={()=>handleLogout()}><PowerSettingsNewIcon/></button>

                    </ul>

                </nav>
                {/* <!-- End of Topbar --> */}
 
   
  </>
}

export default Nav