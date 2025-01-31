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

const ContentswSolution = () => {
  const tabsData = [
    {
      imageUrl: "assets/img/software-solutions1.png",
      content: (
        <div className="contentsubpage">
          <p>
            At Nextweb, we bring years of local expertise to deliver
            comprehensive and customized software solutions designed to meet the
            distinct needs of businesses across the Australia. Whether it’s a
            scalable enterprise application or a bespoke software platform, we
            ensure our solutions not only support your business but help it
            thrive in a digital-first world. Our commitment to innovation and
            understanding of the local market makes us a trusted partner for
            software development in Australia.
          </p>
          {/* <p>
          When you choose Nextweb for Software Development & Consulting Services in Gold Coast, Australia, you’re partnering with a company that prioritizes
           your success. Our local team understands the unique challenges faced by businesses in the region, and we tailor our solutions accordingly.
          </p> */}
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
            <h2>Streamlined Software Solutions Australia</h2>
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

export default ContentswSolution;
