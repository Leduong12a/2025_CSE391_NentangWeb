import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GoBack from "../../components/GoBack";
import Img from "../../images/Untitled.png";
function Detailshark(){
      const params = useParams();
   const{id} = params;
   
    const[getdata,setdata] = useState();
    useEffect(() =>{
        fetch(`https://dummyjson.com/users/${id}`)
        .then(res => res.json())
        .then((data)=>{
           setdata(data);
        });
    },[id]);
    console.log(getdata);  
    const lndex = parseInt(id) - 11;
    
 
    return(
        <>
        <div style={{margin:"0 20px"}}>
           <GoBack/>
        </div>
       
        { 
            getdata &&  (
                <div className="box">
                    <div className="detailshark">
            <div className="sharkimg">
                              <div className="sharkimgtitle">
                            <img src={Img} alt="ảnh từ public" />

                            </div>
                            <h3>{getdata.lastName}</h3>         
            </div>
            <div className="sharkcontact">
                    <p>Tuổi:{getdata.age}</p>
                    <p>địa chỉ:{getdata.address.city}</p>
                    <p>Ngày sinh:{getdata.birthDate}</p>
                    <p>Sô điện thoại{getdata.phone}</p>
                    <p>Email:{getdata.email}</p>
                    <p>Studied:{getdata.university}</p>
                    <p>Chức vụ:{getdata.role}</p>
            </div>
        </div>
                </div>
            
        )}
       
        </>
    );
}
export default Detailshark;