import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import "../App.css";

const ClientCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const clients = [
    "https://logos-download.com/wp-content/uploads/2016/05/MG_logo_silver.png",
    "https://thumbs.dreamstime.com/b/web-184786296.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl7kQPxTlSYv6JKr35RALLKb5WgQzb2Opute0d7Ws7gHawWIlzK-Xf3fe-JuBXxFMeLaI&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwBfIzqdBnjOiGRuM52LNGCL9TT3E3aaBYDQ&s",
  ];

  return (
    <section className="client py-5 col-lg-16 col-md-12" id="clientsid">
      <Container>
        <div
          className="section-title text-center"
          style={{ marginBottom: "5rem" }}
        >
          <h2 style={{ color: "#fff", fontFamily: "Oswald" }}>
            Our Valuable Clients
          </h2>
        </div>
        <Slider {...settings}>
          {clients.map((imgSrc, index) => (
            <div key={index} className="px-3" id="chan">
              <img
                src={imgSrc}
                alt={`Client logo ${index + 1}`}
                style={{
                  maxHeight: "150px",
                  objectFit: "contain",
                  width: "100%",
                }}
              />
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default ClientCarousel;
