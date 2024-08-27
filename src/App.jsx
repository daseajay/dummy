import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"
const App = () => {

   const [list ,setList] = useState([])
    
   const fatctdata = () =>{
     axios.get('api/login').then((res)=>{
      setList(res.data)
     })
   }

   useEffect(()=>{
    fatctdata()
   },[])

  return (
    <>
      <h1>User List </h1>
      <div>
        {
          list.map((item,ele)=>(
            <div key={ele}>
               <p>{item.id}</p>
               <p>{item.name}</p>
               <p>{item.address}</p>
           </div>
          ))
        }
      </div>
    </>
  );
};

export default App;
