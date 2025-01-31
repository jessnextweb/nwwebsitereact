import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Facts = () => {
  const statistics = useMemo(
    () => [
      {
        imgSrc: "assets/img/badges.svg",
        count: 200,
        additionalText: "+",
        textBottom: "Projects Delivered",
      },
      {
        imgSrc: "assets/img/notepad.svg",
        count: 10000,
        additionalText: "+",
        textBottom: "Search Optimized Websites",
      },
      {
        imgSrc: "assets/img/cooperation.svg",
        count: 8000,
        additionalText: "+",
        textBottom: "Happy Customers",
      },
      {
        imgSrc: "assets/img/award.svg",
        count: 100,
        additionalText: "%",
        textBottom: "Guaranteed Satisfaction",
      },
    ],
    []
  );

  const [currentCounts, setCurrentCounts] = useState(statistics.map(() => 0));

  useEffect(() => {
    const intervalIds = statistics.map((stat, index) => {
      const increment = Math.ceil(stat.count / 100); // Adjust increment for smooth animation
      return setInterval(() => {
        setCurrentCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.count) {
            newCounts[index] = Math.min(
              newCounts[index] + increment,
              stat.count
            );
          }
          return newCounts;
        });
      }, 20); // Adjust speed of counter
    });

    return () => {
      intervalIds.forEach((id) => clearInterval(id));
    };
  }, [statistics]);

  return (
    <div className="statistics py-4">
      <Container>
        <Row className="text-center g-4">
          {statistics.map((stat, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={3}
              className="statistics-card d-flex flex-column align-items-center"
            >
              <img
                src={stat.imgSrc}
                alt=""
                loading="lazy"
                className="mb-3 img-fluid"
                style={{ maxWidth: "80px" }}
              />
              <h2 className="fw-bold" style={{ fontSize: "2.5rem" }}>
                {currentCounts[index]}
                {stat.additionalText || ""}
              </h2>
              <p
                className="text-m"
                style={{
                  fontSize: "1.2rem",
                  color: "#fff",
                  fontFamily: "Questrial",
                }}
              >
                {stat.textBottom}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Facts;
