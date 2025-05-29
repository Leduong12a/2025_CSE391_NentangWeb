import "./About.css";
import { NavLink, Outlet } from "react-router-dom";
function About() {
  return (
   <>
 <div className="About"> 
               <div className="container">
                <div className="aboutmain">
                   <nav className="item">
                    <h1>Trang thông tin </h1>
                    <ul>
                        <li> <NavLink to="shark">Thông tin về đội ngũ</NavLink></li>
                        <li> <NavLink to = "staff"> thông tin về nhà đầu tư</NavLink></li>
                    </ul>
                 </nav>
                 <div className="item">
                  <Outlet/>
                 </div>
                </div>
                 
               </div>
        </div>
   </>
 
  );
}

export default About;
