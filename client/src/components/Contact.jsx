import React from "react";
import Nav from "./Nav";

function Contact() {

  return (
    <div>
      <Nav />
      <div>
        <h1 className="dashbord">Contact</h1>
      </div>
      <section className="mb-4 co">

          <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
              a matter of hours to help you.</p>

          <div className="row">

              <div className="col-md-9 mb-md-0 mb-5 ">
                  <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                      <div className="row">

                          <div className="col-md-6">
                              <div className="md-form mb-0">
                              <h2 for="name" className="ch2">Your name</h2><br></br><br></br>
                                  <input placeholder="Name" type="text" id="name" name="name" className="form-control"/>

                              </div>
                          </div>

                          <div className="col-md-6">
                              <div className="md-form mb-0">
                              <h2 for="email" className="ch2">Your email</h2><br></br><br></br>
                                  <input placeholder="Your email" type="text" id="email" name="email" className="form-control"/>
                              </div>
                          </div>

                      </div>

                      <div className="row">
                          <div className="col-md-12">
                              <div className="md-form mb-0">
                              <h2 for="subject" className="ch2">Subject</h2><br></br><br></br>
                                  <input placeholder="Subject" type="text" id="subject" name="subject" className="form-control"/>

                              </div>
                          </div>
                      </div>

                      <div className="row">

                          <div className="col-md-12">

                              <div className="md-form">
                              <h2 for="message" className="ch2">Your message</h2><br></br><br></br>
                                  <textarea placeholder="Your message" type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                              </div>
<br></br><br></br>
                          </div>
                      </div>

                  </form>

                  <div className="text-center text-md-left">
                      <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                  </div>
                  <div className="status"></div>
              </div>

              <div className="col-md-3 text-center">
                  <ul className="list-unstyled mb-0">
                      <li><i className="fas fa-map-marker-alt fa-2x"></i>
                          <p>Kolkata, CA94126, India</p>
                      </li>

                      <li><i className="fas fa-phone mt-4 fa-2x"></i>
                          <p>9573350052</p>
                      </li>

                      <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                          <p>Criminal_Records_Management@gmail.com</p>
                      </li>
                  </ul>
              </div>

          </div>

      </section>
    </div>
  );
}

export default Contact;
