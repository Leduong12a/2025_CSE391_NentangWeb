// Contact.jsx
import React from "react";
import "./Contact.css"; // nếu có CSS riêng

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

      <div className="contact__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14898.99923238146!2d105.79533171684585!3d21.002663863493307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135adcaeeb3b5cf%3A0xe480873c00de7333!2sBeta%20Cinemas%20Thanh%20Xu%C3%A2n!5e0!3m2!1svi!2s!4v1745120717549!5m2!1svi!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>

      <div className="contact__infor">
        <div className="contact__item">
          <i className="fa fa-home"></i>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="contact__item">
          <i className="fa fa-phone"></i>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="contact__item">
          <i className="fa fa-envelope-open"></i>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
