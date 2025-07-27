import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function ContactUs() {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zwdluwm",     // ← Replace with actual service ID
        "template_9fna9yt",    // ← Replace with actual template ID
        formRef.current,
        "D1KmKcvfCd8MfoR5Y"      // ← Replace with actual public key
      )
      .then(
        (result) => {
          console.log("Message Sent!", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Failed to send message", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="ContactGrandParent">
      <div className="MyContactHeading">
        <h1>Get In Touch</h1>
        <p>
          Have a project in mind or just want to chat? I'd love to hear from
          you.
        </p>
      </div>

      <div className="ContactParent">
        <div className="ContactForm">
          <h3>Send me a message</h3>
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="FormRow">
              <div className="FormGroup">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="FormGroup">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="FormGroup">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="FormGroup">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Let's work together!"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="FormGroup">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Tell me about your project or just say hello..."
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                required
              />
            </div>

            {/* ✅ Hidden full name field for EmailJS */}
            <input
              type="hidden"
              name="name"
              value={`${formData.firstName} ${formData.lastName}`}
            />

            <button type="submit" className="SendButton">
              <FontAwesomeIcon icon={faPaperPlane} />
              Send Message
            </button>
          </form>
        </div>

        <div className="ContactInfo">
          <div className="ContactDetails">
            <h3>Contact Information</h3>

            <div className="ContactItem">
              <div className="ContactIcon email">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="ContactText">
                <h4>Email</h4>
                <p>bilalarif3739@gmail.com</p>
              </div>
            </div>

            <div className="ContactItem">
              <div className="ContactIcon phone">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="ContactText">
                <h4>Phone</h4>
                <p>+92 (310) 4024479</p>
              </div>
            </div>

            <div className="ContactItem">
              <div className="ContactIcon location">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div className="ContactText">
                <h4>Location</h4>
                <p>Lahore, Pakistan</p>
              </div>
            </div>
          </div>

          <div className="SocialMedia">
            <h3>Social Media</h3>
            <div className="SocialLinks">
              <a
                href="https://github.com/bilalarif3739"
                target="_blank"
                rel="noreferrer"
                className="SocialLink github"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/bilal-arif-144311215/"
                target="_blank"
                rel="noreferrer"
                className="SocialLink linkedin"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="AvailabilityStatus">
            <div className="StatusIndicator"></div>
            <div className="StatusText">
              <h4>Available for work</h4>
              <p>
                I'm currently available for freelance projects and full-time
                opportunities. Let's discuss how we can work together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
