import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const NativeChoose = () => {
  return (
    <div className="choosedigi">
      <Container>
        {/* Header Section */}
        <Row className="text-center">
          <Col xs={12}>
            <p>Nextweb Pty Ltd</p>
            <h2>Why Choose Nextweb for Native Cloud App Development?</h2>
          </Col>
        </Row>

        {/* Content Section */}
        <Row className="mb-2">
          <Col xs={12}>
            <p>
              Nextweb can be your reliable partner for creating high-quality,
              scalable, & innovative cloud-native applications. Here are some
              valid reasons to consider us for all native cloud application
              needs in Australia:
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
              <i className="fa-solid fa-circle-check me-2 right"></i>Expertise
              in Cloud Technologies
            </h5>
            <p className="mb-4">
              Our team of experts possesses deep expertise in cloud computing
              platforms, such as Amazon Web Services (AWS), Microsoft Azure,
              Google Cloud Platform (GCP), or others. We are well-versed in
              tools, services, and best practises from these cloud platforms.
            </p>
            <h5 mt-3 mb-2>
              <i className="fa-solid fa-circle-check me-2 right"></i>
              Cloud-Native Architecture Proficiency
            </h5>
            <p className="mb-4">
              We have extensive experience designing and implementing
              cloud-native architectures, including microservices,
              containerization, serverless computing, and container
              orchestration. Our engineers and solution architects understand
              the intricacies of microservices architecture. It lets us design,
              deploy, and manage microservices-based applications for improved
              agility and scalability
            </p>
            <h5 mt-3 mb-2>
              <i className="fa-solid fa-circle-check me-2 right"></i>
              Containerization Mastery
            </h5>
            <p className="mb-4">
              Nextweb’s engineers are proficient in containerization
              technologies like Docker and container orchestration platforms
              like Kubernetes. We are capable of managing containerized
              applications efficiently.
            </p>
            <h5 mt-3 mb-2>
              <i className="fa-solid fa-circle-check me-2 right"></i>Continuous
              Integration & Continuous Delivery
            </h5>
            <p className="mb-4">
              Continuous integration and deployment pipelines automate the
              process of building, testing, and deploying applications, allowing
              for rapid and frequent updates. Native cloud apps we develop take
              advantage of the cloud platform’s managed services, such as
              databases, caching, messaging, and authentication, to reduce
              operation overload during development.
            </p>
          </Col>
        </Row>

        {/* Contact Section */}
        <Row>
          <Col xs={12}>
            <p>
              <p className="mb-4">
                Native cloud apps we develop can leverage cloud-based storage
                and data processing services, enabling scalability and
                flexibility in handling large volumes of data. You can benefit
                from our expertise in cloud computing for scalability, cost
                efficiency, flexibility, and faster time to market. Do you have
                a native cloud app development project in mind? Please email us
                at info@nextweb.com.au or update our online enquiry form to
                learn more about our digital products and services.
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

export default NativeChoose;
