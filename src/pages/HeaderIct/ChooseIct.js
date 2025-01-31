import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ChooseIct = () => {
  return (
    <div className="choosedigi">
      <Container>
        {/* Header Section */}
        <Row className="text-center">
          <Col xs={12}>
            <p>Nextweb Pty Ltd</p>
            <h2>Why Choose Nextweb, Australia?</h2>
          </Col>
        </Row>

        {/* Content Section */}
        <Row className="mb-2">
          <Col xs={12}>
            <p className="contentchoosepage">
              Nextweb has established itself as a trusted provider of ICT
              Professional Services across Australia. Our team of experts offers
              reliable and professional solutions, ensuring seamless integration
              with your business processes. With a strong local presence, we
              provide tailored services that meet the specific needs of
              businesses in Australia, helping you navigate the digital
              landscape with confidence.
            </p>
          </Col>
        </Row>

        {/* Deep Local Expertise */}
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center">
            <div className="image-stack">
              <img
                src="assets/img/Consultancy ICT Professional Services-2.jpg"
                alt="Transparent Service"
                className="img-fluid top-image"
                style={{
                  maxWidth: "100%",
                  borderRadius: "5%",
                  width: "600px",
                  height: "500px",
                }}
              />
            </div>
          </Col>
          <Col xs={12} md={6} id="contentcol" className="contentchoosepage">
            <h4
              className="mt-3 mb-2"
              style={{ fontFamily: "Oswald", fontSize: "1.25rem" }}
            >
              <i className="fa-solid fa-circle-check me-3 right"></i>Expert ICT
              Professional Services Australia
            </h4>
            <p className="mb-4" style={{ paddingLeft: "40px" }}>
              Expert ICT Professional Services Australia, Australia can reduce
              downtime, streamline operations, and improve customer experiences
              by leveraging the latest digital tools and infrastructure.
            </p>
            <p style={{ paddingLeft: "40px" }}>
              {" "}
              Adapting to the ever-changing landscape of technology and securing
              IT systems is crucial for businesses. Nextweb offers expert
              Professional ICT Services, delivering tailored solutions that are
              scalable and cost-effective. We ensure that your business remains
              at the forefront of innovation while maintaining robust security,
              so you can focus on growth without worrying about tech challenges.
              Let Nextweb's reliable support empower your business to thrive in
              the digital age, keeping your operations smooth, secure, and
              competitive.
            </p>
            <p style={{ paddingLeft: "40px" }}>
              In today’s fast-paced digital landscape, businesses need to stay
              competitive by investing in online marketing. At Nextweb, we
              provide Australia businesses with tailored solutions that help
              them succeed online. From SEO to social media management and
              pay-per-click advertising,
            </p>
            {/* <h4 mt-3 mb-2>
              <i className="fa-solid fa-circle-check me-2 right"></i>Better
              Audience Targeting:
            </h4>
            <p className="mb-4">
              Through precise market segmentation, we help you target the right
              audience, ensuring that your marketing campaigns reach those most
              likely to engage with your business. Targeted marketing strategies
              Australia, local audience engagement Australia.
            </p>
            <h4 mt-3 mb-2>
              <i className="fa-solid fa-circle-check me-2 right"></i>Measurable
              Results:
            </h4>
            <p className="mb-4">
              Our data-driven approach provides detailed insights into the
              success of your campaigns. This allows for continuous optimization
              to maximize your marketing ROI. Measurable online marketing
              Australia, digital marketing ROI Australia.
            </p>
            <h4 mt-3 mb-2>
            
            </h4>
            <p className="mb-4">
              For inquiries or to discuss your software requirements, call us at
              <strong> 1800 365 247</strong> or visit our office at{" "}
              <strong>103/9 Bay Street Southport, QLD 4215.</strong>
            </p> */}
          </Col>
        </Row>

        {/* Contact Section */}
        <Row>
          <Col xs={12}>
            <p className="contentchoosepage">
              Business Details: Phone: 1800 365 247 | Address: 103/9 Bay Street
              Southport, QLD 4215
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChooseIct;
