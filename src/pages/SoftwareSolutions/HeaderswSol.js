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
  FaCloud,
  FaDatabase,
  FaShieldAlt,
  FaRocket,
  FaBriefcase,
  FaShoppingCart,
  FaSearchDollar,
  FaUserShield,
  FaMobileAlt,
  FaArrowRight,
  FaLaptopCode,
  FaLaptop,
  FaGlobe,
  FaCodeBranch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import FooterHero from "../../components/FooterHero";
// import ContentAndroid from "../../components/ContentAndroid";
// import AndroidHeader from "../../components/AndroidHeader";
import HeaderSoftware from "./HeaderswSolution";
import ContentSoftware from "./ContentswSolution";
import ChooseSoftware from "./ChooseswSolution";
import SupportSoftware from "./SupportswSol";
import Header from "../../components/Header";

function HeaderswSol() {
  return (
    <div id="home">
      <Container fluid className="p-0">
        <Row className="justify-content-center">
          <Col className="text-center">{/* Optional header content */}</Col>
        </Row>
      </Container>

      {/* Navbar */}
      <Navbar bg="light" expand="xl" className="py-3" id="setresponsenav">
        <Container>
          {/* Logo */}
          <Navbar.Brand href="/">
            <img
              src="assets/img/logo-icon.png"
              alt="Logo"
              style={{ height: "40px" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-links" id="webnavbar">
              {/* Links with Icons */}
              <Nav.Link href="/" className="me-3 nav-link-item">
                <FaHome className="me-2 icon" /> Home
              </Nav.Link>
              <Nav.Link href="/about" className="me-3 nav-link-item">
                <FaUserShield className="me-2 icon" />
                About Us
              </Nav.Link>
              {/* Other navigation links and dropdowns */}
              <NavDropdown
                title={
                  <>
                    <FaCogs className="me-2 icon" /> Information Tech
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/professionalservice"
                  style={{ padding: "10px" }}
                >
                  <FaWrench className="me-2 icon" /> Managed IT Service
                </NavDropdown.Item>

                <NavDropdown
                  title={
                    <>
                      <FaLaptopCode className="me-2 icon" /> Software
                      Development
                    </>
                  }
                  id="nested-nav-dropdown"
                >
                  <NavDropdown.Item as={Link} to="/softwaredevelopment">
                    <FaCode className="me-2 icon" /> Software Development
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/softwareSolution">
                    <FaPuzzlePiece className="me-2 icon" />
                    Software Solutions
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title={
                    <>
                      <FaBullhorn className="me-2 icon" /> Digital Marketing
                    </>
                  }
                  id="nested-nav-dropdown"
                >
                  <NavDropdown.Item href="/websitedevelop">
                    <FaDesktop className="me-2 icon" /> Website Development
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/seo">
                    <FaSearchDollar className="me-2 icon" /> SEO
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/onlinemarketing">
                    <FaBullhorn className="me-2 icon" /> Online Marketing
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title={
                    <>
                      <FaCloud className="me-2 icon" /> Virtual
                    </>
                  }
                  id="nested-nav-dropdown"
                >
                  <NavDropdown.Item href="/cloud">
                    <FaCloud className="me-2 icon" /> Cloud Solutions
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title={
                    <>
                      <FaMobileAlt className="me-2 icon" /> Mobile App
                      Development
                    </>
                  }
                  id="nested-nav-dropdown"
                >
                  <NavDropdown.Item as={Link} to="/android-app-development">
                    <FaAndroid className="me-2 icon" /> Android App Development
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/iphone-app">
                    <FaApple className="me-2 icon" /> iPhone App Development
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/ipad-app">
                    <FaApple className="me-2 icon" /> iPad App Development
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/hybrid-app">
                    <FaMobileAlt className="me-2 icon" /> Hybrid App Development
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/nativecloud">
                    <FaCloud className="me-2 icon" /> Native Cloud App
                    Development
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/lowcode">
                    <FaLaptopCode className="me-2 icon" /> Lowcode App
                    Development
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown.Item
                  as={Link}
                  to="/ecommerce"
                  style={{ padding: "10px" }}
                >
                  <FaShoppingCart className="me-2 icon" /> E-Commerce
                  Development
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/internet">
                  {" "}
                  <FaGlobe className="me-2 icon" /> Internet Programming & Web
                  Applications{" "}
                </NavDropdown.Item>
              </NavDropdown>

              {/* Additional Links */}
              <Nav.Link href="/ict" className="me-3 nav-link-item">
                <FaBriefcase className="me-2 icon" />
                ICT Professional Services
              </Nav.Link>
              <Nav.Link href="/datainten">
                <FaDatabase className="me-2 icon" />
                Data Intelligence
              </Nav.Link>
              <Nav.Link href="/cybersec">
                <FaShieldAlt className="me-2 icon" /> Cyber Security Services
              </Nav.Link>
              <Nav.Link href="/emertech">
                <FaRocket className="me-2 icon" /> Emerging Technologies
              </Nav.Link>
              {/* Other links */}
              <div className="d-flex align-items-center ms-auto">
                <Button
                  variant="primary"
                  size="lg"
                  id="getquote"
                  className="d-none d-md-inline-block"
                >
                  Get a quote <FaArrowRight />
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <HeaderSoftware />

      {/* Content Sections */}
      <ContentSoftware />
      <ChooseSoftware />
      <SupportSoftware />

      {/* Footer Sections */}
      <FooterHero />
      <Footer />
    </div>
  );
}

export default HeaderswSol;
