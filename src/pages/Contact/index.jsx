import "./index.css"
function Contact() {
  return (
    <>
      <div className="contact__form">
        <form action="" method="get">
          <input type="text" name="firstName" placeholder="Name" />
          <input type="text" name="lastName" placeholder="Last Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="tel" name="phone" placeholder="Phone" />
          <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
