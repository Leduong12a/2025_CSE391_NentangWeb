import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { arr } from "./stack";
function Detailstaff(){
    const params = useParams();

    const {id} = params;
    
    const[getdetailstaff,setDetail] = useState([]);
    const[getname,setname] = useState();
      useEffect(() => {
        const staff = arr.find((item) => item.id === parseInt(id));
        if(staff) {
        setDetail(staff.products);
        setname(staff.name);
        }
    }, [id]);
     
    return(
        <>
       <div className="detailstaff">
        <div className="container">
        <h3 style={{textAlign:"center"}}>sản phẩm cung cấp của nhà {getname}</h3>
        <div className="detailmain">
              {
            getdetailstaff.map((item) =>(
             <div className="detailtop" key={item.id}>
                 
                    <h4>{item.name}</h4>
                    <div><img src={item.image} alt="đây là phone"/></div>
                    <p>{item.type}</p>
                    <p>{item.price} USD</p>
                 
             </div>
            )) 
            }
        </div>
           
            
        </div>
       </div>
        </>
    );
}
export default Detailstaff;