
import React, { useMemo, useState, useEffect } from 'react';
import axios from "axios";
import '../Pages/viewtask.css';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
// import API_URL from '../../App';
import { API_URL } from '../../App';
import { useNavigate } from 'react-router-dom';

function StudentViewTask() {
  
  const token = sessionStorage.getItem("token")
  
  const [data, setData] = useState([]);


  const columns = useMemo(
    () => [
      {
        accessorFn: (row) => row.title,
        id: 'title',
        header: 'TITLE',
      },
      {
        accessorFn: (row) => row.subTitle,
        id: 'subTitle',
        header: 'SUB_TITLE',
      },
      {
        accessorFn: (row) => row.referenceLinks,
        id: 'referenceLinks',
        header: 'REFERENCE_LINK',
      },
      {
        accessorFn: (row) => new Date(row.deadline).toLocaleDateString(), 
        id: 'deadline',
        header: 'DEADLINE',
      },
      {
        accessorFn: (row) => (
          <div>
            <button type="button" className="btn btn-success" onClick={()=>handleView(row)}>Go To Submission</button>
          </div>
        ),
        header: "Action",
        size: 150,
      },
    ],
    [],
  );

  const [rowSelection, setRowSelection] = useState({});

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        // Assuming your API response has a property called "tasks" which contains an array of task objects
        const response = await axios.get(`${API_URL}/task`, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
          },
        });
        setData(response.data.task); // Set the state with the fetched tasks array
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  // handle view
  const navigate= useNavigate()
  const handleView = async(row)=> {
console.log(row)
navigate(`/dashboard/studentsubmission/${row._id}`)
  }

  useEffect(() => {
    // Handle row selection changes here if needed
  }, [rowSelection]);

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnOrdering: true,
    enableRowSelection: true,
    enablePagination: false,
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
  });

  return (
    <MaterialReactTable table={table} />
  );
}

export default StudentViewTask;
