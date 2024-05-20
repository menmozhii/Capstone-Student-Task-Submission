import React,{useEffect,useState} from 'react'
import '../Pages/chartpage.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios'
import { API_URL } from '../../App';


function ChartPage() {


    const token = sessionStorage.getItem("token")


  const [totalTask,SetTotalTask]=useState("")
const [submitted,setSubmitted]=useState("")
const [pending,setPending]=useState(totalTask-submitted)

const data = [
   
    {name:"Submitted",value:submitted},
    {name:"pending",value:pending},
    {name:"totalTask",value:totalTask},
   
  ]


const fetchData = async()=>{
  try {
      const response = await axios.get(`${API_URL}/task`, {
        headers: {
          'Content-Type': 'application/json', // Correct content type for JSON data
          Authorization: `Bearer ${token}`
        }
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


 
  
  
  return<>
  
  <div className ="chart-page-container">
  <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">line charts</h5>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
     
        </LineChart>
        
      </div>
    </div>
  </div>
 
</div>
  
   
    </div>
 
  
  </>
}

export default ChartPage