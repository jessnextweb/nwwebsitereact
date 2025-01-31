import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
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
  FaLaptopCode,
  FaGlobe,
} from "react-icons/fa";

function HeroSection() {
  return (
    <div id="home">
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
                className="responsivedropdown"
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

      <header id="header">
        <div className="top-carousel">
          <Carousel id="work">
            {/* Slide 1 */}
            <Carousel.Item>
              <div className="slide-content position-relative">
                <img
                  className="d-block w-100"
                  src="assets/img/bg1.jpeg"
                  alt="First slide"
                />
                <div className="content-overlay text-left">
                  <h1 id="homehead">
                    DIGITAL TRANSFORMATION <br />{" "}
                    <span className="headerText">TECHNOLOGIES </span>
                  </h1>
                  <p className="col-md-5 adjust">
                    <span id="subheadtext">
                      Digital Innovation for <br /> improving Operational
                      Performance
                    </span>
                  </p>
                  <Button
                    variant="success"
                    size="lg"
                    href="#"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #9b27b0, #ff478d)",
                      borderRadius: "1px",
                    }}
                  >
                    About us
                  </Button>
                </div>
              </div>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
              <div className="slide-content position-relative">
                <img
                  className="d-block w-100"
                  src="assets/img/bg2.jpeg"
                  alt="Second slide"
                />
                <div className="content-overlay text-left">
                  <h1 id="homehead">
                    DIGITAL TRANSFORMATION <br />{" "}
                    <span className="headerText">TECHNOLOGIES </span>
                  </h1>
                  <p className="col-md-5 adjust">
                    <span id="subheadtext">
                      Digital Innovation for <br /> improving Operational
                      Performance
                    </span>
                  </p>
                  <Button
                    variant="success"
                    size="lg"
                    href="#"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #9b27b0, #ff478d)",
                    }}
                  >
                    About us
                  </Button>
                </div>
              </div>
            </Carousel.Item>

            {/* Slide 3 */}
            {/* <Carousel.Item>
              <div className="slide-content position-relative">
                <img
                  className="d-block w-100"
                  src="assets/img/bg3.png"
                  alt="Third slide"
                />
                <div className="content-overlay text-left">
                  <h1>
                    BUILD
                    <span>
                      {" "}
                      YOUR
                      <br /> BRAND
                    </span>
                  </h1>
                  <p className="col-md-5 adjust">
                    Take the first step to establish a strong digital presence
                    with solutions that make your brand stand out in the crowd.
                  </p>
                  <Button variant="warning" size="lg" href="#">
                    Join Us!
                  </Button>
                </div>
              </div>
            </Carousel.Item> */}
          </Carousel>
        </div>
        <div className="skew-header"></div>
      </header>
    </div>
  );
}

export default HeroSection;
