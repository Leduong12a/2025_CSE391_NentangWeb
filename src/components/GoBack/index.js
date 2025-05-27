import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import "./index.css";
function GoBack() {
  const navigate = useNavigate();
  
  
  const handleClick = () => {
    navigate(-1);
    
  };
  return (
    <>
      <button onClick={handleClick} className="button">

        <FaArrowLeft />
      </button>
    </>
  );
}
export default GoBack;
