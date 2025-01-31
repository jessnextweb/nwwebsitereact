import React from "react";
import { Container, Row, Col, Form, Button, Figure } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contactsec">
      <Col
        lg={5}
        md={6}
        sm={12}
        className="contact-info__wrapper gradient-brand-color p-4 order-lg-2 order-1 text-light"
        style={{ margin: "20px auto", textAlign: "center" }}
      >
        {" "}
        \
        <h3 className="mb-4" id="colloborate">
          Let’s Collaborate
        </h3>
        <ul
          className="contact-info__list"
          style={{
            listStyle: "none",
            padding: 0,
            textAlign: "left",
            color: "#000",
          }}
        >
          <li className="mb-3">
            <FaMapMarkerAlt className="me-2" />
            <strong>Addresses:</strong>
            <br />
            Level 4/91 Upton St Bundall QLD 4217
            <br />
            5/1 Sands St, Tweed Heads. NSW. 2485
            <br />
            Unit 304/101 Overton Rd Williams Landing VIC 3027
            <br />
            103/9 Bay Street Southport, QLD 4215
          </li>
          <li className="mb-3">
            <FaEnvelope className="me-2" />
            info@nextweb.com.au
          </li>
          <li className="mb-3">
            <FaPhone className="me-2" />
            1800 365 247
          </li>
          <li className="mb-3">
            <FaMapMarkerAlt className="me-2" />
            <strong>Business</strong>
            <br />
            ABN : 94 613 674 445
            <br />
            ACN : 613 674 445
          </li>
        </ul>
        {/* <Figure className="figure d-none d-md-block position-absolute m-0 opacity-06 z-index-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="444px"
            height="626px"
          >
            <defs>
              <linearGradient
                id="PSgrad_1"
                x1="0%"
                x2="81.915%"
                y1="57.358%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgb(255,255,255)" stopOpacity="1" />
                <stop offset="100%" stopColor="rgb(0,54,207)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              fillRule="evenodd"
              opacity="0.302"
              fill="rgb(72, 155, 248)"
              d="M816.210,-41.714 L968.999,111.158 L-197.210,1277.998 L-349.998,1125.127 L816.210,-41.714 Z"
            ></path>
            <path
              fill="url(#PSgrad_1)"
              d="M816.210,-41.714 L968.999,111.158 L-197.210,1277.998 L-349.998,1125.127 L816.210,-41.714 Z"
            ></path>
          </svg>
        </Figure> */}
      </Col>

      <Container className="p-3" style={{ flex: 1, maxWidth: "800px" }}>
        <div className="contact__wrapper shadow-lg p-4">
          <Row>
            <Col lg={12}>
              <h3 className="text-center mb-4" style={{ fontFamily: "oswald" }}>
                Contact Us
              </h3>
            </Col>
            <Col lg={12}>
              <Form noValidate>
                <Row>
                  <Col md={6} sm={12} className="mb-3">
                    <Form.Group controlId="firstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        placeholder="Jean"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} sm={12} className="mb-3">
                    <Form.Group controlId="lastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        placeholder="Dupont"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} sm={12} className="mb-3">
                    <Form.Group controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="jean@dupont.com"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} sm={12} className="mb-3">
                    <Form.Group controlId="phone">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        placeholder="+32 71 123 456"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={12} className="mb-3">
                    <Form.Group controlId="message">
                      <Form.Label>Project Requirements</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        rows={4}
                        placeholder="Bonjour, j'aimerais…"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={12} className="mb-3 text-center">
                    <Button type="submit" className="w-100 btn-primary">
                      Send
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
