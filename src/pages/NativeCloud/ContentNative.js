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

const ContentNative = () => {
  const tabsData = [
    {
      imageUrl: "assets/img/androidhead.jpeg",
      content: (
        <div className="contentsubpage">
          <p>
            Native cloud app development help create applications to run and
            operate within cloud computing environments. These applications are
            built from the ground up to leverage the cloud platforms features,
            capabilities, and functionalities. Native cloud app development
            differs from traditional application development by adapting
            existing on-premises applications to work on the cloud. The
            characteristics of native cloud app development include:
          </p>

          <ul style={{ paddingLeft: "0px" }}>
            <li style={{ listStyle: "none" }}>
              <strong>Cloud-Native Architecture:</strong> Native cloud apps use
              cloud-native architectural principles. It involves breaking down
              applications into smaller, decoupled components that can be
              independently deployed, scaled, and managed.
            </li>
            <li style={{ listStyle: "none" }}>
              <strong>Microservices:</strong> Microservices architecture is a
              common approach in native cloud app development. Applications are
              divided into loosely coupled, independently deployable services,
              allowing scalability, fault isolation, and easier maintenance.
            </li>
            <li style={{ listStyle: "none" }}>
              <strong>Containerization:</strong> Native cloud apps often use
              containerization technology (such as Docker) to package
              applications and their dependencies. Containers provide
              consistency across different environments and enable efficient
              deployment and scaling.
            </li>
            <li style={{ listStyle: "none" }}>
              <strong>Orchestration:</strong> Container orchestration tools like
              Kubernetes help manage, deploy, scale, and operate containerized
              applications. Orchestration ensures that applications run reliably
              and efficiently in the cloud.
            </li>
            <li style={{ listStyle: "none" }}>
              <strong>Serverless Computing:</strong> Serverless computing
              abstracts infrastructure management by allowing developers to
              focus solely on writing code. Developers create functions that are
              triggered by events when in serverless mode. These events
              automatically scale based on demand.
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
            <h2>Headstart on Native Cloud App Development</h2>
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

export default ContentNative;
