import "./About.css";

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-card">
        <h1 className="about-title">🛍️ Chào mừng đến với <span className="brand-name">chúng tôi</span></h1>
        <p className="about-subtitle">
          Trải nghiệm mua sắm thông minh, tiện lợi và uy tín chỉ với vài cú nhấp chuột.
        </p>

        <div className="about-section">
          <h2 className="about-heading">🌟 Về chúng tôi</h2>
          <p>
            <strong>Chúng tôi</strong> là nền tảng thương mại điện tử mang đến cho bạn hàng ngàn sản phẩm chất lượng
            từ các thương hiệu uy tín. Với đội ngũ nhiệt huyết và hệ thống công nghệ tiên tiến, chúng tôi cam kết
            giúp bạn mua sắm dễ dàng, tiết kiệm và an toàn tuyệt đối.
          </p>
        </div>

        <div className="about-section">
          <h2 className="about-heading">🎯 Sứ mệnh</h2>
          <p>
            Trở thành người bạn đồng hành tin cậy của mọi khách hàng trong hành trình mua sắm online. Chúng tôi không chỉ bán sản phẩm – chúng tôi xây dựng sự hài lòng và niềm tin.
          </p>
        </div>

        <div className="about-section">
          <h2 className="about-heading">💎 Vì sao chọn chúng tôi?</h2>
          <ul className="about-list">
            <li>✅ Hàng chính hãng – nguồn gốc rõ ràng</li>
            <li>🚚 Giao hàng nhanh chóng trên toàn quốc</li>
            <li>💬 Hỗ trợ khách hàng 24/7 tận tâm</li>
            <li>🔄 Đổi trả dễ dàng trong 7 ngày</li>
            <li>🏷️ Giá tốt kèm nhiều khuyến mãi hấp dẫn</li>
          </ul>
        </div>

        <p className="about-closing">
          Hãy để <strong>chúng tôi</strong> mang đến cho bạn một thế giới mua sắm hiện đại, an toàn và tràn đầy cảm hứng mỗi ngày!
        </p>
      </div>
    </div>
  );
}

export default About;
