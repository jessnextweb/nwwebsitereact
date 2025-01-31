// Footer.js code

import React from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaGooglePlus,
  FaInstagram,
  FaApple,
  FaAndroid,
  FaMapMarker,
  FaEnvelope,
  FaPhone,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footersec">
      <div className="footer-area">
        <Container>
          <Row>
            <Col md={4} sm={12}>
              <div className="footer-content">
                <div className="footer-head">
                  <div className="footer-logo">
                    <a href="https://www.nextweb.com.au">
                      <img
                        src="https://www.nextweb.com.au/wp-content/uploads/2023/07/Nextweblogo9-1.svg"
                        width="187"
                        height="56"
                        alt="App development agency Australia"
                        title="Mobile App Developers Australia"
                      />
                    </a>
                  </div>
                  <p className="footertext">
                    Nextweb Pty Ltd has pioneered digital transformation
                    initiatives for customers in Australia by constantly
                    improving its software products and services. Our
                    competitive edge stems from our deep focus, exceptional
                    efficiency, and a constant drive for technological
                    innovation.
                  </p>

                  <div class="elementor-widget-container">
                    <div class="elementor-social-icons-wrapper elementor-grid">
                      {" "}
                      <span
                        class="elementor-grid-item"
                        style={{ display: "flex", gap: "12px" }}
                      >
                        <img
                          src="assets/img/facebook.png"
                          alt="Pencil Icon"
                          style={{
                            width: "28px",
                            height: "28px",
                            color:
                              "linear-gradient(to right, rgb(155, 39, 176), rgb(255, 71, 141))",
                          }}
                        />
                        <img
                          src="assets/img/instagram.png"
                          alt="Pencil Icon"
                          style={{
                            width: "28px",
                            height: "28px",
                            color:
                              "linear-gradient(to right, rgb(155, 39, 176), rgb(255, 71, 141))",
                          }}
                        />
                        <img
                          src="assets/img/twitter.png"
                          alt="Pencil Icon"
                          style={{
                            width: "28px",
                            height: "28px",
                            color:
                              "linear-gradient(to right, rgb(155, 39, 176), rgb(255, 71, 141))",
                          }}
                        />
                        <img
                          src="assets/img/google.png"
                          alt="Pencil Icon"
                          style={{
                            width: "28px",
                            height: "28px",
                            color:
                              "linear-gradient(to right, rgb(155, 39, 176), rgb(255, 71, 141))",
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={2} sm={12}>
              <div className="footer-content">
                <div className="footer-head">
                  <h4>QUICK LINKS</h4>
                  <div className="footer-list">
                    <p style={{ listStyle: "none" }}>
                      <a
                        href="/"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        <i
                          className="fa fa-angle-right"
                          style={{ color: "#ff478d" }}
                        ></i>{" "}
                        Home
                      </a>
                    </p>
                    <p style={{ listStyle: "none" }}>
                      <a
                        href="about.html"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        <i
                          className="fa fa-angle-right"
                          style={{ color: "#ff478d" }}
                        ></i>{" "}
                        About Us
                      </a>
                    </p>
                    <p style={{ listStyle: "none" }}>
                      <a
                        href="testimonial.html"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        <i
                          className="fa fa-angle-right"
                          style={{ color: "#ff478d" }}
                        ></i>{" "}
                        Testimonial
                      </a>
                    </p>
                    <p style={{ listStyle: "none" }}>
                      <a
                        href="blog.html"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        <i
                          className="fa fa-angle-right"
                          style={{ color: "#ff478d" }}
                        ></i>{" "}
                        Blog
                      </a>
                    </p>
                    <p style={{ listStyle: "none" }}>
                      <a
                        href="quick-contact.html"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        <i
                          className="fa fa-angle-right"
                          style={{ color: "#ff478d" }}
                        ></i>{" "}
                        Contact Us
                      </a>
                    </p>
                    <p style={{ listStyle: "none" }}>
                      <a
                        href="careers.html"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        <i
                          className="fa fa-angle-right"
                          style={{ color: "#ff478d" }}
                        ></i>{" "}
                        Careers
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={2} sm={12}>
              <div className="footer-content">
                <div className="footer-head">
                  <h4>OUR SERVICES</h4>
                  <div className="footer-list">
                    <p style={{ listStyle: "none" }}>
                      <a
                        href="android.html"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        <i
                          className="fa fa-angle-right"
                          style={{ color: "#ff478d" }}
                        ></i>{" "}
                        UI/UX Design Services
                      </a>
                    </p>
                    <p style={{ listStyle: "none" }}>
                      <a
                        href="seo-services.html"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        <i
                          className="fa fa-angle-right"
                          style={{ color: "#ff478d" }}
                        ></i>
                        Mobile Website Design
                      </a>
                    </p>
                    <p style={{ listStyle: "none" }}>
                      <a
                        href="e-commerce.html"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        <i
                          className="fa fa-angle-right"
                          style={{ color: "#ff478d" }}
                        ></i>{" "}
                        Customer Relationship Management
                      </a>
                    </p>
                    <p style={{ listStyle: "none" }}>
                      <a
                        href="wordpress.html"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        <i
                          className="fa fa-angle-right"
                          style={{ color: "#ff478d" }}
                        ></i>
                        Android Application Development
                      </a>
                    </p>
                    <p style={{ listStyle: "none" }}>
                      <a
                        href="ppc-marketing.html"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        <i
                          className="fa fa-angle-right"
                          style={{ color: "#ff478d" }}
                        ></i>
                        Microsoft .Net Development
                      </a>
                    </p>
                    <p style={{ listStyle: "none" }}>
                      <a
                        href="social-media-marketing.html"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        <i
                          className="fa fa-angle-right"
                          style={{ color: "#ff478d" }}
                        ></i>
                        Artificial Intelligence
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={4} sm={12}>
              <div className="footer-content footer-conus">
                <div className="footer-head">
                  <h4>CONTACT US</h4>
                  <p>
                    <FaMapMarker style={{ color: "#ff478d" }} /> Level 4/9 Upton
                    St Bundall QLD 4217
                  </p>
                  <p>
                    <FaMapMarker style={{ color: "#ff478d" }} /> 5/1 Sands St,
                    Tweed Heads. NSW. 2485
                  </p>
                  <p>
                    <FaEnvelope style={{ color: "#ff478d" }} />{" "}
                    <a
                      href="mailto:info@nextweb.com.au"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      info@nextweb.com.au
                    </a>
                  </p>
                  <p>
                    <FaPhone style={{ color: "#ff478d" }} />{" "}
                    <a
                      href="tel:+61422275562"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      +614 2227 5562
                    </a>
                  </p>
                  <p>
                    <FaPhone style={{ color: "#ff478d" }} />{" "}
                    <a
                      href="tel:+61731023769"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      +617 3102 3769
                    </a>
                  </p>
                  <p>
                    <FaPhone style={{ color: "#ff478d" }} />{" "}
                    <a
                      href="tel:+61731023739"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      +617 3102 3739
                    </a>
                  </p>
                  <p>
                    <FaTwitch style={{ color: "#ff478d" }} /> ABN: 94 613 674
                    445
                  </p>
                  <p>
                    <FaTwitch style={{ color: "#ff478d" }} /> ACN: 613 674 445
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-area-bottom">
        <Container>
          <Row>
            <Col md={12}>
              {/* <div className="copyright text-center">
                <p>
                  Copyright © 2024
                  <a href="https://www.nextweb.com.au" style={{textDecoration:"none", color:"#ff478d "}}>Nextweb.com.au</a> All Rights Reserved
                </p>
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
