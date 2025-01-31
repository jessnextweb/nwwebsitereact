import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import {
  FaHome,
  FaAndroid,
  FaApple,
  FaBullhorn,
  FaWrench,
  FaCogs,
  FaCode,
  FaPuzzlePiece,
  FaDesktop,
  FaGlobe,
  FaCloud,
  FaDatabase,
  FaShieldAlt,
  FaRocket,
  FaBriefcase,
  FaShoppingCart,
  FaSearchDollar,
  FaUserShield,
  FaMobileAlt,
  FaLaptopCode,
  s,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import FooterHero from "../../components/FooterHero";
// import ContentAndroid from "../../components/ContentAndroid";
// import AndroidHeader from "../../components/AndroidHeader";
import DigitalHeader from "./DigitalHeader";
import ContentDigital from "./ContentDigital";
import DigitalChoose from "./DigitalChoose";
import ServicesSupport from "./ServicesSupport";
import Header from "../../components/Header";

function DiHeader() {
  return (
    <div id="home">
      <Container fluid className="p-0">
        <Row className="justify-content-center">
          <Col className="text-center">{/* Optional header content */}</Col>
        </Row>
      </Container>

      {/* <Header /> */}

      {/* Navbar */}
      <Navbar bg="light" expand="xl" className="py-3" id="setresponsenav">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto" id="webnavbar">
              <Nav.Link href="/" className="active">
                <FaHome className="me-2" /> Home
              </Nav.Link>

              <Nav.Link href="/about">
                <FaUserShield className="me-2" /> About Us
              </Nav.Link>

              <NavDropdown
                title={
                  <>
                    <FaCogs className="me-2" /> Information Tech
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/professionalservice"
                  style={{ padding: "10px" }}
                >
                  <FaWrench className="me-2" /> Managed IT Service
                </NavDropdown.Item>

                <NavDropdown
                  title={
                    <>
                      <FaLaptopCode className="me-2" /> Software Development
                    </>
                  }
                  id="nested-nav-dropdown"
                >
                  <NavDropdown.Item as={Link} to="/softwaredevelopment">
                    <FaCode className="me-2" /> Software Development
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/softwareSolution">
                    <FaPuzzlePiece className="me-2" /> Software Solutions
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title={
                    <>
                      <FaBullhorn className="me-2" /> Digital Marketing
                    </>
                  }
                  id="nested-nav-dropdown"
                >
                  <NavDropdown.Item href="/websitedevelop">
                    <FaDesktop className="me-2" /> Website Development
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/seo">
                    <FaSearchDollar className="me-2" /> SEO
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/onlinemarketing">
                    <FaBullhorn className="me-2" /> Online Marketing
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title={
                    <>
                      <FaCloud className="me-2" /> Virtual
                    </>
                  }
                  id="nested-nav-dropdown"
                >
                  <NavDropdown.Item href="/cloud">
                    <FaCloud className="me-2" /> Cloud Solutions
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title={
                    <>
                      <FaMobileAlt className="me-2" /> Mobile App Development
                    </>
                  }
                  id="nested-nav-dropdown"
                >
                  <NavDropdown.Item as={Link} to="/android-app-development">
                    <FaAndroid className="me-2" /> Android App Development
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/iphone-app">
                    <FaApple className="me-2" /> iPhone App Development
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/ipad-app">
                    <FaApple className="me-2" /> iPad App Development
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/hybrid-app">
                    <FaMobileAlt className="me-2" /> Hybrid App Development
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/nativecloud">
                    <FaCloud className="me-2" /> Native Cloud App Development
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/lowcode">
                    <FaLaptopCode className="me-2" /> Lowcode App Development
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown.Item
                  as={Link}
                  to="/ecommerce"
                  style={{ padding: "10px" }}
                >
                  <FaShoppingCart className="me-2" /> E-Commerce Development
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/internet">
                  {" "}
                  <FaGlobe className="me-2" /> Internet Programming & Web
                  Applications{" "}
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/ict">
                <FaBriefcase className="me-2" /> ICT Professional Services
              </Nav.Link>
              <Nav.Link href="/datainten">
                <FaDatabase className="me-2" /> Data Intelligence
              </Nav.Link>
              <Nav.Link href="/cybersec">
                <FaShieldAlt className="me-2" /> Cyber Security Services
              </Nav.Link>
              <Nav.Link href="/emertech">
                <FaRocket className="me-2" /> Emerging Technologies
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <DigitalHeader />

      {/* Content Sections */}
      <ContentDigital />
      <DigitalChoose />
      <ServicesSupport />

      {/* Footer Sections */}
      <FooterHero />
      <Footer />
    </div>
  );
}

export default DiHeader;
