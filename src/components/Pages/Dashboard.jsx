
import React from 'react'
import Sidebar from './Sidebar'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'



function Dashboard() {
  return<>
  <div id ="wrapper">
    <Sidebar />
    <div id="content-wrapper" className="d-flex flex-column">
     <div id="content">
    <Nav />

    <div className="container-fluid"><Outlet /></div>

</div>
</div>

  </div>
  </>
}

export default Dashboard