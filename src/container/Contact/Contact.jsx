import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { AppWrap } from '../../wrapper';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2w85rh5', 'template_6pz7kjx', form.current, '4MXOLq7yQb-JsGt5x')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section className="contact-page">
      <div className="container">
        <h2 className="contact-heading"><span>Feedback</span></h2>
      </div>
      <form ref={form} onSubmit={sendEmail} className="form-group">
        <input type="text" placeholder="Full Name" name="user_name" className="form-input" required />
        <input type="email" placeholder="Email" name="user_email" className="form-input" required />
        <input type="text" placeholder="Subject" name="subject" className="form-input" required />
        <textarea name="message" placeholder='Leave your experience' cols="30" rows="10" className="form-input" required></textarea>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </section>
  );
};

export default AppWrap(Contact,'feedback');
