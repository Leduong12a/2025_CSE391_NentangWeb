
import "./index.css"; // nếu có CSS riêng

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>CONTACT</h2>

      <div className="contact__form">
        <form action="" method="get">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone" />
          <textarea cols="30" rows="10" placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>

      

      
    </section>
  )
}
export default Contact
