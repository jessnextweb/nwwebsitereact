import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const LowcodeChoose = () => {
  return (
    <div className="choosedigi">
      <Container>
        {/* Header Section */}
        <Row className="text-center">
          <Col xs={12}>
            <p>Nextweb Pty Ltd</p>
            <h2>Why Choose Nextweb for Low-Code App Development?</h2>
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
              Intuitive Interface
            </h5>
            <p className="mb-4">
              The app’s user interface will be intuitive and user-friendly,
              enabling even those with limited technical skills to navigate and
              use the platform easily. Drag-and-drop functionality, clear
              labels, and logical workflows also contribute to a smooth user
              experience.
            </p>
            <h5 mt-3 mb-2>
              <i className="fa-solid fa-circle-check me-2 right"></i>Visual
              Customization
            </h5>
            <p className="mb-4">
              The apps we build allow for extensive visual customization,
              enabling users to design and modify user interfaces, workflows,
              and data structures to match specific requirements. This
              flexibility empowers users to create tailored solutions without
              requiring extensive coding.
            </p>
            <h5 mt-3 mb-2>
              <i className="fa-solid fa-circle-check me-2 right"></i>Robust
              Component Library
            </h5>
            <p className="mb-4">
              A rich library of pre-built components, templates, and widgets
              helps us build innovative apps. These pre-build libraries offer a
              range of functionalities, including integrations, data connectors,
              UI elements, and automation tools, allowing us to assemble complex
              applications faster.
            </p>
            <h5 mt-3 mb-2>
              <i className="fa-solid fa-circle-check me-2 right"></i>Scalability
            </h5>
            <p className="mb-4">
              The low-code apps we build support the scalability needs of
              projects as they grow. The ability to handle increased data
              volumes, user interactions, and integrations without compromising
              performance or stability. The low-code we develop provides robust
              workflow automation capabilities, which help to easily define and
              automate business processes, including approvals, notifications,
              data routing, and decision-making logic
            </p>
          </Col>
        </Row>

        {/* Contact Section */}
        <Row>
          <Col xs={12}>
            <p>
              <p className="mb-4">
                The visual nature of low-code development enables rapid
                prototyping and iterative development. Changes can be made
                quickly based on user feedback, allowing faster iterations and
                improvements. Low-code platforms help minimize manual coding,
                letting us to add custom code only when necessary.
              </p>
              <p className="mb-4">
                Embark on a journey of innovation and efficiency with Nextweb.
                Discover the potential of low-code app development and
                experience the thrill of creating powerful applications faster.
                Contact us today by sending us an email at info@nextweb.com.au.
                You can also post your enquiry online to learn how, to partner
                with us on your digital transformation initiatives in Australia.
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

export default LowcodeChoose;
