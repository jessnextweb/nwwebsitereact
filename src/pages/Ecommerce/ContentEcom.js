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

const ContentEcom = () => {
  const tabsData = [
    {
      imageUrl: "assets/img/E-Commerce Application Development-1.jpg",
      content: (
        <div className="contentsubpage">
          <p>
            E-commerce web development helps to create online platforms that
            facilitate buying and selling goods and services over the Internet.
            E-commerce websites are virtual marketplaces where businesses can
            showcase their products or services, and customers can browse,
            select, and purchase items online. E-commerce web development
            encompasses a wide range of technical and design aspects to ensure a
            seamless and user-friendly shopping experience for customers. Some
            of the components of e-commerce website designs are:
          </p>
          <p>
            Ecommerce is swiftly changing, bringing exciting new opportunities
            for both burgeoning and established businesses to enhance their
            online presence. It's fascinating to watch how these advancements
            are not only changing the technical side of ecommerce but are also
            deeply influencing how we connect with and serve our customers.
            Today's online shopping experiences are becoming more intuitive,
            personalized, and accessible, making it easier than ever for
            customers to find exactly what they need and for businesses to
            expand their reach.
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
            <h2>Emerging Technologies in Business Australia</h2>
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

export default ContentEcom;
