import "./Contact.css";

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been submitted.");
  };


  return (
    <div className="contact-container">

      <div className="contact-header">

        <h1>Contact Me</h1>

        <p>
          Have a question or suggestion?
          Feel free to reach out using the form below.
        </p>

      </div>


      <div className="contact-content">

        {/* Contact Form */}

        <div className="contact-form">

          <h2>Send a Message</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              placeholder="Subject"
              required
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>


        {/* Contact Information */}

        <div className="contact-info">

          <h2>Get in Touch</h2>

          <p>
            <strong>Email</strong>
            <br />
            lakshya@example.com
          </p>


          <p>
            <strong>Phone</strong>
            <br />
            +977-9876543210
          </p>


          <p>
            <strong>Address</strong>
            <br />
            Kathmandu, Nepal
          </p>


          <div className="social-links">

            <a href="#">
              Facebook
            </a>

            <a href="#">
              Instagram
            </a>

            <a href="#">
              LinkedIn
            </a>

            <a href="#">
              GitHub
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;