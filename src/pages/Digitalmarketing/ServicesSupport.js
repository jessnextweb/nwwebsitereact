import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const ServicesSupport = () => {
  return (
    <div className="digital bg-white">
      <div className="container bg-white text-black" id="contentsubpage">
        <h1 className="text-center p-4">Nextweb Digital Marketing Services</h1>
        <p>
          At Nextweb, we offer a comprehensive suite of Digital marketing
          services designed to help your business grow. Here’s an overview of
          what we provide:
        </p>

        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-6" id="supporttwocol">
              <section>
                <h5>
                  <i className="fa-solid fa-circle-check me-2 right"></i>{" "}
                  Website Development
                </h5>
                <p>
                  Your website is often the first point of contact for potential
                  customers. We design and develop websites that are not only
                  visually appealing but also optimized for conversions. Our
                  goal is to create a user-friendly experience that turns
                  visitors into loyal customers.
                </p>
              </section>
              <section>
                <h5>
                  <i className="fa-solid fa-circle-check me-2 right"></i> Search
                  Engine Optimization (SEO)
                </h5>
                <p>
                  Ranking high on search engines like Google is crucial for
                  driving organic traffic to your website. Our SEO strategies
                  are designed to improve your search rankings by optimizing
                  your website’s content, structure, and performance. From
                  keyword research to on-page and off-page SEO, we ensure your
                  business is easily discoverable by people searching for
                  relevant services in Gold Coast, Australia.
                </p>
              </section>
              <section>
                <h5>
                  <i className="fa-solid fa-circle-check me-2 right"></i> Social
                  Media Marketing
                </h5>
                <p>
                  Social media platforms like Facebook, Instagram, and LinkedIn
                  are powerful tools for reaching your target audience. We
                  create engaging social media campaigns that increase brand
                  awareness, drive traffic, and boost customer engagement. Our
                  social media experts know how to leverage these platforms to
                  create conversations and build a loyal community around your
                  brand.
                </p>
              </section>
            </div>

            {/* Column 2 */}
            <div className="col-md-6" id="supporttwocol">
              <section>
                <h5>
                  <i className="fa-solid fa-circle-check me-2 right"></i> Online
                  Advertising
                </h5>
                <p>
                  Paid advertising through Google Ads or social media platforms
                  can provide quick, measurable results. We create targeted ad
                  campaigns designed to maximize your return on investment
                  (ROI). Our focus is on delivering high-quality leads and
                  conversions at an affordable cost, ensuring that your
                  marketing budget is used efficiently.
                </p>
              </section>
              <section>
                <h5>
                  <i className="fa-solid fa-circle-check me-2 right"></i>{" "}
                  Virtual / Cloud Solutions Development
                </h5>
                <p>
                  Stay ahead of technological trends with our innovative
                  cloud-based solutions.
                </p>
              </section>
              <section>
                <h5>
                  <i className="fa-solid fa-circle-check me-2 right"></i>{" "}
                  Emerging Technologies
                </h5>
                <p>
                  Leverage AI, automation, and data-driven tools to optimize
                  your business processes.
                </p>
              </section>
              <p>
                With a broad reach across Gold Coast, Australia, Nextweb is
                proud to offer affordable Digital marketing solutions that meet
                the needs of businesses of all sizes. Whether you’re a startup
                or an established company, we can tailor our services to your
                specific goals and budget.
              </p>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="container my-4">
          <div className="row text-center">
            <div className="col-md-4">
              <img
                src="assets/img/digi1.jpg"
                alt="Service 1"
                className="img-fluid rounded"
              />
              {/* <p className="mt-2">Service 1</p> */}
            </div>
            <div className="col-md-4">
              <img
                src="assets/img/digi2.jpg"
                alt="Service 2"
                className="img-fluid rounded"
              />
              {/* <p className="mt-2">Service 2</p> */}
            </div>
            <div className="col-md-4">
              <img
                src="assets/img/digi3.jpg"
                alt="Service 3"
                className="img-fluid rounded"
              />
              {/* <p className="mt-2">Service 3</p> */}
            </div>
          </div>
        </div>

        <h5>How to Book Our Services</h5>
        <ol>
          <li>
            Call us at <a href="tel:1800365247">1800 365 247</a> to speak with
            one of our friendly digital marketing consultants.
          </li>
          <li>Discuss your business goals and needs with our team.</li>
          <li>
            Begin your journey to online success with Nextweb and watch your
            business grow!
          </li>
        </ol>
        <p>
          For inquiries or bookings, visit our office at 103/9 Bay Street
          Southport, QLD 4215 or give us a call today. Don’t wait—book Digital
          marketing Gold Coast, Australia services now to give your business the
          boost it needs!
        </p>

        <h5>FAQs</h5>
        <div className="pb-4 pt-3">
          <Accordion style={{ backgroundColor: "#f8f9fa" }}>
            <Accordion.Item eventKey="0">
              <Accordion.Header style={{}}>
                What is the cost of Digital marketing in Gold Coast?
              </Accordion.Header>
              <Accordion.Body style={{ backgroundColor: "#f8f9fa" }}>
                The cost of digital marketing varies depending on the services
                and strategies chosen. Contact Nextweb at 1800 365 247 for a
                customized quote tailored to your business needs.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Do professional Digital marketers in Gold Coast use user-centric
                solutions?
              </Accordion.Header>
              <Accordion.Body>
                Yes, professional digital marketers in Gold Coast, like Nextweb,
                prioritize user-centric solutions. Our strategies focus on
                creating a seamless user experience that encourages engagement
                and conversions.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                What is the best practice for Digital marketing in Gold Coast?
              </Accordion.Header>
              <Accordion.Body>
                Nextweb is your go-to expert for Digital marketing in Gold
                Coast, Australia. We provide innovative solutions tailored to
                your business needs, ensuring maximum online success.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <section>
          <p>
            Nextweb is your go-to expert for Digital marketing in Gold Coast,
            Australia. With a focus on professional service, innovative
            solutions, and a deep understanding of the local market, we provide
            everything your business needs to succeed online.
          </p>
          <p>
            Contact us today at 1800 365 247 or visit our office at 103/9 Bay
            Street Southport, QLD 4215 to learn more or schedule a consultation.
          </p>
          <p>
            For the best Digital marketing in Gold Coast, Australia, Nextweb has
            you covered. Let us help you take your business to the next level!
          </p>
        </section>
      </div>
    </div>
  );
};

export default ServicesSupport;
