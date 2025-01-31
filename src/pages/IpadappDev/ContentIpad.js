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

const ContentIpad = () => {
  const tabsData = [
    {
      imageUrl: "assets/img/androidhead.jpeg",
      content: (
        <div className="contentsubpage">
          <p>
            iPad App Development helps create applications, designed and
            optimised for Apple’s iPad tablet device by using Apple’s iOS
            operating system. iPad apps are developed using Apple’s iOS or
            iPadOS software development kit (SDK). This environment provides the
            necessary tools, frameworks, and APIs for building applications
            specifically for iPad devices. Developers use programming languages
            like Swift and Objective-C to write app code. It is vital that iPad
            developers conform to Apple’s Design guidelines to create engaging
            and user-friendly applications.
          </p>
          <p>
            iPad apps are mandated to follow Apple’s Human Interface Guidelines
            (HIG) to build a consistent and intuitive user interface. It is
            important, because it helps developers build apps that are optimised
            for touch interactions, utilizing appropriate gestures, and an
            interface that takes advantage of the iPad’s large screen size for a
            vivid and responsive visual experience. Developers must adhere to
            Apple’s App Store guidelines and policies. These guidelines include
            rules related to app content, security, privacy, and compliance for
            successful App Store submission.
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
            <h2>Crafting Excellence through iPad App Development</h2>
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

export default ContentIpad;
