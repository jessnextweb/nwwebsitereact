import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FaArrowRight, FaPhone, FaEnvelope } from "react-icons/fa";
import "../App.css";
import { Link } from "react-router-dom";
import Marquee from "./Marquee";

const Header = () => {
  return (
    <header id="header" className="header position-relative">
      {/* <Marquee />
       */}
      {/* Top Navbar */}
      <Navbar
        bg="light"
        expand="xl"
        className="border-bottom"
        id="headerdetails"
      >
        <Container
          fluid
          className="d-flex justify-content-between responsive-padding headeraddress"
          // style={{ padding: "0px 400px 0px 400px" }}
        >
          <Navbar.Brand href="index.html">
            <img
              src="assets/img/logo-icon.png"
              alt="AgriCulture"
              width="210px"
              height="60px"
            />
          </Navbar.Brand>
          <div className="align-items-center emailcontacthide">
            {/* Phone Info */}
            <div className="text-center me-4">
              <a
                href="#login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <FaPhone style={{ fill: "#891580" }} /> 1800 365 247
                <br />
                <small>Customer Support</small>
              </a>
            </div>
            {/* Email Info */}
            <div className="text-center me-4">
              <a
                href="#login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <FaEnvelope style={{ fill: "#891580" }} /> Email Assistance
                <br />
                <small>info@nextweb.com.au</small>
              </a>
            </div>
            {/* Get a Quote Button */}
            <Button variant="primary" size="lg" id="getquote">
              Get a quote <FaArrowRight />
            </Button>
          </div>
        </Container>
      </Navbar>

      {/* Main Navbar */}
    </header>
  );
};

export default Header;
