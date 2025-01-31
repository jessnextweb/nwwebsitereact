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

const ContentHybrid = () => {
  const tabsData = [
    {
      imageUrl: "assets/img/androidhead.jpeg",
      content: (
        <div className="contentsubpage">
          <p>
            Hybrid app development involves creating applications that can run
            on multiple platforms (e.g., iOS and Android) using web technologies
            such as HTML, CSS, and JavaScript. Hybrid apps are essentially web
            apps running within a native container. They use frameworks like
            Flutter or React Native that let developers to write code once and
            deploy it across different platforms. These frameworks provide
            tools, libraries, and development environments to simplify the
            creation of hybrid apps for different platforms.
          </p>
          <p>
            Hybrid apps can run on multiple platforms, such as iOS and Android,
            using a single codebase. It saves development time and effort
            compared to building separate native apps for each platform. These
            apps are wrapped in a native container, thus acting as a go between
            the web code and the underlying mobile platform. The container
            provides access to device features and APIs through a layer of
            native code, enabling the app to interact with native device
            functionalities effortlessly.
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
            <h2>Success with Enterprising Hybrid App Development</h2>
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

export default ContentHybrid;
