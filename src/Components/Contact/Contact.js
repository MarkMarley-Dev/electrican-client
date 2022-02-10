import "./styles.css";
import { useRef, useState } from "react";
import { init } from "@emailjs/browser";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [formSubmit, setFormSubmit] = useState(false);

  init("user_ArD7nw8Rh6r2MfmsLdmHN");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mef349u",
        "template_ix3akjr",
        formRef.current,
        "user_ArD7nw8Rh6r2MfmsLdmHN"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormSubmit(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h1 className="contact-title">
        Leave a message and we'll call you back asap!
      </h1>
      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <input
          className="contact-form-input"
          type="text"
          placeholder="Name"
          name="user_name"
        />
        <input
          className="contact-form-input"
          type="text"
          placeholder="Subject"
          name="user_subject"
        />
        <input
          className="contact-form-input"
          type="text"
          placeholder="Email"
          name="user_email"
        />
        <textarea
          className="contact-form-textarea"
          rows="5"
          placeholder="Message"
          name="message"
        />
        <button className="contact-form-button">Submit</button>
        {formSubmit && (
          <p className="form-thankyou">Thank you we will be with you soon!</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
