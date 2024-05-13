import React, { useEffect, useState } from 'react';
import TaskIcon from '@mui/icons-material/Task';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import axios from 'axios';
import { API_URL } from '../../App';

function Card() {

    const token = sessionStorage.getItem("token")
const [totalTask,SetTotalTask]=useState("")
const [submitted,setSubmitted]=useState("")
const [pending,setPending]=useState(totalTask-submitted)
 

    const cardData= [
        {
            title: "submitted",
            value: submitted,
            icon: TaskIcon
        },
        {
            title: "TotalTask",
            value:totalTask ,
            icon: PendingActionsIcon
        },
        
        {
            title: "progress",
            value: pending,
            icon: EventRepeatIcon
        }
    ];

    const fetchData = async()=>{
        try {
            const response = await axios.get(`${API_URL}/task`, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  Authorization: `Bearer ${token}`
                },
              })
            const data= response.data.task
           SetTotalTask(data.length)
        } catch (error) {
            console.log(error)
            
        }
    }
    useEffect(()=>{fetchData();fetchSubmission()},[])
   
useEffect(()=>{pendingTask()},[submitted,totalTask])

  const userId =  sessionStorage.getItem("userId");
const fetchSubmission = async (id, length) => {


    try {
        const response = await axios.get(`${API_URL}/submission`, {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${token}`
            },
          });
        const data = response.data.submission.filter(item => item.studentId === userId );
        setSubmitted(data.length);
      
    } catch (error) {
        console.log(error);
    }
}
    
const pendingTask = () =>{
    setPending(totalTask-submitted)

 }




    


    return (
        <div className="row">
            {cardData.map((e, i) => (
                <div key={i} className="col-xl-3 col-md-6 mb-4">
                    <div className={`card ${
                        e.title === "submitted"
                        ? "border-left-success"
                        : ""
                    } ${
                        e.title === "TotalTask" ? "border-left-danger" : ""
                    } ${
                        e.title === "progress" ? "border-left-warning" : ""
                    } shadow h-100 py-2`}>
                        
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        {e.title}
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        {e.value}
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <e.icon  className={` ${
                        e.title === "submitted"
                        ? "text-success"
                        : ""
                    } ${
                        e.title === "TotalTask" ? "text-danger" : ""
                    } ${
                        e.title === "progress" ? "text-warning" : ""
                    } `} />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;
