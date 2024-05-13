import React from "react";
import axios from "axios";
import '../Pages/viewtask.css'
import { useMemo, useState, useEffect } from 'react';

import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import DeleteIcon from "@mui/icons-material/Delete";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { API_URL } from "../../App";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function MentorViewtask() {
  
  const token = sessionStorage.getItem("token")
  
  const navigate = useNavigate()
  const [data,setData]=useState("")
  const fetchData= async()=>{
    try {
      const response = await axios.get(`${API_URL}/submission`, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        },
      })
console.log(response.data.submission);
setData(response.data.submission)
      
    } catch (error) {
console.log(error);
      
    }
  }
  useEffect(()=>{
    fetchData()
  },[])


  const handleEdit =(row)=>{

    navigate(`/dashboard/validatetask/${row._id}`)
  }
  const handleDelete =async(row)=> {
try {
const res = await axios.delete(`${API_URL}/submission/${row._id}`, {
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${token}`
  },
})
toast.success(res.data.message)
  
} catch (error) {
  console.log(error);
  
}
  }
    
  
      const columns = useMemo(
        () => [
         
            
          {
            accessorFn: (row) => row.task.title, //alternate way
            id: 'title', //id required if you use accessorFn instead of accessorKey
            header: 'TITLE',
            // Header: () => <i>Age</i>,
          },
          {
            accessorFn: (row) => row.student, //alternate way
            id: 'student_name', //id required if you use accessorFn instead of accessorKey
            header: 'STUDENT_NAME',
            // Header: () => <i>Age</i>,
          },
          {
            accessorFn: (row) => row.task.mark, //alternate way
            id:'mark', //id required if you use accessorFn instead of accessorKey
            header: 'MARK',
            // Header: () => <i>Age</i>,
          },
          {
            accessorFn: (row) => row.task.submittedDate, //alternate way
            id: 'submittedDate', //id required if you use accessorFn instead of accessorKey
            header: 'SUBMITTED_DATE',
            // Header: () => <i>Age</i>,
          },
          
          
          {
            accessorFn: (row) => (
              <div>
                <DeleteIcon  className="delete-icon"  onClick={()=>handleDelete(row)} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <BorderColorIcon  className="edit-icon" onClick={()=>{handleEdit(row)}} />
              </div>
            ),
            header: "Action",
            size: 150,
          },

        ],
        [],
      );
    
      //optionally, you can manage any/all of the table state yourself
      const [rowSelection, setRowSelection] = useState({});
    
      useEffect(() => {
        //do something when the row selection changes
      }, [rowSelection]);
    
      const table = useMaterialReactTable({
        columns,
        data,
        enableColumnOrdering: true, //enable some features
        enableRowSelection: true,
        enablePagination: false, //disable a default feature
        onRowSelectionChange: setRowSelection, //hoist internal state to your own state (optional)
        state: { rowSelection }, //manage your own state, pass it back to the table (optional)
      });
    
      const someEventHandler = () => {
        //read the table state during an event from the table instance
        console.log(table.getState().sorting);
      };
    

  return <>
      <MaterialReactTable table={table} /> 
     
    </>
  
  
}

export default MentorViewtask;
