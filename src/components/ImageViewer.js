import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Modal, Button } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "../App.css";

const ImageViewer = () => {
  const [show, setShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (show) {
      // Initialize slider when the modal is shown
      setTimeout(() => {
        // Force a reflow to trigger slider initialization
        const slider = document.querySelector('.slick-slider');
        if (slider) {
          slider.style.visibility = 'visible';
        }
      }, 300);
    }
  }, [show]);

  const handleShow = (index) => {
    setCurrentIndex(index);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const images = [
    {
      src: 'assets/img/portfolio14.jpg',
      thumbnail: 'assets/img/portfolio14.jpg',
    },
    {
      src: 'assets/img/portfolios341.jpg',
      thumbnail: 'assets/img/portfolios341.jpg',
    },
    {
      src: 'assets/img/portfolios11.jpg',
      thumbnail: 'assets/img/portfolios11.jpg',
    },
    {
      src: 'assets/img/portfolios340.jpg',
      thumbnail: 'assets/img/portfolios340.jpg',
    },
  ];

  const settings = {
    initialSlide: currentIndex,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // Show one image at a time
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div style={{padding:"50px"}}>
      <div className="image-thumbnails d-flex flex-wrap justify-content-center" style={{gap:"30px"}}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.thumbnail}
            alt={`Thumbnail ${index}`}
            onClick={() => handleShow(index)}
            className="thumbnail-image"
          />
        ))}
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body className="d-flex justify-content-center p-0">
          <Slider {...settings} className="w-100">
            {images.map((image, index) => (
              <div key={index} className="d-flex justify-content-center">
                <img
                  src={image.src}
                  alt={`Slide ${index}`}
                  className="slide-image"
                />
              </div>
            ))}
          </Slider>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ImageViewer;
