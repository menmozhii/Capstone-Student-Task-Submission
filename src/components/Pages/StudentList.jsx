import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { API_URL } from "../../App";

function StudentList() {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data when component mounts
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${API_URL}/user`); // Replace this with your actual API endpoint
            setData(response.data.users);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    
   
    
     

    const columns = [
        {
            accessorFn: (row) => row.name,
            id: 'name',
            header: 'STUDENT_NAME',
        },
        {
            accessorFn: (row) => row.batchNumber,
            id: 'batch_no',
            header: 'BATCH_NO',
        },
        {
            accessorFn: (row) => row.email,
            id: 'email',
            header: 'EMAIL',
        },
        {
            accessorFn: (row) => row.courseName,
            id: 'courseName',
            header: 'COURSE NAME',
        },
        {
            accessorFn: (row) => row.status,
            id: 'status',
            header: 'STATUS',
        },
        {
            accessorFn: (row) => (
                <div>
                    <DeleteIcon className="delete-icon" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <BorderColorIcon className="edit-icon" />
                </div>
            ),
            header: "Action",
            size: 150,
        },
    ];

    const table = useMaterialReactTable({
        columns,
        data,
        enableColumnOrdering: true,
        enableRowSelection: true,
        enablePagination: false,
    });

    return (
        <div>
            <MaterialReactTable table={table} />
        </div>
    );
}

export default StudentList;
