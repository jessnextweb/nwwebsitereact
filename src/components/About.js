import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Button from "react-bootstrap/Button";

function About() {
  return (
    <section id="about" className="about section">
      <div className="content1">
        <Container>
          <Row>
            {/* Image Section */}
            <Col lg={6} className="mb-4 mb-lg-0">
              <img
                src="assets/img/1.jpg"
                alt="Image"
                className="img-fluid img-overlap"
                data-aos="zoom-out"
                style={{ paddingTop: "90px" }}
              />
            </Col>
            {/* Text Content Section */}
            <Col
              lg={5}
              className="ml-auto"
              data-aos="fade-up"
              data-aos-delay="100"
              id="aboutnextweb"
            >
              {/* <h3 className="content-subtitle text-white">Why Choose Us</h3> */}
              <h1 className="content-title mb-4">About Nextweb</h1>
              <p className="demo opacity-60">
                At Nextweb, we are passionate about creating innovative and
                user-centric web and mobile applications that help businesses
                thrive in the digital world. Our team of skilled developers and
                designers is dedicated to transforming your business ideas into
                reality, delivering cutting-edge solutions tailored to your
                specific requirements in Australia.
              </p>
              <div className="levels">
                <div className="mb-3">
                  {/* <h3 className="text-white mb-4">Our Achievements</h3> */}
                  <h5 className="text-white">17+ Years of IT Expertise</h5>
                  <ProgressBar
                    now={88}
                    label="88%"
                    className="custom-progress-bar"
                  />
                </div>
                <div className="mb-3">
                  <h5 className="text-white">20+ CRM Software Users</h5>
                  <ProgressBar
                    now={88}
                    label="90%"
                    className="custom-progress-bar"
                  />
                </div>
                <div className="mb-3">
                  <h5 className="text-white">200+ Android & iPhone Apps</h5>
                  <ProgressBar
                    now={88}
                    label="78%"
                    className="custom-progress-bar"
                  />
                </div>
                <div className="mb-3">
                  <h5 className="text-white">10000+ Websites Built</h5>
                  <ProgressBar
                    now={88}
                    label="70%"
                    className="custom-progress-bar"
                  />
                </div>
              </div>
              <div style={{ paddingTop: "50px" }}>
                <Button
                  variant="success"
                  size="lg"
                  href="#"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #9b27b0, #ff478d)",
                    border: "#000",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Contact us
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default About;
