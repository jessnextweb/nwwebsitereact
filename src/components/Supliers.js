import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const services = [
  {
    id: 1,
    image: "../../assets/img/goldcoast.png",
  },
  {
    id: 2,
    image: "../../assets/img/victoria.png",
  },
  {
    id: 3,
    image: "../../assets/img/actgovernment.png",
  },
  {
    id: 4,
    image: "../../assets/img/tasman.png",
  },
  {
    id: 5,
    image: "../../assets/img/qtenders.png",
  },
  {
    id: 6,
    image: "../../assets/img/quotations.png",
  },
  {
    id: 7,
    image: "../../assets/img/satenders.png",
  },
];

const Supliers = () => {
  const rows = [];
  for (let i = 0; i < services.length; i += 3) {
    rows.push(services.slice(i, i + 3));
  }

  return (
    <div className="contentsupliers">
      <main style={{ textAlign: "center" }}>
        <p className="nwhead" style={{ color: "#ff478d" }}>
          NEXTWEB PTY LTD
        </p>
        <h2 className="supliershead">Government Approved IT Suppliers</h2>
        <p className="servicesubhead">
          Leader in Website, Mobile App & CRM Development
        </p>
      </main>

      <Container className="centered-container">
        {rows.map((row, rowIndex) => (
          <Row key={rowIndex} className="mb-4" id="suplierscards">
            {row.map((service) => (
              <Col key={service.id} xs={12} sm={6} md={4} className="mb-3">
                <div className="supliers-card text-center">
                  <img
                    src={service.image}
                    alt="Service logo"
                    className="service-image"
                  />
                </div>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default Supliers;
