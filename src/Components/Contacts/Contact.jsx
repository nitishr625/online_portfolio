import React from "react";
import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cjbspbb",
        "template_k5zp93p",
        form.current,
        "_Hl7K9eCC8wZ7SFe8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    alert("Message Sent");
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div id="main_container">
        <div className="conainer contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineMail className="contact__option-icons" />
              <h4>Emai</h4>
              <h5>nitishr25@gmail.com</h5>
              <a href="mailto:nitishr25@gmail.com" target="_blank">
                Send a Message
              </a>
            </article>

            <article className="contact__option">
              <FaFacebookMessenger className="contact__option-icons" />
              <h4>Messenger</h4>
              <h5>nitishr625</h5>
              <a href="https://m.me/nitishr625" target="_blank">
                Send a Message
              </a>
            </article>

            <article className="contact__option">
              <FaWhatsapp className="contact__option-icons" />
              <h4>Whatsapp</h4>
              <h5>8660238501</h5>
              <a
                href="https://api.whatsapp.com/send?phone=8660238501"
                target="_blank"
              >
                Send a Message
              </a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input type="text" name="email" placeholder="Your Email" required />
            <textarea
              name="message"
              id=""
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
