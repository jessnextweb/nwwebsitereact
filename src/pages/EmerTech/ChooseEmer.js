import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ChooseEmer = () => {
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
              Our solutions are designed to provide businesses with
              state-of-the-art marketing services, such as SEO (Search Engine
              Optimization), Growth marketing, social media optimization, and
              pay-per-click advertising, all of which are crucial for building
              an online presence. We also incorporate content marketing,
              ensuring that your brand's voice resonates with your audience,
              driving engagement and conversions.
            </p>
          </Col>
        </Row>

        {/* Deep Local Expertise */}
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center">
            <div className="image-stack">
              <img
                src="assets/img/Emerging Technologies-2.jpg"
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
              <i className="fa-solid fa-circle-check me-3 right"></i>Increased
              Visibility:
            </h4>
            <p className="mb-4" style={{ paddingLeft: "40px" }}>
              By targeting relevant keywords and leveraging SEO strategies, we
              ensure that your business appears at the top of local search
              results, making it easier for customers to find you online. Local
              business marketing Australia, increase visibility online
              Australia.
            </p>
            <h4 className="mt-3 mb-2" id="chooselisthead">
              <i className="fa-solid fa-circle-check me-3 right"></i>Better
              Audience Targeting:
            </h4>
            <p className="mb-4" style={{ paddingLeft: "40px" }}>
              Through precise market segmentation, we help you target the right
              audience, ensuring that your marketing campaigns reach those most
              likely to engage with your business. Targeted marketing strategies
              Australia, local audience engagement Australia.
            </p>
            <h4 className="mt-3 mb-2" id="chooselisthead">
              <i className="fa-solid fa-circle-check me-3 right"></i>Measurable
              Results:
            </h4>
            <p className="mb-4" style={{ paddingLeft: "40px" }}>
              Our data-driven approach provides detailed insights into the
              success of your campaigns. This allows for continuous optimization
              to maximize your marketing ROI. Measurable online marketing
              Australia, digital marketing ROI Australia.
            </p>
            <h4 mt-3 mb-2>
              {/* <i className="fa-solid fa-circle-check me-3 right"></i>Local Expertise: */}
            </h4>
            <p className="mb-4" style={{ paddingLeft: "40px" }}>
              For inquiries or to discuss your software requirements, call us at
              <strong> 1800 365 247</strong> or visit our office at{" "}
              <strong>103/9 Bay Street Southport, QLD 4215.</strong>
            </p>
          </Col>
        </Row>

        {/* Contact Section */}
        <Row>
          <Col xs={12}>
            <div className="contentchoosepage">
              <p>
                In today’s fast-paced digital landscape, businesses need to stay
                competitive by investing in online marketing. At Nextweb, we
                provide Australia businesses with tailored solutions that help
                them succeed online. From SEO to social media management and
                pay-per-click advertising,
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChooseEmer;
