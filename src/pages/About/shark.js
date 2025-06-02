import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Detailshark from "./detailshark";
import Img from "../../images/Untitled.png";
function Shark(){
    const[getdata,setdata] = useState([]);
    
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
                                    <img src={Img} alt="ảnh từ public" />
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