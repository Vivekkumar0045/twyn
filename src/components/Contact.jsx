import React from "react";

const Contact = () => {
  return (
    <>
      <section className="section contact" aria-label="contact">
        <div className="container">
          <h2 className="headline-md section-title text-center">
            Have Question ? Get in touch!
          </h2>

          <p className="body-md section-text text-center">
            Hope you like my website
          </p>

          <a href="#" className="btn btn-primary">
            <ion-icon name="call-outline" aria-hidden="true"></ion-icon>

            <a href="https://aboutvivek.netlify.app/#services" className="span">Contact us</a>
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
