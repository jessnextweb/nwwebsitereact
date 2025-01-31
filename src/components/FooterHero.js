import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaBehance,
  FaPinterestP,
} from "react-icons/fa";

function FooterHero() {
  return (
    <div id="home">
      <Container fluid className="p-0">
        <Row className="justify-content-center">
          <Col className="text-center">
            <div className="social-icons mobile-responsive">
              <Button
                variant="link"
                href="https://www.facebook.com/NextwebAustralia"
                target="_blank"
                className="social-btn"
                id="facebookbutton"
              >
                <span className="react-icon">
                  <FaFacebookF aria-hidden="true" />
                </span>
                <span>Facebook</span>
              </Button>

              <Button
                variant="link"
                href="https://twitter.com/nextwebbrisbane"
                target="_blank"
                className="social-btn"
                id="twitterbutton"
              >
                <span className="react-icon">
                  <FaTwitter aria-hidden="true" />
                </span>
                <span>Twitter</span>
              </Button>

              <Button
                variant="link"
                href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x6b915a1c4d229965:0xc35c0758ac0a2adf?source=g.page.default"
                target="_blank"
                className="social-btn"
                id="googlebutton"
              >
                <span className="react-icon">
                  <FaGooglePlusG aria-hidden="true" />
                </span>
                <span>Google+</span>
              </Button>

              <Button
                variant="link"
                href="https://www.instagram.com/nextweb.brisbane/"
                target="_blank"
                className="social-btn"
                id="insta"
              >
                <span className="react-icon">
                  <FaInstagram aria-hidden="true" />
                </span>
                <span>Instagram</span>
              </Button>

              <Button
                variant="link"
                href="#"
                className="social-btn"
                id="behance"
              >
                <span className="react-icon">
                  <FaBehance aria-hidden="true" />
                </span>
                <span>Behance</span>
              </Button>

              <Button
                variant="link"
                href="#"
                className="social-btn"
                id="printerest"
              >
                <span className="react-icon">
                  <FaPinterestP aria-hidden="true" />
                </span>
                <span>Pinterest</span>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <header id="header">
        <div className="top-caro">
          <div className="slide-content position-relative d-none d-sm-block">
            <img
              className="d-block w-100"
              src="https://www.nextweb.com.au/wp-content/uploads/2023/08/Dont-late-join100.jpg"
              alt="Third slide"
            />
            <div className="content-overlay text-left">
              <h1 style={{ fontFamily: "oswald" }}>
                TECHNICAL
                <span>
                  {" "}
                  COLLABORATION
                  <br /> & TEAMWORK
                </span>
              </h1>
              <div>
                <Button
                  variant="primary"
                  className="text-white"
                  id="btn-2 contactusbutton"
                >
                  CONTACT US NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="skew-header"></div>
      </header>
    </div>
  );
}

export default FooterHero;
