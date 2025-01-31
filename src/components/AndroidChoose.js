import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AndroidChoose = () => {
  return (
    <div className="choosedigi">
      <Container>
        {/* Header Section */}
        <Row className="text-center">
          <Col xs={12}>
            <p>Nextweb Pty Ltd</p>
            <h2>Why Choose Nextweb, Australia?</h2>
          </Col>
        </Row>

        {/* Content Section */}
        <Row className="mb-2">
          <Col xs={12}>
            <p>
              You can trust Nextweb to deliver reliable and stable Android apps
              for your industry. Some of the advantages of employing our Android
              app development expertise include:
            </p>
          </Col>
        </Row>

        {/* Deep Local Expertise */}
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center">
            <div className="image-stack">
              <img
                src="assets/img/chooseandroid.jpeg"
                alt="Transparent Service"
                className="img-fluid top-image"
                style={{
                  maxWidth: "100%",
                  borderRadius: "10% 10% 10% 10% / 10% 10% 10% 10%",
                  width: "590px",
                  height: "590px",
                }}
              />
            </div>
          </Col>
          <Col xs={12} md={6} id="contentcol" className="contentchoosepage">
            <h5 className="mt-3 mb-2">
              <i className="fa-solid fa-circle-check me-2 right"></i>Innovative
              UI/UX Design
            </h5>
            <p className="mb-4">
              Nextweb’s UI/UX designers are proficient in creating wireframes
              and mockups to visually imagine an app’s user interface (UI) and
              user experience (UX). Design elements, like colours, icons, and
              layouts, are meticulously crafted during app design.
            </p>
            <h5 mt-3 mb-2>
              <i className="fa-solid fa-circle-check me-2 right"></i>Expertise
              and Experience Solutions
            </h5>
            <p className="mb-4">
              Nextweb’s Android developers are well-versed in the Java and
              Kotlin programming languages. It helps them handle complex app
              development challenges efficiently.
            </p>
            <h5 mt-3 mb-2>
              <i className="fa-solid fa-circle-check me-2 right"></i>Portfolio
              of Successful Apps
            </h5>
            <p className="mb-4">
              Nextweb has an impressive portfolio of successful Android apps
              demonstrating its ability to create top-notch, user-friendly, and
              feature-rich applications across different industries.
            </p>
            <h5 mt-3 mb-2>
              <i className="fa-solid fa-circle-check me-2 right"></i>Quality
              Assurance
            </h5>
            <p className="mb-4">
              Our robust quality assurance and testing processes help us
              thoroughly test the apps for bugs, performance issues, and
              compatibility across various devices and Android versions.
            </p>
          </Col>
        </Row>

        {/* Contact Section */}
        <Row>
          <Col xs={12}>
            <p>
              <p className="mb-4">
                Nextweb is passionate about creating innovative and user-centric
                Android applications that help businesses thrive online. Our
                highly skilled developers and designers love to transform your
                app idea into a reality. We have consistently delivered
                cutting-edge solutions tailored to the specific needs of your
                industry.
              </p>
              <p className="mb-4">
                If you need to discuss your business idea for creating an
                Android app for your product or service. Please do not hesitate
                to speak to our technical team. We will go through the nuances
                of your requirements to create a detailed project plan for them.
                Please fill out our enquiry form or email us at
                info@nextweb.com.au
              </p>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AndroidChoose;
