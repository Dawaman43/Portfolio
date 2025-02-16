import React from 'react';

const Contact = () => {
  const sendEmail = (event) => {
    event.preventDefault();
    const name = encodeURIComponent(event.target.name.value);
    const email = encodeURIComponent(event.target.email.value);
    const message = encodeURIComponent(event.target.message.value);

    const mailtoLink = `mailto:your-email@gmail.com?subject=Message from ${name}&body=${message}%0A%0AFrom: ${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="py-5" id="contact">
      <div className="container">
        <h2 className="text-center mb-4">Contact</h2>
        <form onSubmit={sendEmail} className="mx-auto" style={{ maxWidth: '600px' }}>
          <div className="form-group mb-3">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="3" placeholder="Enter your message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Message</button>
        </form>

        {/* Social Media Icons */}
        <div className="text-center mt-4">
          <a href="https://github.com/Dawaman43" target="_blank" rel="noopener noreferrer" className="mx-2">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://linkedin.com/in/dawit-worku-jima" target="_blank" rel="noopener noreferrer" className="mx-2">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://t.me/daw9t" target="_blank" rel="noopener noreferrer" className="mx-2">
            <i className="fab fa-telegram fa-2x"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
