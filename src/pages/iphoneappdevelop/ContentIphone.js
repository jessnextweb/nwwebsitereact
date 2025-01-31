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

const ContentIphone = () => {
  const tabsData = [
    {
      imageUrl: "assets/img/androidhead.jpeg",
      content: (
        <div className="contentsubpage">
          <p>
            iPhone app development is about creating applications designed and
            optimized for Apple’s iPhone devices. It also involves developing
            applications that run on Apple’s iOS operating system and conform to
            Apple’s design guidelines. iPhone apps are developed using Apple’s
            iOS Software Development Kit (SDK), which includes tools,
            frameworks, and APIs for building applications for iOS devices.
          </p>
          <p>
            Apple’s iOS Software Development Kit (SDK) includes tools,
            frameworks, and APIs for building applications for iOS devices.
            Swift, or Objective-C, are programming language used to write app
            code. iPhone apps must follow Apple’s Human Interface Guidelines
            (HIG) to ensure a consistent and intuitive user experience. iPhone
            app developers must adhere to Apple’s App Store guidelines and
            policies. These guidelines cover app content, functionality,
            security, privacy, and more. Compliance with these guidelines is
            essential for successful submission to the Apple App Store.
          </p>
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
            <h2>Designing Excellent iPhone Apps to Power Businesses</h2>
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

export default ContentIphone;
