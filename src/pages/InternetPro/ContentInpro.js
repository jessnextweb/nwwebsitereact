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
        style={{ width: "501px", height: "501px" }}
      />
    </Col>
  </Row>
);

const ContentInpro = () => {
  const tabsData = [
    {
      imageUrl: "assets/img/Internet Programming & Web Applications-1.jpg",
      content: (
        <div className="contentsubpage">
          <p>
            Nextweb Australia is a trusted local leader in Internet Programming
            Services. Our web programming experts have extensive experience
            creating custom web applications that are functional, scalable,
            secure, and tailored to meet your business needs. We take pride in
            delivering solutions that drive results for businesses in Australia.
          </p>
          <p>
            Nextweb specializes in delivering cutting-edge solutions, including
            Mobile Application Development Australia, tailored to meet the
            evolving needs of businesses. Our team focuses on creating seamless,
            user-friendly apps that enhance customer experiences and streamline
            business operations. Nextweb offers innovative solutions such as
            custom web applications Australia, designed to help businesses
            enhance their online presence and streamline their processes. Our
            expertise in e-commerce development Australia ensures businesses can
            provide a seamless shopping experience, boosting customer engagement
            and sales. By focusing on tailored, scalable web applications,
            Nextweb helps companies in Australia integrate advanced
            functionalities that support their unique goals.
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
            <h2>Elevating Your Business with Internet Programming Australia</h2>
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

export default ContentInpro;
