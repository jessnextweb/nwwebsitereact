import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const IpadChoose = () => {
  return (
    <div className="choosedigi">
      <Container>
        {/* Header Section */}
        <Row className="text-center">
          <Col xs={12}>
            <p>Nextweb Pty Ltd</p>
            <h2>Why Choose Nextweb for iPad App Development?</h2>
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
              <i className="fa-solid fa-circle-check me-2 right"></i>
              Applications for Different Requirements
            </h5>
            <p className="mb-4">
              Nextweb’s iPad Application development team is adept at creating
              applications for various industries and sectors. We can build
              productivity tools, entertainment apps, education apps, gaming
              apps, media streaming apps, and many more.
            </p>
            <h5 mt-3 mb-2>
              <i className="fa-solid fa-circle-check me-2 right"></i>iPad
              Developer's Expert Skillset
            </h5>
            <p className="mb-4">
              Nextweb’s iPad App developers have honed their skills to use
              Apple’s Xcode integrated development environment (IDE) and various
              development tools provided by Apple, such as Interface Builder for
              designing user interfaces and Core Data for data storage and
              retrieval.
            </p>
            <h5 mt-3 mb-2>
              <i className="fa-solid fa-circle-check me-2 right"></i>Rigorous
              Testing and Optimisation
            </h5>
            <p className="mb-4">
              We believe that rigorous testing and optimisation are crucial for
              iPad app development. Our iPad development team tests the app on
              various models, screen resolutions, and iOS versions to ensure
              compatibility and optimum performance.
            </p>
            <h5 mt-3 mb-2>
              <i className="fa-solid fa-circle-check me-2 right"></i>Intuitive
              and Responsive App Designs
            </h5>
            <p className="mb-4">
              Nextweb’s app developers can optimise your app’s metadata, such as
              its title, description, and keywords, to improve visibility on the
              App Store. They can build beautiful iPad Apps that incorporate
              design elements like touch interaction, split screen views, and
              slide-over capabilities that enhance user engagement.
            </p>
          </Col>
        </Row>

        {/* Contact Section */}
        <Row>
          <Col xs={12}>
            <p>
              <p className="mb-4">
                Nextweb will meticulously design and build iPad applications to
                help your business grow exponentially. We will prioritise data
                security and user privacy by diligently complying with data
                protection regulations. Our developers will help keep your app
                updated by adding new features, fixing bugs, and ensuring
                compatibility with the latest iPadOS versions.
              </p>
              <p className="mb-4">
                We are excited to help you build that killer iPad for your
                business as part of your digital transformation journey. If you
                need our technical team to speak to you about your requirement,
                then please fill out our online enquiry form or email us at
                info@nextweb.com.au today!
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

export default IpadChoose;
