
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Signup from './components/Land page/Signup'
import Login from './components/Land page/Login'
import image1 from './components/image/logo.png'
import Dashboard from './components/Pages/Dashboard'
import login from './components/image/login.png'
import Sidebar from './components/Pages/Sidebar'
import MentorAddtask from './components/Pages/MentorAddtask'
import Firstpage from './components/Land page/Firstpage'
import HomePage from './components/Pages/HomePage'
import MentorViewtask from './components/Pages/MentorViewtask'
import StudentViewTask from './components/Pages/StudentViewTask'
import StudentSubmission from './components/Pages/StudentSubmission'
import ValidateTask from './components/Pages/ValidateTask'
import StudentList from './components/Pages/StudentList'
// import ChartPage from './components/Pages/ChartPage'


 export const API_URL = "https://capstone-student-task-submission-backend.onrender.com"





function App() {
  return<>
  <BrowserRouter>
  <Routes>
    <Route path="/firstpage" element ={<Firstpage/>} />

    <Route path ='/login' element={< Login/>} />
    <Route path ='/signup' element={< Signup/>} />
    {/* outlet start */}
    <Route path ='/dashboard' element={< Dashboard/>} > 
          <Route path='homepage' element = {<HomePage />} />
           {/*mentor routing  */}
          <Route path ='mentoraddtask' element={< MentorAddtask/>} />
          <Route path ='mentorviewtask' element={<MentorViewtask/>} />
          <Route path ='validatetask/:id' element={<ValidateTask/>} />
         {/* student routing */}
          <Route path ='studentviewtask' element={< StudentViewTask/>} />
          <Route path ='studentsubmission/:id' element={< StudentSubmission/>} />
          <Route path ='studentList' element={< StudentList/>} />
          {/*  */}
          <Route path ='' element={< Navigate to="homepage"/>} />
          <Route path ='*' element={< Navigate to="homepage"/>} />
      </Route>

    
   
    {/* <Route Path= "*" element ={<Navigate  to ="firstpage"/>} /> */}
    <Route path='*' element={<Navigate to="firstpage"/>}/>
    
  </Routes>
  </BrowserRouter>

  </>
}

export default App