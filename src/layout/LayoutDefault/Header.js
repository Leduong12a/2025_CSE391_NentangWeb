import { RiFacebookCircleFill } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import { CiCircleQuestion } from "react-icons/ci";
import { FaEarthAmericas } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import logo from "../../images/logo.png";
import { SlBasket } from "react-icons/sl";
import "./styleHeader.scss";
import { SiGmail } from "react-icons/si";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="header__title">
              <div className="header__left">
                <ul>
                  <li>
                    <a href="#"> Kênh Người Bán</a>
                  </li>
                  <li>
                    <a href="#"> | Tải ứng dụng |</a>
                  </li>
                  <li>
                    <a href="#"> Kết nối </a>
                  </li>
                  <li>
                    <a href="#">
                      <RiFacebookCircleFill />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                     <SiGmail />
                    </a>
                  </li>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
              <div className="header__right">
                <ul>
                  <li>
                    <a href="#">
                      <FaBell /> Thông báo
                    </a>
                  </li>
                  <li href="">
                    <a href="#">
                      <CiCircleQuestion /> Hỗ trợ
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaEarthAmericas /> Tiếng việt
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="header__main">
              <div className="col-2">
                <div className="header__image">
                  <img src={logo} alt="" />
                </div>
              </div>
              <div className="col-9">
                <div className="header__search">
                  <div className="header__input">
                    <input type="text" placeHolder="Ưu đãi độc quyền" />
                    <button className="header__button">
                      <HiMagnifyingGlass />
                    </button>
                  </div>
                  <div className="row">
                    <div className="col-12"></div>
                  </div>
                </div>
              </div>
              <div className="col-1">
                <button className="header__basket">
                  <SlBasket />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
