import { Outlet ,NavLink} from "react-router-dom";
import { arr } from "./stack"; 

function Staff(){
  
    return (
      <>

      <div className="Staff">
    
          <div className="staffmain">
              {
                arr.map((item) => (
               
                      <NavLink  className  = "productstaff"  to={"/about/staff/" + item.id} key = {item.id}>
                      
                      <div className="staffimg item1"> 
                             <img alt={item.name} src={item.image}/>
                        </div>
                       <div className="stafftt item1">
                            <h2>{item.name}</h2>
                        <p>{item.address}</p>
                       </div>
                      </NavLink>
                    
                     
                )
                )
              }
              <div className="stafffooter">

           <h2 style={{textAlign:"center"}}> thông tin chi tiết:</h2> 
           <Outlet/>
          </div>
          </div>
          
       
      </div>
      </>
    );
}
export default Staff;