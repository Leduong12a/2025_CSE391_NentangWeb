import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Detailshark from "./detailshark";

function Shark(){
    const[getdata,setdata] = useState([]);
    const a =[ "https://img.teamobi.com/teamobi/tontonfriend/3.gif",
      "https://img.teamobi.com/teamobi/tontonfriend/9.gif",
      "https://img.teamobi.com/teamobi/tontonfriend/24.gif",
      "https://img.teamobi.com/teamobi/tontonfriend/7.gif",
      "https://img.teamobi.com/teamobi/tontonfriend/8.gif",
      "https://img.teamobi.com/teamobi/tontonfriend/18.gif"
    ]
    useEffect(()=>{
        fetch("https://dummyjson.com/users?limit=6&&skip=10")
        .then(res => res.json())
        .then((data)=>{
           setdata(data.users);
        });
    },[]);
  
    return(
    <> 
      <div className="shark">
                   <div className="sharkmain">
                          {getdata.map((item,index)=>(
                                <NavLink className="sharkone" to={"/about/shark/" + item.id} key={item.id}>
                                  
                                  <div className="sharkimg">
                                    <img src={a[index]}/>
                                  </div>
                                  <div>
                                  <h3>{item.lastName}</h3>
                                  <p>Studied:{item.university}</p>
                                  <p>Chức vụ:{item.role}</p>
                                  </div>
                                </NavLink>
                               
                          ))}
              </div>
              
      </div>
    </>);
}
export default Shark;