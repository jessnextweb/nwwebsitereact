import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../App.css";

const TabContent = ({ title, imageUrl, content }) => (
  <Row className="mb-5 ">
    <Col xs={12} md={6}>
      <h3>{title}</h3>
      <div>{content}</div>
    </Col>
    <Col xs={12} md={6} className="text-center">
      <img
        src={imageUrl}
        alt={title}
        className="img-fluid"
        id="digitalimageid"
      />
    </Col>
  </Row>
);

const ContentLowcode = () => {
  const tabsData = [
    {
      imageUrl: "assets/img/androidhead.jpeg",
      content: (
        <div className="contentsubpage">
          <p>
            Low-code application development is an approach to software
            development that aims to simplify and accelerate the creation of
            applications by using visual interfaces and pre-built components. In
            a low-code environment, developers, often called “citizen
            developers,” can create applications with minimal hand-coding and
            technical expertise. This approach is useful for rapidly developing
            and deploying software solutions, especially for business processes,
            without the need for extensive coding skills. The key
            characteristics of low-code application development include:
          </p>

          <ul style={{ paddingLeft: "0px" }}>
            <li style={{ listStyle: "none" }}>
              <strong>Visual Development:</strong> Low-code platforms provide
              visual interfaces where developers can create applications by
              dragging and dropping components onto a canvas. It lets developers
              design user interfaces, workflows, and data structures without
              writing extensive code.
            </li>
            <li style={{ listStyle: "none" }}>
              <strong>Pre-Built Components:</strong> Low-code platforms offer an
              extensive library of pre-built components, such as templates,
              widgets, and integrations that can quickly assemble applications.
              These components abstract complex functionality and reduce the
              need for manual coding.
            </li>
            <li style={{ listStyle: "none" }}>
              <strong>Workflow Automation:</strong> Low-code platforms often
              include workflow automation capabilities, enabling developers to
              define and automate business processes like approvals,
              notifications, and data routing effortlessly.
            </li>
            <li style={{ listStyle: "none" }}>
              <strong>Integration Capabilities:</strong> Integrating with
              existing systems and databases is a crucial aspect of application
              development. Low-code platforms often offer integration connectors
              that facilitate communication between different systems without
              extensive coding.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div id="androidhome" className="androidhome">
      <Container
        id="androidid"
        // style={{ padding: "0px 50px 50px 50px", border: "1px solid #fff" }}
      >
        {/* Add Header Section */}
        <Row className="mb-4">
          <Col xs={12} className="text-center">
            <p>Nextweb Pty Ltd</p>
            <h2>Unleash Innovation With Low-Code App Development</h2>
          </Col>
        </Row>

        {/* Render All Content */}
        {tabsData.map((tab, index) => (
          <TabContent
            key={index}
            title={tab.title}
            imageUrl={tab.imageUrl}
            content={tab.content}
            className="contentandroid"
          />
        ))}
      </Container>
    </div>
  );
};

export default ContentLowcode;
