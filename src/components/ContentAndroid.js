import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

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

const ContentDigital = () => {
  const tabsData = [
    {
      imageUrl: "assets/img/androidhead.jpeg",
      content: (
        <div className="contentsubpage">
          <p>
            Android app development is the technology for creating mobile
            applications designed to run on Android devices. Android is an
            open-source mobile operating system developed by Google and is one
            of the most popular mobile app development environments worldwide.
            Android app development requires diverse skills, creativity, and
            ingenuity to create innovative applications. You will need a deep
            understanding of Java or Kotlin programming languages to develop
            Android Apps, besides proficiency in the Android Software
            Development Kit (SDK) and Android Studio.
          </p>
          <p>
            Google’s official Integrated Development Environment (IDE) for
            Android App Development. Android Studio offers multiple language
            support for developing apps in multiple languages and device
            configurations, allowing developers to target a broader audience.
            Android Studio also provides tools, emulators, and online resources
            to streamline app development. Some resources included in Android
            Studio are code editors, layout editors, Android emulators, Android
            SDK Manager, App Bundles, and APK Generators.
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
            <h2>
              Digital Marketing Australia: Your Go-to Expert for Digital Success
            </h2>
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

export default ContentDigital;
