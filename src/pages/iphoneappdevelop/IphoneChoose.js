import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const IphoneChoose = () => {
  return (
    <div className="choosedigi">
      <Container>
        {/* Header Section */}
        <Row className="text-center">
          <Col xs={12}>
            <p>Nextweb Pty Ltd</p>
            <h2>Why Choose Us for iPhone App Development?</h2>
          </Col>
        </Row>

        {/* Content Section */}
        <Row className="mb-2">
          <Col xs={12}>
            <p>
              {/* You can trust Nextweb to deliver reliable and stable Android apps
              for your industry. Some of the advantages of employing our Android
              app development expertise include: */}
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
              <i className="fa-solid fa-circle-check me-2 right"></i>Superior
              UI/UX Design
            </h5>
            <p className="mb-4">
              Nextweb’s user interface (UI) and user experience (UX) designs are
              intuitive with a user-friendly interface. We strive to adhere to
              iOS design principles, thus offering users a fast and enjoyable
              user experience.
            </p>
            <h5 mt-3 mb-2>
              <i className="fa-solid fa-circle-check me-2 right"></i>Leverage
              iPhone Features
            </h5>
            <p className="mb-4">
              iPhone apps we develop leverage the unique features and
              capabilities of iPhone devices. It includes utilising touch
              gestures, camera and phone capabilities, location services, and
              biometric authentication such as Face ID and Touch ID. Besides,
              push notifications and Siri integration.
            </p>
            <h5 mt-3 mb-2>
              <i className="fa-solid fa-circle-check me-2 right"></i>Performance
              Optimisation
            </h5>
            <p className="mb-4">
              Nextweb’s iPhone apps are fine tuned for optimum load times,
              minimising lag, and use system resources efficiently. We optimise
              your app’s metadata, such as its title, description, and relevant
              keywords, to improve its visibility and discoverability on the
              Apple App Store.
            </p>
            <h5 mt-3 mb-2>
              <i className="fa-solid fa-circle-check me-2 right"></i>Rigorous
              Testing
            </h5>
            <p className="mb-4">
              The apps we develop are compatible with different iPhone models
              and screen resolutions. We perform rigorous testing so that the
              apps function seamlessly on iPhone devices, run smoothly, and
              respond quickly to user interactions.
            </p>
          </Col>
        </Row>

        {/* Contact Section */}
        <Row>
          <Col xs={12}>
            <p>
              <p className="mb-4">
                Do you have an iPhone app idea in mind for your business? Then
                kindly speak to our technical team. We will review the iPhone
                app requirement to create a feasible project plan for your app.
                Please fill out our enquiry form or email us at
                info@nextweb.com.au for a quick response.
              </p>
              {/* <p className="mb-4">
                If you need to discuss your business idea for creating an
                Android app for your product or service. Please do not hesitate
                to speak to our technical team. We will go through the nuances
                of your requirements to create a detailed project plan for them.
                Please fill out our enquiry form or email us at
                info@nextweb.com.au
              </p> */}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IphoneChoose;
