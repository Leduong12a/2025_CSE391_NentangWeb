import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__container">
            <div className="footer-section about">
              <h3>Website bán hàng </h3>
              <p>
                Chúng tôi mang đến cho bạn những sản phẩm chất lượng nhất với
                dịch vụ tận tâm.
              </p>
            </div>

            <div className="footer-section contact">
              <h3>Liên hệ</h3>
              <NavLink to="https://github.com/Leduong12a/2025_CSE391_NentangWeb" target ="blank">
                https://github.com/Leduong12a/2025_CSE391_NentangWeb
              </NavLink>
              <p>Điện thoại: 0123 456 789</p>
              <p>Địa chỉ: 123 Đường ABC, Thành phố XYZ</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; Mua sắm dễ dàng, trải nghiệm tuyệt vời.
        </div>
      </footer>
    </>
  );
}

export default Footer;
